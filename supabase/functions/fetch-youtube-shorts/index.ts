
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const YOUTUBE_API_KEY = Deno.env.get('YOUTUBE_API_KEY')
    if (!YOUTUBE_API_KEY) {
      throw new Error('YouTube API key not configured')
    }

    // Carson Stiefel's channel ID (extracted from @CarsonStiefel)
    const channelHandle = 'CarsonStiefel'
    
    // First, get the channel ID from the handle
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${channelHandle}&key=${YOUTUBE_API_KEY}`
    )
    
    if (!channelResponse.ok) {
      throw new Error(`Failed to fetch channel: ${channelResponse.statusText}`)
    }
    
    const channelData = await channelResponse.json()
    
    if (!channelData.items || channelData.items.length === 0) {
      throw new Error('Channel not found')
    }
    
    const channelId = channelData.items[0].id

    // Fetch videos from the channel (YouTube Shorts are typically under 60 seconds)
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&videoDuration=short&maxResults=50&order=date&key=${YOUTUBE_API_KEY}`
    )

    if (!videosResponse.ok) {
      throw new Error(`Failed to fetch videos: ${videosResponse.statusText}`)
    }

    const videosData = await videosResponse.json()
    
    console.log(`Found ${videosData.items?.length || 0} shorts`)

    // Process each video and add to database
    const newVideos = []
    
    for (const video of videosData.items || []) {
      const videoUrl = `https://youtube.com/shorts/${video.id.videoId}`
      
      // Check if video already exists
      const { data: existingVideo } = await supabaseClient
        .from('video_gallery')
        .select('id')
        .eq('video_url', videoUrl)
        .single()

      if (!existingVideo) {
        const videoData = {
          platform: 'youtube',
          video_url: videoUrl,
          title: video.snippet.title,
          description: video.snippet.description?.substring(0, 500) || null,
          thumbnail_url: video.snippet.thumbnails?.medium?.url || null,
          is_active: true
        }

        const { data, error } = await supabaseClient
          .from('video_gallery')
          .insert(videoData)
          .select()
          .single()

        if (error) {
          console.error('Error inserting video:', error)
        } else {
          newVideos.push(data)
        }
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Added ${newVideos.length} new videos from Carson Stiefel's channel`,
        newVideos: newVideos.length
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    )
  }
})
