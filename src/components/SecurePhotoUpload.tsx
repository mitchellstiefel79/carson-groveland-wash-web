
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Upload, X, Image } from "lucide-react";

interface SecurePhotoUploadProps {
  photos: string[];
  onPhotosChange: (photos: string[]) => void;
  maxFiles?: number;
}

const SecurePhotoUpload = ({ photos, onPhotosChange, maxFiles = 5 }: SecurePhotoUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (photos.length + acceptedFiles.length > maxFiles) {
      toast({
        title: "Too many files",
        description: `You can only upload up to ${maxFiles} photos.`,
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    const newPhotos: string[] = [];

    try {
      for (const file of acceptedFiles) {
        // Validate file size (10MB limit)
        if (file.size > 10 * 1024 * 1024) {
          toast({
            title: "File too large",
            description: `${file.name} is larger than 10MB. Please choose a smaller file.`,
            variant: "destructive",
          });
          continue;
        }

        // Validate file type
        if (!file.type.startsWith('image/')) {
          toast({
            title: "Invalid file type",
            description: `${file.name} is not an image file.`,
            variant: "destructive",
          });
          continue;
        }

        // Create unique file name
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

        // Upload to Supabase Storage
        const { data, error } = await supabase.storage
          .from('customer-photos')
          .upload(fileName, file, {
            cacheControl: '3600',
            upsert: false
          });

        if (error) {
          console.error('Upload error:', error);
          toast({
            title: "Upload failed",
            description: `Failed to upload ${file.name}. Please try again.`,
            variant: "destructive",
          });
          continue;
        }

        // Get public URL
        const { data: urlData } = supabase.storage
          .from('customer-photos')
          .getPublicUrl(data.path);

        newPhotos.push(urlData.publicUrl);
      }

      if (newPhotos.length > 0) {
        onPhotosChange([...photos, ...newPhotos]);
        toast({
          title: "Upload successful",
          description: `${newPhotos.length} photo(s) uploaded successfully.`,
        });
      }
    } catch (error) {
      console.error('Unexpected upload error:', error);
      toast({
        title: "Upload error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  }, [photos, onPhotosChange, maxFiles, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp', '.gif']
    },
    multiple: true,
    disabled: uploading
  });

  const removePhoto = async (photoUrl: string, index: number) => {
    try {
      // Extract file path from URL to delete from storage
      const urlParts = photoUrl.split('/');
      const fileName = urlParts[urlParts.length - 1];
      
      // Delete from storage
      const { error } = await supabase.storage
        .from('customer-photos')
        .remove([fileName]);

      if (error) {
        console.error('Delete error:', error);
      }

      // Remove from state regardless of storage deletion result
      const newPhotos = photos.filter((_, i) => i !== index);
      onPhotosChange(newPhotos);
    } catch (error) {
      console.error('Error removing photo:', error);
      // Still remove from UI even if storage deletion fails
      const newPhotos = photos.filter((_, i) => i !== index);
      onPhotosChange(newPhotos);
    }
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragActive
            ? 'border-primary bg-primary/5'
            : 'border-gray-300 hover:border-gray-400'
        } ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        {uploading ? (
          <p className="text-gray-600">Uploading photos...</p>
        ) : isDragActive ? (
          <p className="text-gray-600">Drop the photos here...</p>
        ) : (
          <div>
            <p className="text-gray-600 mb-2">
              Drag and drop photos here, or click to select files
            </p>
            <p className="text-sm text-gray-500">
              Supports JPEG, PNG, WebP, GIF (max 10MB each, up to {maxFiles} photos)
            </p>
          </div>
        )}
      </div>

      {photos.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={photo}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback for broken images
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center">
                  <Image className="h-8 w-8 text-gray-400" />
                </div>
              </div>
              <Button
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0"
                onClick={() => removePhoto(photo, index)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SecurePhotoUpload;
