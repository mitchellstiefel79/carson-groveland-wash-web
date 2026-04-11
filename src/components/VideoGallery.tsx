
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const { data, error } = await (supabase as any)
        .from('video_gallery')
        .select('*')
        .eq('is_active', true)
        .eq('platform', 'youtube')
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

  // Reset currentSlide if it's out of bounds
  useEffect(() => {
    if (currentSlide >= videos.length && videos.length > 0) {
      setCurrentSlide(0);
    }
  }, [videos.length, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-gray-600">Loading videos...</div>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No videos available.</p>
      </div>
    );
  }

  const currentVideo = videos[currentSlide];

  return (
    <div className="relative">
      {/* Video Display */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="aspect-video mb-4 bg-gray-100 rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${getYouTubeID(currentVideo.video_url)}?rel=0&modestbranding=1`}
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
            title={currentVideo.title}
          />
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-bold text-secondary mb-2">
            {currentVideo.title}
          </h3>
          {currentVideo.description && (
            <p className="text-gray-600">{currentVideo.description}</p>
          )}
          <div className="inline-flex items-center gap-2 mt-2">
            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
              YouTube Short
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
          disabled={videos.length <= 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex gap-2">
          {videos.map((_, index) => (
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
          disabled={videos.length <= 1}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default VideoGallery;
