
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { googlePhotosService, GooglePhoto } from "@/services/googlePhotos";
import { supabase } from "@/integrations/supabase/client";
import { X, Download, Loader2 } from "lucide-react";

interface GooglePhotosPickerProps {
  onPhotosSelected: (photoUrls: string[]) => void;
  isOpen: boolean;
  onClose: () => void;
}

const GooglePhotosPicker = ({ onPhotosSelected, isOpen, onClose }: GooglePhotosPickerProps) => {
  const { toast } = useToast();
  const [photos, setPhotos] = useState<GooglePhoto[]>([]);
  const [selectedPhotos, setSelectedPhotos] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const [importing, setImporting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadPhotos();
    }
  }, [isOpen]);

  const loadPhotos = async () => {
    setLoading(true);
    try {
      const authenticated = await googlePhotosService.authenticate();
      if (!authenticated) {
        toast({
          title: "Authentication Failed",
          description: "Could not authenticate with Google Photos",
          variant: "destructive",
        });
        onClose();
        return;
      }

      const recentPhotos = await googlePhotosService.getRecentPhotos(20);
      setPhotos(recentPhotos);
    } catch (error) {
      console.error('Error loading Google Photos:', error);
      toast({
        title: "Error",
        description: "Failed to load photos from Google Photos",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const togglePhotoSelection = (photoId: string) => {
    const newSelection = new Set(selectedPhotos);
    if (newSelection.has(photoId)) {
      newSelection.delete(photoId);
    } else {
      if (newSelection.size >= 5) {
        toast({
          title: "Selection Limit",
          description: "You can only select up to 5 photos at once",
          variant: "destructive",
        });
        return;
      }
      newSelection.add(photoId);
    }
    setSelectedPhotos(newSelection);
  };

  const importSelectedPhotos = async () => {
    if (selectedPhotos.size === 0) return;

    setImporting(true);
    const uploadedUrls: string[] = [];

    try {
      const selectedPhotoObjects = photos.filter(photo => selectedPhotos.has(photo.id));
      
      for (const photo of selectedPhotoObjects) {
        try {
          // Download photo from Google Photos
          const blob = await googlePhotosService.downloadPhoto(photo);
          
          // Generate unique filename
          const fileExt = photo.filename.split('.').pop() || 'jpg';
          const fileName = `google-${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
          
          // Upload to Supabase Storage
          const { data, error } = await supabase.storage
            .from('customer-photos')
            .upload(fileName, blob);

          if (error) {
            console.error('Upload error:', error);
            continue;
          }

          // Get public URL
          const { data: { publicUrl } } = supabase.storage
            .from('customer-photos')
            .getPublicUrl(data.path);

          uploadedUrls.push(publicUrl);
        } catch (error) {
          console.error(`Error importing photo ${photo.filename}:`, error);
        }
      }

      if (uploadedUrls.length > 0) {
        onPhotosSelected(uploadedUrls);
        toast({
          title: "Import Successful",
          description: `${uploadedUrls.length} photo(s) imported from Google Photos`,
        });
        onClose();
      } else {
        toast({
          title: "Import Failed",
          description: "Failed to import any photos",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Import error:', error);
      toast({
        title: "Import Error",
        description: "Something went wrong during import",
        variant: "destructive",
      });
    } finally {
      setImporting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Import from Google Photos</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin" />
              <span className="ml-2">Loading your photos...</span>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                    selectedPhotos.has(photo.id)
                      ? 'border-primary shadow-lg'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => togglePhotoSelection(photo.id)}
                >
                  <img
                    src={`${photo.baseUrl}=w200-h200-c`}
                    alt={photo.filename}
                    className="w-full aspect-square object-cover"
                  />
                  {selectedPhotos.has(photo.id) && (
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        ✓
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t p-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {selectedPhotos.size} of 5 photos selected
          </div>
          <div className="space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              onClick={importSelectedPhotos}
              disabled={selectedPhotos.size === 0 || importing}
            >
              {importing ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Importing...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Import Selected
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GooglePhotosPicker;
