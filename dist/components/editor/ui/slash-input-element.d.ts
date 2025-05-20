import * as React from 'react';
import type { TSlashInputElement } from '@udecode/plate-slash-command';
import { type PlateEditor, type PlateElementProps } from '@udecode/plate/react';
export type Group = {
    group: string;
    items: Item[];
};
export interface Item {
    icon: React.ReactNode;
    value: string;
    onSelect: (editor: PlateEditor, value: string) => void;
    className?: string;
    focusEditor?: boolean;
    keywords?: string[];
    label?: string;
}
export declare const groups: Group[];
export declare function SlashInputElement(props: PlateElementProps<TSlashInputElement>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=slash-input-element.d.ts.map