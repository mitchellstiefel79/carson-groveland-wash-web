
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { RefreshCw, Youtube } from "lucide-react";

const AdminVideoSync = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const syncYouTubeVideos = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('fetch-youtube-shorts');
      
      if (error) {
        throw error;
      }

      if (data.success) {
        toast({
          title: "Videos Synced Successfully",
          description: data.message,
        });
      } else {
        throw new Error(data.error || 'Unknown error occurred');
      }
    } catch (error) {
      console.error('Error syncing videos:', error);
      toast({
        title: "Sync Failed",
        description: error.message || "Failed to sync YouTube videos",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <Youtube className="h-6 w-6 text-red-600" />
        <h3 className="text-lg font-semibold">YouTube Sync</h3>
      </div>
      
      <p className="text-gray-600 mb-4">
        Sync the latest videos from Carson Stiefel's YouTube Shorts channel to your gallery.
      </p>
      
      <Button 
        onClick={syncYouTubeVideos}
        disabled={loading}
        className="w-full"
      >
        {loading ? (
          <>
            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            Syncing Videos...
          </>
        ) : (
          <>
            <Youtube className="h-4 w-4 mr-2" />
            Sync YouTube Shorts
          </>
        )}
      </Button>
    </div>
  );
};

export default AdminVideoSync;
