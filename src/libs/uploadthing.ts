import type { FileRouter } from 'uploadthing/next';
import { createUploadthing } from 'uploadthing/next';

export const f:any = createUploadthing();

export const ourFileRouter: any = {
  editorUploader: f({
    image: {
      maxFileSize: "2MB",
      maxFileCount: 1,
    },
    video: {
      maxFileSize: '16MB',
      maxFileCount: 1,
    },
    audio: {
      maxFileSize: "8MB",
      maxFileCount: 1,
    },
    blob: {
      maxFileSize: "2MB",
      maxFileCount: 1,
    },
    pdf: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
    text: {
      maxFileSize: "2MB",
      maxFileCount: 1,
    },
    
  })
    .middleware(() => {
      return {};
    })
    .onUploadComplete(({ file }: any) => {
      return {
        key: file.key,
        name: file.name,
        size: file.size,
        type: file.type,
        url: file.ufsUrl,
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
