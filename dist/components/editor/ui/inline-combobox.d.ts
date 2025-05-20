import * as React from 'react';
import { ComboboxGroup, ComboboxGroupLabel, type ComboboxItemProps, ComboboxPopover } from '@ariakit/react';
import { type UseComboboxInputResult } from '@udecode/plate-combobox/react';
export type FilterFn = (item: {
    value: string;
    group?: string;
    keywords?: string[];
    label?: string;
}, search: string) => boolean;
export interface InlineComboboxContextValue {
    filter: FilterFn | false;
    inputProps: UseComboboxInputResult['props'];
    inputRef: React.RefObject<HTMLInputElement | null>;
    removeInput: UseComboboxInputResult['removeInput'];
    showTrigger: boolean;
    trigger: string;
    setHasEmpty: (hasEmpty: boolean) => void;
}
export declare const InlineComboboxContext: React.Context<InlineComboboxContextValue>;
export declare const defaultFilter: FilterFn;
declare const InlineCombobox: any;
declare const InlineComboboxInput: any;
declare const InlineComboboxContent: typeof ComboboxPopover;
export type InlineComboboxItemProps = {
    focusEditor?: boolean;
    group?: string;
    keywords?: string[];
    label?: string;
} & ComboboxItemProps & Required<Pick<ComboboxItemProps, 'value'>>;
declare const InlineComboboxItem: any;
declare const InlineComboboxEmpty: any;
declare const InlineComboboxRow: (props: import("@ariakit/react").ComboboxRowProps) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
declare function InlineComboboxGroup({ className, ...props }: React.ComponentProps<typeof ComboboxGroup>): import("react/jsx-runtime").JSX.Element;
declare function InlineComboboxGroupLabel({ className, ...props }: React.ComponentProps<typeof ComboboxGroupLabel>): import("react/jsx-runtime").JSX.Element;
export { InlineCombobox, InlineComboboxContent, InlineComboboxEmpty, InlineComboboxGroup, InlineComboboxGroupLabel, InlineComboboxInput, InlineComboboxItem, InlineComboboxRow, };
//# sourceMappingURL=inline-combobox.d.ts.map