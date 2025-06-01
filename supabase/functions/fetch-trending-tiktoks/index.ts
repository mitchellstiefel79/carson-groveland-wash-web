
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rapidApiKey = Deno.env.get('RAPIDAPI_KEY');
    
    if (!rapidApiKey) {
      throw new Error('RAPIDAPI_KEY not configured');
    }

    const response = await fetch('https://tiktok-api23.p.rapidapi.com/api/post/trending?count=16', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'tiktok-api23.p.rapidapi.com',
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store trending videos in database
    if (data.posts && Array.isArray(data.posts)) {
      for (const post of data.posts) {
        const { error } = await supabase
          .from('tiktok_videos')
          .upsert({
            title: post.title || 'Untitled',
            video_url: post.video_url || post.play_url || '',
            user_name: post.author?.unique_id || post.author?.nickname || 'Unknown',
            profile_pic: post.author?.avatar_url || null,
            tiktok_link: post.share_url || `https://tiktok.com/@${post.author?.unique_id}/video/${post.aweme_id}`,
          }, {
            onConflict: 'tiktok_link'
          });
        
        if (error) {
          console.error('Error inserting video:', error);
        }
      }
    }

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching trending TikToks:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
