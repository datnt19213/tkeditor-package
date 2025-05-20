import * as React from 'react';

import { toast } from 'sonner';
import type {
  ClientUploadedFileData,
  UploadFilesOptions,
} from 'uploadthing/types';
import { z } from 'zod';

import { generateReactHelpers } from '@uploadthing/react';

import type { OurFileRouter } from '../libs/uploadthing';

export type UploadedFile<T = unknown> = ClientUploadedFileData<T>;

export type UploadMode = 'toCloud' | 'toServer';
export interface UseUploadFileProps
  extends Pick<
    UploadFilesOptions<OurFileRouter['editorUploader']>,
    'headers' | 'onUploadBegin' | 'onUploadProgress' | 'skipPolling'
  > {
  onUploadComplete?: (file: UploadedFile) => void;
  onUploadError?: (error: unknown) => void;
  mode?: UploadMode; 
}

export function useUploadFile({
  onUploadComplete,
  onUploadError,
  mode = 'toCloud',
  ...props
}: UseUploadFileProps = {}) {
  const [uploadedFile, setUploadedFile] = React.useState<UploadedFile>();
  const [uploadingFile, setUploadingFile] = React.useState<File>();
  const [progress, setProgress] = React.useState<number>(0);
  const [isUploading, setIsUploading] = React.useState(false);

  async function uploadThing(file: File) {
    setIsUploading(true);
    setUploadingFile(file);

    try {
      const res = await uploadFiles('editorUploader', {
        ...props,
        files: [file],
        onUploadProgress: ({ progress }: { progress: any }) => {
          setProgress(Math.min(progress, 100));
        },
      });

      setUploadedFile(res[0]);

      onUploadComplete?.(res[0]);

      return uploadedFile;
    } catch (error) {
      const errorMessage = getErrorMessage(error);

      const message =
        errorMessage.length > 0
          ? errorMessage
          : 'Something went wrong, please try again later.';

      toast.error(message);

      onUploadError?.(error);

      // Mock upload for unauthenticated users
      // toast.info('User not logged in. Mocking upload process.');
      const mockUploadedFile = {
        key: 'mock-key-0',
        appUrl: `${process.env.URL}/${file.name}`,
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
      } as UploadedFile;

      // Simulate upload progress
      let progress = 0;

      const simulateProgress = async () => {
        while (progress < 100) {
          await new Promise((resolve) => setTimeout(resolve, 50));
          progress += 2;
          setProgress(Math.min(progress, 100));
        }
      };

      await simulateProgress();

      setUploadedFile(mockUploadedFile);

      return mockUploadedFile;
    } finally {
      setProgress(0);
      setIsUploading(false);
      setUploadingFile(undefined);
    }
  }

  async function uploadThingServer(file: File) {
  setIsUploading(true);
  setUploadingFile(file);

  try {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      throw new Error('Upload failed');
    }

    const data = await res.json();

    const uploaded: UploadedFile = {
      key: data.id || file.name,
      appUrl: data.url,
      name: file.name,
      size: file.size,
      type: file.type,
      url: data.url,
      fileHash: data.fileHash,
      ufsUrl: data.ufsUrl,
      lastModified: file.lastModified,
      customId: data.customId,
      serverData: data.serverData,
    };

    setUploadedFile(uploaded);
    onUploadComplete?.(uploaded);
    return uploaded;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    toast.error(errorMessage || 'Upload failed');
    onUploadError?.(error);
  } finally {
    setProgress(0);
    setIsUploading(false);
    setUploadingFile(undefined);
  }
}

  return {
    isUploading,
    progress,
    uploadedFile,
    uploadFile: mode === "toCloud" ? uploadThing : uploadThingServer,
    uploadingFile,
  };
}

export const { uploadFiles, useUploadThing } =
  generateReactHelpers<OurFileRouter>() as any;

export function getErrorMessage(err: unknown) {
  const unknownError = 'Something went wrong, please try again later.';

  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message;
    });

    return errors.join('\n');
  } else if (err instanceof Error) {
    return err.message;
  } else {
    return unknownError;
  }
}

export function showErrorToast(err: unknown) {
  const errorMessage = getErrorMessage(err);

  return toast.error(errorMessage);
}
