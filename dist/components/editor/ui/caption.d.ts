import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { Caption as CaptionPrimitive, CaptionTextarea as CaptionTextareaPrimitive } from '@udecode/plate-caption/react';
declare const captionVariants: (props?: ({
    align?: "center" | "left" | "right" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function Caption({ align, className, ...props }: React.ComponentProps<typeof CaptionPrimitive> & VariantProps<typeof captionVariants>): import("react/jsx-runtime").JSX.Element;
export declare function CaptionTextarea(props: React.ComponentProps<typeof CaptionTextareaPrimitive>): import("react/jsx-runtime").JSX.Element;
export declare const CaptionButton: any;
export {};
//# sourceMappingURL=caption.d.ts.map