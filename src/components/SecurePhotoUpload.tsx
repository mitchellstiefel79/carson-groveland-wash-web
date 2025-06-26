
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

  const logSecurityEvent = async (action: string, details: any) => {
    try {
      await supabase.from('security_audit_log').insert({
        action,
        table_name: 'customer_photos',
        details,
        ip_address: null, // Could be enhanced to capture real IP
        user_agent: navigator.userAgent
      });
    } catch (error) {
      console.error('Failed to log security event:', error);
    }
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (photos.length + acceptedFiles.length > maxFiles) {
      toast({
        title: "Too many files",
        description: `You can only upload up to ${maxFiles} photos.`,
        variant: "destructive",
      });
      await logSecurityEvent('file_upload_rejected', { 
        reason: 'too_many_files', 
        attempted_count: acceptedFiles.length,
        current_count: photos.length,
        max_allowed: maxFiles
      });
      return;
    }

    setUploading(true);
    const newPhotos: string[] = [];

    try {
      for (const file of acceptedFiles) {
        // Enhanced file validation
        if (file.size > 10 * 1024 * 1024) {
          toast({
            title: "File too large",
            description: `${file.name} is larger than 10MB. Please choose a smaller file.`,
            variant: "destructive",
          });
          await logSecurityEvent('file_upload_rejected', { 
            reason: 'file_too_large', 
            filename: file.name, 
            size: file.size 
          });
          continue;
        }

        // Strict file type validation
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
        if (!allowedTypes.includes(file.type)) {
          toast({
            title: "Invalid file type",
            description: `${file.name} is not a supported image format. Please use JPEG, PNG, WebP, or GIF.`,
            variant: "destructive",
          });
          await logSecurityEvent('file_upload_rejected', { 
            reason: 'invalid_file_type', 
            filename: file.name, 
            type: file.type 
          });
          continue;
        }

        // Create secure file name with timestamp and random string
        const fileExt = file.name.split('.').pop()?.toLowerCase();
        const fileName = `customer-${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;

        // Upload to Supabase Storage with enhanced security
        const { data, error } = await supabase.storage
          .from('customer-photos')
          .upload(fileName, file, {
            cacheControl: '3600',
            upsert: false,
            duplex: 'half'
          });

        if (error) {
          console.error('Upload error:', error);
          toast({
            title: "Upload failed",
            description: `Failed to upload ${file.name}. Please try again.`,
            variant: "destructive",
          });
          await logSecurityEvent('file_upload_failed', { 
            filename: file.name, 
            error: error.message 
          });
          continue;
        }

        // Get signed URL instead of public URL for better security
        const { data: urlData } = await supabase.storage
          .from('customer-photos')
          .createSignedUrl(data.path, 3600); // 1 hour expiry

        if (urlData?.signedUrl) {
          newPhotos.push(urlData.signedUrl);
          await logSecurityEvent('file_upload_success', { 
            filename: file.name, 
            path: data.path 
          });
        }
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
      await logSecurityEvent('file_upload_error', { 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
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
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
      'image/webp': ['.webp'],
      'image/gif': ['.gif']
    },
    multiple: true,
    disabled: uploading,
    maxSize: 10 * 1024 * 1024 // 10MB limit
  });

  const removePhoto = async (photoUrl: string, index: number) => {
    try {
      // Extract file path from signed URL to delete from storage
      const urlParts = photoUrl.split('/');
      const fileName = urlParts[urlParts.length - 1].split('?')[0]; // Remove query params
      
      // Delete from storage
      const { error } = await supabase.storage
        .from('customer-photos')
        .remove([fileName]);

      if (error) {
        console.error('Delete error:', error);
        await logSecurityEvent('file_delete_failed', { 
          filename: fileName, 
          error: error.message 
        });
      } else {
        await logSecurityEvent('file_delete_success', { 
          filename: fileName 
        });
      }

      // Remove from state regardless of storage deletion result
      const newPhotos = photos.filter((_, i) => i !== index);
      onPhotosChange(newPhotos);
    } catch (error) {
      console.error('Error removing photo:', error);
      await logSecurityEvent('file_delete_error', { 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
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
          <p className="text-gray-600">Uploading photos securely...</p>
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
