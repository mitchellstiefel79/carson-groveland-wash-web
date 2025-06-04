
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Upload, X, Image } from "lucide-react";
import GooglePhotosPicker from "./GooglePhotosPicker";

interface PhotoUploadProps {
  onPhotosChange: (photoUrls: string[]) => void;
  photos: string[];
}

const PhotoUpload = ({ onPhotosChange, photos }: PhotoUploadProps) => {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [showGooglePicker, setShowGooglePicker] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    setUploading(true);
    const uploadedUrls: string[] = [];

    try {
      for (const file of acceptedFiles) {
        // Generate unique filename
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        
        // Upload to Supabase Storage
        const { data, error } = await supabase.storage
          .from('customer-photos')
          .upload(fileName, file);

        if (error) {
          console.error('Upload error:', error);
          toast({
            title: "Upload Error",
            description: `Failed to upload ${file.name}`,
            variant: "destructive",
          });
          continue;
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('customer-photos')
          .getPublicUrl(data.path);

        uploadedUrls.push(publicUrl);
      }

      // Update photos array
      const newPhotos = [...photos, ...uploadedUrls];
      onPhotosChange(newPhotos);

      toast({
        title: "Upload Successful",
        description: `${uploadedUrls.length} photo(s) uploaded successfully`,
      });
    } catch (error) {
      console.error('Unexpected upload error:', error);
      toast({
        title: "Upload Error",
        description: "Something went wrong during upload",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  }, [photos, onPhotosChange, toast]);

  const removePhoto = (indexToRemove: number) => {
    const newPhotos = photos.filter((_, index) => index !== indexToRemove);
    onPhotosChange(newPhotos);
  };

  const handleGooglePhotosSelected = (googlePhotoUrls: string[]) => {
    const newPhotos = [...photos, ...googlePhotoUrls];
    onPhotosChange(newPhotos);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp', '.heic']
    },
    maxFiles: 5,
    maxSize: 10485760, // 10MB
  });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragActive 
            ? 'border-primary bg-primary/5' 
            : 'border-gray-300 hover:border-primary hover:bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        {uploading ? (
          <p className="text-sm text-gray-600">Uploading photos...</p>
        ) : isDragActive ? (
          <p className="text-sm text-primary">Drop the photos here...</p>
        ) : (
          <div>
            <p className="text-sm text-gray-600 mb-2">
              Drag and drop photos here, or click to select files
            </p>
            <p className="text-xs text-gray-500">
              Maximum 5 photos, up to 10MB each (JPEG, PNG, WebP, HEIC)
            </p>
          </div>
        )}
      </div>

      {/* Google Photos Import Button */}
      <div className="flex justify-center">
        <Button
          type="button"
          variant="outline"
          onClick={() => setShowGooglePicker(true)}
          className="flex items-center gap-2"
        >
          <Image className="h-4 w-4" />
          Import from Google Photos
        </Button>
      </div>

      {photos.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Uploaded Photos ({photos.length})</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {photos.map((photo, index) => (
              <div key={index} className="relative group">
                <img
                  src={photo}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-20 object-cover rounded border"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removePhoto(index)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Google Photos Picker Modal */}
      <GooglePhotosPicker
        isOpen={showGooglePicker}
        onClose={() => setShowGooglePicker(false)}
        onPhotosSelected={handleGooglePhotosSelected}
      />
    </div>
  );
};

export default PhotoUpload;
