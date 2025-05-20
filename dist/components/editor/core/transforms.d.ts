import type { PlateEditor } from '@udecode/plate/react';
import { type NodeEntry, type Path, type TElement } from '@udecode/plate';
export declare const STRUCTURAL_TYPES: string[];
export declare const ACTION_THREE_COLUMNS = "action_three_columns";
export declare const insertList: (editor: PlateEditor, type: string) => void;
export declare const insertBlockMap: Record<string, (editor: PlateEditor, type: string) => void>;
export declare const insertInlineMap: Record<string, (editor: PlateEditor, type: string) => void>;
export declare const insertBlock: (editor: PlateEditor, type: string) => void;
export declare const insertInlineElement: (editor: PlateEditor, type: string) => void;
export declare const setList: (editor: PlateEditor, type: string, entry: NodeEntry<TElement>) => void;
export declare const setBlockMap: Record<string, (editor: PlateEditor, type: string, entry: NodeEntry<TElement>) => void>;
export declare const setBlockType: (editor: PlateEditor, type: string, { at }?: {
    at?: Path;
}) => void;
export declare const getBlockType: (block: TElement) => string;
//# sourceMappingURL=transforms.d.ts.map