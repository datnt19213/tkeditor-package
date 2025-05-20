import * as React from 'react';
export declare const CONTENT: Record<string, {
    accept: string[];
    content: React.ReactNode;
    icon: React.ReactNode;
}>;
export declare const MediaPlaceholderElement: any;
export declare function ImageProgress({ className, file, imageRef, progress, }: {
    file: File;
    className?: string;
    imageRef?: React.RefObject<HTMLImageElement | null>;
    progress?: number;
}): import("react/jsx-runtime").JSX.Element | null;
export declare function formatBytes(bytes: number, opts?: {
    decimals?: number;
    sizeType?: 'accurate' | 'normal';
}): string;
//# sourceMappingURL=media-placeholder-element.d.ts.map