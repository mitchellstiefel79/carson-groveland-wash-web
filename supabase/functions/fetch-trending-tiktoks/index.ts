
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
    const rapidApiKey = '2c11cebbe5mshc94b1b4e4a6553bp187ffajsna68f44b984cb';
    
    // Fetch videos from @carson.soft.wash user
    const response = await fetch('https://tiktok-video-no-watermark2.p.rapidapi.com/user/posts?unique_id=carson.soft.wash&count=20', {
      method: 'GET',
      headers: {
        'x-rapidapi-key': rapidApiKey,
        'x-rapidapi-host': 'tiktok-video-no-watermark2.p.rapidapi.com',
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

    // Store videos from carson.soft.wash in database
    if (data.data && Array.isArray(data.data.videos)) {
      for (const video of data.data.videos) {
        const { error } = await supabase
          .from('tiktok_videos')
          .upsert({
            title: video.title || video.desc || 'Untitled',
            video_url: video.play || video.download_addr?.url_list?.[0] || '',
            user_name: video.author?.unique_id || video.author?.nickname || 'carson.soft.wash',
            profile_pic: video.author?.avatar_thumb?.url_list?.[0] || null,
            tiktok_link: video.video_id ? `https://tiktok.com/@carson.soft.wash/video/${video.video_id}` : '',
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
    console.error('Error fetching videos from @carson.soft.wash:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
