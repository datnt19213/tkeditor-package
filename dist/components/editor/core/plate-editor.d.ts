import React from 'react';
import { EditorProps } from '../ui/editor';
import { PLUGIN_KEY } from './use-create-editor';
export type EditorProviderProps = {
    children: React.ReactNode;
    isToolbar?: boolean;
    isFloating?: boolean;
    allowPlugins?: PLUGIN_KEY[];
    toolbarClasses?: {
        className?: string;
        groupClass?: string;
    };
};
export declare const EditorProvider: React.FC<EditorProviderProps>;
export type TEditorProps = EditorProps & {
    editorRef?: React.Ref<HTMLDivElement>;
};
export declare const CoreEditor: React.FC<TEditorProps>;
//# sourceMappingURL=plate-editor.d.ts.map