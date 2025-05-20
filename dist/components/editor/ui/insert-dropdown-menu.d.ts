import * as React from 'react';
import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import { type PlateEditor } from '@udecode/plate/react';
export type Group = {
    group: string;
    items: Item[];
};
export interface Item {
    icon: React.ReactNode;
    value: string;
    onSelect: (editor: PlateEditor, value: string) => void;
    focusEditor?: boolean;
    label?: string;
}
export declare const groups: Group[];
export declare function InsertDropdownMenu({ button, props }: {
    button?: React.ReactNode;
    props?: DropdownMenuProps;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=insert-dropdown-menu.d.ts.map