import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { DropdownMenuRadioGroup } from './dropdown-menu';
import { Tooltip, TooltipTrigger } from './tooltip';
export declare function Toolbar({ className, ...props }: React.ComponentProps<typeof ToolbarPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
export declare function ToolbarToggleGroup({ className, ...props }: React.ComponentProps<typeof ToolbarPrimitive.ToolbarToggleGroup>): import("react/jsx-runtime").JSX.Element;
export declare function ToolbarLink({ className, ...props }: React.ComponentProps<typeof ToolbarPrimitive.Link>): import("react/jsx-runtime").JSX.Element;
export declare function ToolbarSeparator({ className, ...props }: React.ComponentProps<typeof ToolbarPrimitive.Separator>): import("react/jsx-runtime").JSX.Element;
declare const toolbarButtonVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "outline" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare const dropdownArrowVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "outline" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
type ToolbarButtonProps = {
    isDropdown?: boolean;
    pressed?: boolean;
} & Omit<React.ComponentPropsWithoutRef<typeof ToolbarToggleItem>, 'asChild' | 'value'> & VariantProps<typeof toolbarButtonVariants>;
export declare const ToolbarButton: ({ tooltip, tooltipContentProps, tooltipProps, tooltipTriggerProps, ...props }: TooltipProps<({ children, className, isDropdown, pressed, size, variant, ...props }: ToolbarButtonProps) => import("react/jsx-runtime").JSX.Element>) => import("react/jsx-runtime").JSX.Element;
export declare function ToolbarSplitButton({ className, ...props }: React.ComponentPropsWithoutRef<typeof ToolbarButton>): import("react/jsx-runtime").JSX.Element;
type ToolbarSplitButtonPrimaryProps = Omit<React.ComponentPropsWithoutRef<typeof ToolbarToggleItem>, 'value'> & VariantProps<typeof toolbarButtonVariants>;
export declare function ToolbarSplitButtonPrimary({ children, className, size, variant, ...props }: ToolbarSplitButtonPrimaryProps): import("react/jsx-runtime").JSX.Element;
export declare function ToolbarSplitButtonSecondary({ className, size, variant, ...props }: React.ComponentPropsWithoutRef<'span'> & VariantProps<typeof dropdownArrowVariants>): import("react/jsx-runtime").JSX.Element;
export declare function ToolbarToggleItem({ className, size, variant, ...props }: React.ComponentProps<typeof ToolbarPrimitive.ToggleItem> & VariantProps<typeof toolbarButtonVariants>): import("react/jsx-runtime").JSX.Element;
export declare function ToolbarGroup({ children, className, }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
type TooltipProps<T extends React.ElementType> = {
    tooltip?: React.ReactNode;
    tooltipContentProps?: Omit<React.ComponentPropsWithoutRef<typeof TooltipContent>, 'children'>;
    tooltipProps?: Omit<React.ComponentPropsWithoutRef<typeof Tooltip>, 'children'>;
    tooltipTriggerProps?: React.ComponentPropsWithoutRef<typeof TooltipTrigger>;
} & React.ComponentProps<T>;
declare function TooltipContent({ children, className, sideOffset, ...props }: React.ComponentProps<typeof TooltipPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
export declare function ToolbarMenuGroup({ children, className, label, ...props }: React.ComponentProps<typeof DropdownMenuRadioGroup> & {
    label?: string;
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=toolbar.d.ts.map