
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { RefreshCw } from "lucide-react";

const AdminTikTokSync = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const syncTikTokVideos = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('fetch-trending-tiktoks');
      
      if (error) {
        throw error;
      }

      toast({
        title: "TikTok Videos Synced Successfully",
        description: "Latest videos from @carson.soft.wash have been added to your gallery",
      });
    } catch (error) {
      console.error('Error syncing TikTok videos:', error);
      toast({
        title: "Sync Failed",
        description: error.message || "Failed to sync TikTok videos",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-6 w-6 bg-black rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">T</span>
        </div>
        <h3 className="text-lg font-semibold">TikTok Sync</h3>
      </div>
      
      <p className="text-gray-600 mb-4">
        Sync the latest videos from @carson.soft.wash TikTok account to your gallery.
      </p>
      
      <Button 
        onClick={syncTikTokVideos}
        disabled={loading}
        className="w-full"
        variant="outline"
      >
        {loading ? (
          <>
            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            Syncing TikTok Videos...
          </>
        ) : (
          <>
            <RefreshCw className="h-4 w-4 mr-2" />
            Sync TikTok Videos
          </>
        )}
      </Button>
    </div>
  );
};

export default AdminTikTokSync;
