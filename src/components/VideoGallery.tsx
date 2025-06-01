
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface VideoData {
  id: string;
  platform: string;
  video_url: string;
  title: string;
  description: string | null;
  thumbnail_url: string | null;
}

const VideoGallery = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const { data, error } = await supabase
        .from('video_gallery')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching videos:', error);
        return;
      }

      setVideos(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getYouTubeID = (url: string): string => {
    const patterns = [
      /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]+)/,
      /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)/,
      /(?:youtu\.be\/)([a-zA-Z0-9_-]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return '';
  };

  const getTikTokID = (url: string): string => {
    const match = url.match(/video\/(\d+)/);
    return match ? match[1] : '';
  };

  const filteredVideos = selectedPlatform === "all" 
    ? videos 
    : videos.filter(video => video.platform === selectedPlatform);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredVideos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredVideos.length) % filteredVideos.length);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-gray-600">Loading videos...</div>
      </div>
    );
  }

  if (filteredVideos.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No videos available at the moment.</p>
      </div>
    );
  }

  const currentVideo = filteredVideos[currentSlide];

  return (
    <div className="relative">
      {/* Platform Filter */}
      <div className="flex justify-center gap-2 mb-6">
        <Button
          onClick={() => setSelectedPlatform("all")}
          variant={selectedPlatform === "all" ? "default" : "outline"}
          size="sm"
        >
          All Videos
        </Button>
        <Button
          onClick={() => setSelectedPlatform("youtube")}
          variant={selectedPlatform === "youtube" ? "default" : "outline"}
          size="sm"
        >
          YouTube Shorts
        </Button>
        <Button
          onClick={() => setSelectedPlatform("tiktok")}
          variant={selectedPlatform === "tiktok" ? "default" : "outline"}
          size="sm"
        >
          TikTok
        </Button>
      </div>

      {/* Video Display */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="aspect-video mb-4 bg-gray-100 rounded-lg overflow-hidden">
          {currentVideo.platform === 'youtube' && (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${getYouTubeID(currentVideo.video_url)}?rel=0&modestbranding=1`}
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
              title={currentVideo.title}
            />
          )}
          
          {currentVideo.platform === 'tiktok' && (
            <div className="w-full h-full flex items-center justify-center bg-black">
              <div className="text-center">
                <Play className="h-16 w-16 text-white mx-auto mb-4" />
                <p className="text-white mb-4">TikTok Video</p>
                <Button asChild variant="outline">
                  <a 
                    href={currentVideo.video_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white border-white hover:bg-white hover:text-black"
                  >
                    Watch on TikTok
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-bold text-secondary mb-2">
            {currentVideo.title}
          </h3>
          {currentVideo.description && (
            <p className="text-gray-600">{currentVideo.description}</p>
          )}
          <div className="inline-flex items-center gap-2 mt-2">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              currentVideo.platform === 'youtube' 
                ? 'bg-red-100 text-red-800' 
                : 'bg-black text-white'
            }`}>
              {currentVideo.platform === 'youtube' ? 'YouTube Short' : 'TikTok'}
            </span>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex justify-center items-center gap-4">
        <Button 
          onClick={prevSlide}
          variant="outline" 
          size="icon"
          className="rounded-full"
          disabled={filteredVideos.length <= 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex gap-2">
          {filteredVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <Button 
          onClick={nextSlide}
          variant="outline" 
          size="icon"
          className="rounded-full"
          disabled={filteredVideos.length <= 1}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default VideoGallery;
