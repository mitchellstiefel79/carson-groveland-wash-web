
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Play, User, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface TikTokVideo {
  id: string;
  title: string;
  video_url: string;
  user_name: string;
  profile_pic: string | null;
  tiktok_link: string;
  created_at: string;
}

const TrendingTikToks = () => {
  const [videos, setVideos] = useState<TikTokVideo[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchTrendingVideos = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('fetch-trending-tiktoks');
      
      if (error) throw error;
      
      // Refresh local data from database
      await loadVideosFromDB();
      
      toast({
        title: "Success",
        description: "Trending TikTok videos fetched successfully!",
      });
    } catch (error) {
      console.error('Error fetching trending videos:', error);
      toast({
        title: "Error",
        description: "Failed to fetch trending videos",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const loadVideosFromDB = async () => {
    try {
      const { data, error } = await supabase
        .from('tiktok_videos')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(16);

      if (error) throw error;
      setVideos(data || []);
    } catch (error) {
      console.error('Error loading videos from DB:', error);
    }
  };

  useEffect(() => {
    loadVideosFromDB();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-secondary">Trending TikTok Videos</h2>
        <Button 
          onClick={fetchTrendingVideos} 
          disabled={loading}
          className="flex items-center gap-2"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          {loading ? 'Fetching...' : 'Fetch Trending'}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="p-3">
              <div className="flex items-center gap-2">
                {video.profile_pic ? (
                  <img 
                    src={video.profile_pic} 
                    alt={video.user_name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">@{video.user_name}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <CardTitle className="text-sm line-clamp-2 mb-3">
                {video.title}
              </CardTitle>
              <div className="space-y-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  <a 
                    href={video.tiktok_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Play className="h-4 w-4" />
                    Watch on TikTok
                  </a>
                </Button>
                {video.video_url && (
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="w-full"
                  >
                    <a 
                      href={video.video_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Play className="h-4 w-4" />
                      Direct Video
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {videos.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">No TikTok videos found</p>
          <Button onClick={fetchTrendingVideos}>
            Fetch Trending Videos
          </Button>
        </div>
      )}
    </div>
  );
};

export default TrendingTikToks;
