import * as React from 'react';
import { type TColor } from './color-dropdown-menu-items';
export type ColorPickerContentProps = React.ComponentProps<'div'> & {
    colors: TColor[];
    customColors: TColor[];
    clearColor: () => void;
    updateColor: (color: string) => void;
    updateCustomColor: (color: string) => void;
    color?: string;
};
export declare function ColorPickerContent({ className, clearColor, color, colors, customColors, updateColor, updateCustomColor, ...props }: ColorPickerContentProps): import("react/jsx-runtime").JSX.Element;
export declare const ColorPicker: any;
//# sourceMappingURL=color-picker.d.ts.map