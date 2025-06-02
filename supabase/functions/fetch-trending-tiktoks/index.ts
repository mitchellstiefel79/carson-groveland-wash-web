
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
    
    // Fetch videos from @carson.soft.wash user with updated parameters
    const response = await fetch('https://tiktok-video-no-watermark2.p.rapidapi.com/user/posts?unique_id=@carson.soft.wash&count=35&cursor=0', {
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
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Helper function to download and store video in Supabase storage
    const downloadAndStoreVideo = async (videoUrl: string, videoId: string) => {
      try {
        console.log(`Downloading video: ${videoId}`);
        const videoResponse = await fetch(videoUrl);
        
        if (!videoResponse.ok) {
          console.error(`Failed to download video ${videoId}: ${videoResponse.status}`);
          return null;
        }

        const videoBlob = await videoResponse.arrayBuffer();
        const fileName = `${videoId}.mp4`;

        // Upload to Supabase storage
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('tiktok-videos')
          .upload(fileName, videoBlob, {
            contentType: 'video/mp4',
            upsert: true
          });

        if (uploadError) {
          console.error(`Upload error for ${videoId}:`, uploadError);
          return null;
        }

        // Get public URL
        const { data: urlData } = supabase.storage
          .from('tiktok-videos')
          .getPublicUrl(fileName);

        console.log(`Successfully stored video ${videoId} at: ${urlData.publicUrl}`);
        return urlData.publicUrl;
      } catch (error) {
        console.error(`Error processing video ${videoId}:`, error);
        return null;
      }
    };

    // Store videos from carson.soft.wash in database
    if (data.data && Array.isArray(data.data.videos)) {
      for (const video of data.data.videos) {
        const videoId = video.video_id || video.aweme_id || `video_${Date.now()}_${Math.random()}`;
        const originalVideoUrl = video.play || video.download_addr?.url_list?.[0] || '';
        
        // Download and store video in Supabase storage
        let storedVideoUrl = originalVideoUrl;
        if (originalVideoUrl) {
          const downloadedUrl = await downloadAndStoreVideo(originalVideoUrl, videoId);
          if (downloadedUrl) {
            storedVideoUrl = downloadedUrl;
          }
        }

        const { error } = await supabase
          .from('tiktok_videos')
          .upsert({
            title: video.title || video.desc || 'Untitled',
            video_url: storedVideoUrl,
            user_name: video.author?.unique_id || video.author?.nickname || 'carson.soft.wash',
            profile_pic: video.author?.avatar_thumb?.url_list?.[0] || null,
            tiktok_link: video.video_id ? `https://www.tiktok.com/@carson.soft.wash/video/${video.video_id}` : '',
          }, {
            onConflict: 'tiktok_link'
          });
        
        if (error) {
          console.error('Error inserting video:', error);
        } else {
          console.log(`Successfully processed video: ${video.title || 'Untitled'}`);
        }
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: `Processed ${data.data?.videos?.length || 0} videos`,
      data: data 
    }), {
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
