import * as React from 'react';
import type { DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu';
export type TColor = {
    isBrightColor: boolean;
    name: string;
    value: string;
};
export type ColorDropdownMenuItemProps = {
    isBrightColor: boolean;
    isSelected: boolean;
    value: string;
    updateColor: (color: string) => void;
    name?: string;
} & DropdownMenuItemProps;
export declare function ColorDropdownMenuItem({ className, isBrightColor, isSelected, name, updateColor, value, ...props }: ColorDropdownMenuItemProps): import("react/jsx-runtime").JSX.Element;
type ColorDropdownMenuItemsProps = {
    colors: TColor[];
    updateColor: (color: string) => void;
    color?: string;
} & React.ComponentProps<'div'>;
export declare function ColorDropdownMenuItems({ className, color, colors, updateColor, ...props }: ColorDropdownMenuItemsProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=color-dropdown-menu-items.d.ts.map