import type { VariantProps } from 'class-variance-authority';
import type { PlateContentProps } from '@udecode/plate/react';
export declare const EditorContainer: any;
declare const editorVariants: (props?: ({
    disabled?: boolean | null | undefined;
    focused?: boolean | null | undefined;
    variant?: "default" | "select" | "none" | "comment" | "demo" | "ai" | "aiChat" | "fullWidth" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type EditorProps = PlateContentProps & VariantProps<typeof editorVariants>;
export declare const Editor: any;
export {};
//# sourceMappingURL=editor.d.ts.map