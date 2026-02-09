"use client";

import { useState, useCallback, useEffect } from "react";
import { compressImage } from "@/src/shared/lib/utils/image-compression";
import { trackEvent, GA_EVENTS } from "@/src/shared/lib/analytics";

export function usePhotoUpload(onPhotosChange: (photos: File[]) => void) {
  const [isUploading, setIsUploading] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);
  const [compressedFiles, setCompressedFiles] = useState<File[]>([]);

  useEffect(() => {
    onPhotosChange(compressedFiles);
  }, [compressedFiles, onPhotosChange]);

  const handlePhotoUpload = useCallback(
    async (files: FileList | File[]) => {
      setIsUploading(true);
      trackEvent(GA_EVENTS.QUOTE_STEP2_PHOTO_UPLOAD_STARTED, {
        fileCount: files.length,
      });

      const fileArray = Array.from(files);
      const newCompressedFiles: File[] = [];
      const newPreviews: string[] = [];

      for (const file of fileArray) {
        const compressedFile = await compressImage(file);
        newCompressedFiles.push(compressedFile);
        const preview = URL.createObjectURL(compressedFile);
        newPreviews.push(preview);
      }

      setPreviews((prev) => [...prev, ...newPreviews]);
      setCompressedFiles((prev) => [...prev, ...newCompressedFiles]);
      setIsUploading(false);
    },
    []
  );

  const removePhoto = useCallback(
    (index: number) => {
      setPreviews((prev) => {
        URL.revokeObjectURL(prev[index]);
        return prev.filter((_, i) => i !== index);
      });
      setCompressedFiles((prev) => prev.filter((_, i) => i !== index));
    },
    []
  );

  return {
    isUploading,
    previews,
    handlePhotoUpload,
    removePhoto,
  };
}
