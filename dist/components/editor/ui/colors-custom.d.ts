import * as React from 'react';
import { type TColor } from './color-dropdown-menu-items';
export type ColorCustomProps = {
    colors: TColor[];
    customColors: TColor[];
    updateColor: (color: string) => void;
    updateCustomColor: (color: string) => void;
    color?: string;
} & React.ComponentPropsWithoutRef<'div'>;
export declare function ColorCustom({ className, color, colors, customColors, updateColor, updateCustomColor, ...props }: ColorCustomProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=colors-custom.d.ts.map