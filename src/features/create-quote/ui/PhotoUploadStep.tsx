"use client";

import { useCallback } from "react";
import { UseFormReturn } from "react-hook-form";
import { Upload, X, Lock } from "lucide-react";
import { QuoteFormData } from "@/src/entities/quote";
import { usePhotoUpload } from "../hooks/use-photo-upload";
import { Card, CardContent } from "@/src/shared/ui/card";
import { Button } from "@/src/shared/ui/button";

interface PhotoUploadStepProps {
  form: UseFormReturn<QuoteFormData>;
}

export function PhotoUploadStep({ form }: PhotoUploadStepProps) {
  const handlePhotosChange = useCallback(
    (photos: File[]) => {
      form.setValue("photos", photos, {
        shouldValidate: true,
      });
    },
    [form]
  );


  const { isUploading, previews, handlePhotoUpload, removePhoto } =
    usePhotoUpload(handlePhotosChange);

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handlePhotoUpload(files);
      }
    },
    [handlePhotoUpload]
  );

  const onFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        handlePhotoUpload(files);
      }
    },
    [handlePhotoUpload]
  );

  const handleRemovePhoto = useCallback(
    (index: number) => {
      removePhoto(index);
    },
    [removePhoto]
  );


  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">제품 사진을 업로드해주세요</h2>
        <p className="text-muted-foreground">최소 1장, 최대 5장까지 가능합니다</p>
      </div>

      <Card
        className="border-dashed border-2 cursor-pointer hover:border-primary transition-colors"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
      >
        <CardContent className="flex flex-col items-center justify-center p-12">
          <Upload className="w-12 h-12 text-muted-foreground mb-4" />
          <p className="text-lg font-medium mb-2">
            사진을 드래그하거나 클릭하여 업로드
          </p>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={onFileSelect}
            className="hidden"
            id="photo-upload"
            disabled={isUploading}
          />
          <label htmlFor="photo-upload">
            <Button variant="secondary" asChild disabled={isUploading}>
              <span>{isUploading ? "업로드 중..." : "파일 선택"}</span>
            </Button>
          </label>
        </CardContent>
      </Card>

      {previews.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previews.map((preview, index) => (
            <div key={index} className="relative group">
              <img
                src={preview}
                alt={`Preview ${index + 1}`}
                className="w-full h-40 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => handleRemovePhoto(index)}
                className="absolute top-2 right-2 bg-destructive text-destructive-foreground p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Lock className="w-4 h-4" />
        <p>전송되는 사진은 보안 처리됩니다</p>
      </div>

      {form.formState.errors.photos && (
        <p className="text-sm text-destructive text-center">
          {form.formState.errors.photos.message}
        </p>
      )}
    </div>
  );
}
