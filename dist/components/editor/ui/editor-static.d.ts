import type { VariantProps } from 'class-variance-authority';
import { type PlateStaticProps } from '@udecode/plate';
export declare const editorVariants: (props?: ({
    disabled?: boolean | null | undefined;
    focused?: boolean | null | undefined;
    variant?: "default" | "select" | "none" | "demo" | "ai" | "aiChat" | "fullWidth" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function EditorStatic({ className, variant, ...props }: PlateStaticProps & VariantProps<typeof editorVariants>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=editor-static.d.ts.map