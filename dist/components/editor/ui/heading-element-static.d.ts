import type { SlateElementProps } from '@udecode/plate';
import { type VariantProps } from 'class-variance-authority';
declare const headingVariants: (props?: ({
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function HeadingElementStatic({ variant, ...props }: SlateElementProps & VariantProps<typeof headingVariants>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=heading-element-static.d.ts.map