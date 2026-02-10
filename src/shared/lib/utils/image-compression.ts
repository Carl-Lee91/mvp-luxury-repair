import imageCompression from "browser-image-compression";

export async function compressImage(file: File): Promise<File> {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    fileType: "image/jpeg" as const,
  };

  try {
    console.log(`[압축 시작] 원본 크기: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
    const compressedBlob = await imageCompression(file, options);
    
    // Blob을 File 객체로 변환
    const compressedFile = new File([compressedBlob], file.name, {
      type: file.type,
      lastModified: Date.now(),
    });

    console.log(`[압축 완료] 압축 크기: ${(compressedFile.size / 1024 / 1024).toFixed(2)}MB`);
    console.log(`[압축 결과 타입] isFile: ${compressedFile instanceof File}`);
    
    return compressedFile;
  } catch (error) {
    console.error("이미지 압축 실패:", error);
    return file;
  }
}
