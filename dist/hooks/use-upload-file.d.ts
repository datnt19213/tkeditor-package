import type { ClientUploadedFileData, UploadFilesOptions } from 'uploadthing/types';
import type { OurFileRouter } from '../libs/uploadthing';
export type UploadedFile<T = unknown> = ClientUploadedFileData<T>;
export type UploadMode = 'toCloud' | 'toServer';
export interface UseUploadFileProps extends Pick<UploadFilesOptions<OurFileRouter['editorUploader']>, 'headers' | 'onUploadBegin' | 'onUploadProgress' | 'skipPolling'> {
    onUploadComplete?: (file: UploadedFile) => void;
    onUploadError?: (error: unknown) => void;
    mode?: UploadMode;
}
export declare function useUploadFile({ onUploadComplete, onUploadError, mode, ...props }?: UseUploadFileProps): {
    isUploading: boolean;
    progress: number;
    uploadedFile: UploadedFile<unknown> | undefined;
    uploadFile: (file: File) => Promise<UploadedFile<unknown> | undefined>;
    uploadingFile: File | undefined;
};
export declare const uploadFiles: any, useUploadThing: any;
export declare function getErrorMessage(err: unknown): string;
export declare function showErrorToast(err: unknown): string | number;
//# sourceMappingURL=use-upload-file.d.ts.map