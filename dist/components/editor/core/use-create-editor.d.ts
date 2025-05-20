import type { Value } from '@udecode/plate';
import { type CreatePlateEditorOptions } from '@udecode/plate/react';
export type PLUGIN_KEY = "undo" | "redo" | "ai" | "export" | "import" | "insert" | "turn_into" | "font_size" | "bold" | "italic" | "underline" | "strikethrough" | "code" | "font_color" | "background_color" | "align" | "indent_list" | "bulleted_list" | "indent_todo" | "toggle" | "link" | "table" | "emoji" | "image" | "video" | "audio" | "file" | "line_height" | "outdent" | "indent" | "more" | "highlight" | "comment" | "mode" | "equation" | "suggestion";
export declare const PLUGIN_DEFAULTS: PLUGIN_KEY[];
export declare const useCreateEditor: ({ isFixedToolbar, isFloatingToolbar, allowPlugins, toolbarClasses, floatingClasses, components, override, placeholders, readOnly, ...options }?: {
    isFixedToolbar?: boolean;
    isFloatingToolbar?: boolean;
    allowPlugins?: PLUGIN_KEY[];
    toolbarClasses?: {
        className?: string;
        groupClass?: string;
    };
    floatingClasses?: {
        className?: string;
        groupClass?: string;
    };
    components?: Record<string, any>;
    placeholders?: boolean;
    plugins?: any[];
    readOnly?: boolean;
} & Omit<CreatePlateEditorOptions, "plugins">, deps?: any[]) => import("@udecode/plate/react").TPlateEditor<Value, any>;
//# sourceMappingURL=use-create-editor.d.ts.map