import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import React__default from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { PlateContentProps, CreatePlateEditorOptions, ParagraphPlugin, PlateEditor } from '@udecode/plate/react';
import * as _udecode_plate_core_react from '@udecode/plate-core/react';
import { Value, TElement, TText, NodeEntry, Path, ExtendConfig } from '@udecode/plate';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { CodeLinePlugin, CodeBlockPlugin } from '@udecode/plate-code-block/react';
import { TCommentText, BaseCommentsConfig } from '@udecode/plate-comments';
import { TExcalidrawElement } from '@udecode/plate-excalidraw';
import { ExcalidrawPlugin } from '@udecode/plate-excalidraw/react';
import { HEADING_KEYS } from '@udecode/plate-heading';
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react';
import { TLinkElement } from '@udecode/plate-link';
import { LinkPlugin } from '@udecode/plate-link/react';
import { TImageElement, TMediaEmbedElement } from '@udecode/plate-media';
import { ImagePlugin, MediaEmbedPlugin } from '@udecode/plate-media/react';
import { TMentionElement, TMentionInputElement } from '@udecode/plate-mention';
import { MentionPlugin, MentionInputPlugin } from '@udecode/plate-mention/react';
import { TTableElement } from '@udecode/plate-table';
import { TableCellPlugin, TableRowPlugin, TablePlugin } from '@udecode/plate-table/react';
import { TToggleElement } from '@udecode/plate-toggle';
import { TogglePlugin } from '@udecode/plate-toggle/react';
import * as ai from 'ai';
import { BaseSuggestionConfig } from '@udecode/plate-suggestion';
import { Method } from 'axios';

declare const isSelectionAtTopLevel: (editor: any) => boolean;
declare const BlockWithPlus: ({ children, element }: any) => react_jsx_runtime.JSX.Element;

declare const editorVariants: (props?: ({
    disabled?: boolean | null | undefined;
    focused?: boolean | null | undefined;
    variant?: "default" | "select" | "none" | "comment" | "demo" | "ai" | "aiChat" | "fullWidth" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type EditorProps = PlateContentProps & VariantProps<typeof editorVariants>;

type PLUGIN_KEY = "undo" | "redo" | "ai" | "export" | "import" | "insert" | "turn_into" | "font_size" | "bold" | "italic" | "underline" | "strikethrough" | "code" | "font_color" | "background_color" | "align" | "indent_list" | "bulleted_list" | "indent_todo" | "toggle" | "link" | "table" | "emoji" | "image" | "video" | "audio" | "file" | "line_height" | "outdent" | "indent" | "more" | "highlight" | "comment" | "mode" | "equation" | "suggestion";
declare const PLUGIN_DEFAULTS: PLUGIN_KEY[];
declare const useCreateEditor: ({ isFixedToolbar, isFloatingToolbar, allowPlugins, toolbarClasses, floatingClasses, components, override, placeholders, readOnly, ...options }?: {
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
} & Omit<CreatePlateEditorOptions, "plugins">, deps?: any[]) => _udecode_plate_core_react.TPlateEditor<Value, any>;

type EditorProviderProps = {
    children: React__default.ReactNode;
    isToolbar?: boolean;
    isFloating?: boolean;
    allowPlugins?: PLUGIN_KEY[];
    toolbarClasses?: {
        className?: string;
        groupClass?: string;
    };
};
declare const EditorProvider: React__default.FC<EditorProviderProps>;
type TEditorProps = EditorProps & {
    editorRef?: React__default.Ref<HTMLDivElement>;
};
declare const CoreEditor: React__default.FC<TEditorProps>;

/** Text */
type EmptyText = {
    text: '';
};
interface MyAlignProps {
    align?: React__default.CSSProperties['textAlign'];
}
interface MyBlockElement extends MyIndentListProps, MyLineHeightProps, TElement {
    id?: string;
}
/** Inline Elements */
interface MyBlockquoteElement extends MyBlockElement {
    children: MyInlineChildren;
    type: typeof BlockquotePlugin.key;
}
interface MyCodeBlockElement extends MyBlockElement {
    children: MyCodeLineElement[];
    type: typeof CodeBlockPlugin.key;
}
interface MyCodeLineElement extends TElement {
    children: PlainText[];
    type: typeof CodeLinePlugin.key;
}
interface MyExcalidrawElement extends MyBlockElement, TExcalidrawElement {
    children: [EmptyText];
    type: typeof ExcalidrawPlugin.key;
}
interface MyH1Element extends MyBlockElement {
    children: MyInlineChildren;
    type: typeof HEADING_KEYS.h1;
}
interface MyH2Element extends MyBlockElement {
    children: MyInlineChildren;
    type: typeof HEADING_KEYS.h2;
}
/** Block props */
interface MyH3Element extends MyBlockElement {
    children: MyInlineChildren;
    type: typeof HEADING_KEYS.h3;
}
interface MyHrElement extends MyBlockElement {
    children: [EmptyText];
    type: typeof HorizontalRulePlugin.key;
}
interface MyImageElement extends MyBlockElement, TImageElement {
    children: [EmptyText];
    type: typeof ImagePlugin.key;
}
interface MyIndentListProps extends MyIndentProps {
    listRestart?: number;
    listStart?: number;
    listStyleType?: string;
}
interface MyIndentProps {
    indent?: number;
}
/** Blocks */
type MyInlineChildren = MyInlineDescendant[];
type MyInlineDescendant = MyInlineElement | RichText;
type MyInlineElement = MyLinkElement | MyMentionElement | MyMentionInputElement;
interface MyLineHeightProps {
    lineHeight?: React__default.CSSProperties['lineHeight'];
}
interface MyLinkElement extends TLinkElement {
    children: RichText[];
    type: typeof LinkPlugin.key;
}
interface MyMediaEmbedElement extends MyBlockElement, TMediaEmbedElement {
    children: [EmptyText];
    type: typeof MediaEmbedPlugin.key;
}
interface MyMentionElement extends TMentionElement {
    children: [EmptyText];
    type: typeof MentionPlugin.key;
}
interface MyMentionInputElement extends TMentionInputElement {
    children: [PlainText];
    type: typeof MentionInputPlugin.key;
}
type MyNestableBlock = MyParagraphElement;
interface MyParagraphElement extends MyBlockElement {
    children: MyInlineChildren;
    type: typeof ParagraphPlugin.key;
}
type MyRootBlock = MyBlockquoteElement | MyCodeBlockElement | MyExcalidrawElement | MyH1Element | MyH2Element | MyH3Element | MyHrElement | MyImageElement | MyMediaEmbedElement | MyParagraphElement | MyTableElement | MyToggleElement;
interface MyTableCellElement extends TElement {
    children: MyNestableBlock[];
    type: typeof TableCellPlugin.key;
}
interface MyTableElement extends MyBlockElement, TTableElement {
    children: MyTableRowElement[];
    type: typeof TablePlugin.key;
}
interface MyTableRowElement extends TElement {
    children: MyTableCellElement[];
    type: typeof TableRowPlugin.key;
}
interface MyToggleElement extends MyBlockElement, TToggleElement {
    children: MyInlineChildren;
    type: typeof TogglePlugin.key;
}
type MyValue = MyRootBlock[];
type PlainText = {
    text: string;
};
interface RichText extends TCommentText, TText {
    backgroundColor?: React__default.CSSProperties['backgroundColor'];
    bold?: boolean;
    code?: boolean;
    color?: React__default.CSSProperties['color'];
    fontFamily?: React__default.CSSProperties['fontFamily'];
    fontSize?: React__default.CSSProperties['fontSize'];
    fontWeight?: React__default.CSSProperties['fontWeight'];
    italic?: boolean;
    kbd?: boolean;
    strikethrough?: boolean;
    subscript?: boolean;
    underline?: boolean;
}

interface Model {
    label: string;
    value: string;
}
interface SettingsContextType {
    keys: Record<string, string>;
    model: Model;
    setKey: (service: string, key: string) => void;
    setModel: (model: Model) => void;
}
declare const models: Model[];
declare function SettingsProvider({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function useSettings(): SettingsContextType;
declare function SettingsDialog(): react_jsx_runtime.JSX.Element;

declare const Undo: () => react_jsx_runtime.JSX.Element;
declare const Redo: () => react_jsx_runtime.JSX.Element;
declare const AI: () => react_jsx_runtime.JSX.Element;
declare const Export: () => react_jsx_runtime.JSX.Element;
declare const Import: () => react_jsx_runtime.JSX.Element;
declare const Insert: () => react_jsx_runtime.JSX.Element;
declare const TurnInto: () => react_jsx_runtime.JSX.Element;
declare const FontSize: () => react_jsx_runtime.JSX.Element;
declare const Bold: () => react_jsx_runtime.JSX.Element;
declare const Italic: () => react_jsx_runtime.JSX.Element;
declare const Underline: () => react_jsx_runtime.JSX.Element;
declare const StrikeThrough: () => react_jsx_runtime.JSX.Element;
declare const Code: () => react_jsx_runtime.JSX.Element;
declare const FontColor: () => react_jsx_runtime.JSX.Element;
declare const BackgroundColor: () => react_jsx_runtime.JSX.Element;
declare const Align: () => react_jsx_runtime.JSX.Element;
declare const NumberIndentList: () => react_jsx_runtime.JSX.Element;
declare const BulletedIndentList: () => react_jsx_runtime.JSX.Element;
declare const TodoIndentList: () => react_jsx_runtime.JSX.Element;
declare const Toggle: () => react_jsx_runtime.JSX.Element;
declare const Link: () => react_jsx_runtime.JSX.Element;
declare const Table: () => react_jsx_runtime.JSX.Element;
declare const Emoji: () => react_jsx_runtime.JSX.Element;
declare const ImageMedia: () => react_jsx_runtime.JSX.Element;
declare const VideoMedia: () => react_jsx_runtime.JSX.Element;
declare const AudioMedia: () => react_jsx_runtime.JSX.Element;
declare const FileMedia: () => react_jsx_runtime.JSX.Element;
declare const LineHeight: () => react_jsx_runtime.JSX.Element;
declare const Outdent: () => react_jsx_runtime.JSX.Element;
declare const Indent: () => react_jsx_runtime.JSX.Element;
declare const More: () => react_jsx_runtime.JSX.Element;
declare const Highlight: () => react_jsx_runtime.JSX.Element;
declare const Comment: () => react_jsx_runtime.JSX.Element;
declare const Mode: () => react_jsx_runtime.JSX.Element;

declare const STRUCTURAL_TYPES: string[];
declare const ACTION_THREE_COLUMNS = "action_three_columns";
declare const insertList: (editor: PlateEditor, type: string) => void;
declare const insertBlockMap: Record<string, (editor: PlateEditor, type: string) => void>;
declare const insertInlineMap: Record<string, (editor: PlateEditor, type: string) => void>;
declare const insertBlock: (editor: PlateEditor, type: string) => void;
declare const insertInlineElement: (editor: PlateEditor, type: string) => void;
declare const setList: (editor: PlateEditor, type: string, entry: NodeEntry<TElement>) => void;
declare const setBlockMap: Record<string, (editor: PlateEditor, type: string, entry: NodeEntry<TElement>) => void>;
declare const setBlockType: (editor: PlateEditor, type: string, { at }?: {
    at?: Path;
}) => void;
declare const getBlockType: (block: TElement) => string;

declare const useChat: () => {
    _abortFakeStream: () => void;
    messages: ai.UIMessage[];
    error: undefined | Error;
    append: (message: ai.Message | ai.CreateMessage, chatRequestOptions?: ai.ChatRequestOptions) => Promise<string | null | undefined>;
    reload: (chatRequestOptions?: ai.ChatRequestOptions) => Promise<string | null | undefined>;
    stop: () => void;
    experimental_resume: () => void;
    setMessages: (messages: ai.Message[] | ((messages: ai.Message[]) => ai.Message[])) => void;
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleSubmit: (event?: {
        preventDefault?: () => void;
    }, chatRequestOptions?: ai.ChatRequestOptions) => void;
    metadata?: Object;
    isLoading: boolean;
    status: "submitted" | "streaming" | "ready" | "error";
    data?: ai.JSONValue[];
    setData: (data: ai.JSONValue[] | undefined | ((data: ai.JSONValue[] | undefined) => ai.JSONValue[] | undefined)) => void;
    id: string;
    addToolResult: ({ toolCallId, result, }: {
        toolCallId: string;
        result: any;
    }) => void;
};

declare const PROMPT_TEMPLATES: any;
declare const aiPlugins: any[];

declare const alignPlugin: any;

declare const autoformatPlugin: any;

declare const basicNodesPlugins: any[];

declare const blockMenuPlugins: any[];

declare const blockSelectionPlugins: any[];
declare const blockSelectionReadOnlyPlugin: any;

type CommentsConfig = ExtendConfig<BaseCommentsConfig, {
    activeId: string | null;
    commentingBlock: Path | null;
    hotkey: string[];
    hoverId: string | null;
    uniquePathMap: Map<string, Path>;
}>;
declare const commentsPlugin: any;

declare const copilotPlugins: any[];

declare const cursorOverlayPlugin: any;

declare const deletePlugins: any;

interface TComment {
    id: string;
    contentRich: Value;
    createdAt: Date;
    discussionId: string;
    isEdited: boolean;
    userId: string;
}

interface TDiscussion {
    id: string;
    comments: TComment[];
    createdAt: Date;
    isResolved: boolean;
    userId: string;
    documentContent?: string;
}
declare const discussionsData: TDiscussion[];
declare const avatarUrl: any;
declare const discussionPlugin: any;

declare const dndPlugins: any[];

declare const viewPlugins: any[];
declare const editorPlugins: any[];

declare const equationPlugins: any;

declare const exitBreakPlugin: any;

declare const FixedToolbarPlugin: any;

declare const FloatingToolbarPlugin: any;

declare const indentListPlugins: any;

declare const lineHeightPlugin: any;

declare const linkPlugin: any;

declare const markdownPlugin: any;

declare const mediaPlugins: any[];

declare const mentionPlugin: any;

declare const resetBlockTypesCommonRule: any;
declare const resetBlockTypesCodeBlockRule: any;
declare const resetBlockTypePlugin: any;

declare const skipMarkPlugin: any;

declare const softBreakPlugin: any;

type SuggestionConfig = ExtendConfig<BaseSuggestionConfig, {
    activeId: string | null;
    hoverId: string | null;
    uniquePathMap: Map<string, Path>;
}>;
declare const suggestionPlugin: any;

declare const tablePlugin: any;

declare const tocPlugin: any;

declare const useApi: <T>(resourceKey: string, params?: Record<string, any>, options?: {
    skip?: boolean;
}) => {
    data: T | null;
    loading: boolean;
    error: any;
};

type MutationOptions = {
    method?: Method;
    onSuccess?: (data: any) => void;
    onError?: (err: any) => void;
};
declare const useApiMutation: (resourceKey: string, options?: MutationOptions) => {
    mutate: (body?: any, extraParams?: Record<string, any>) => Promise<any>;
    loading: boolean;
    error: any;
    data: any;
};

type ResourceConfig = {
    [key: string]: string;
};
type ApiContextProps = {
    host: string;
    resources: ResourceConfig;
};
declare const ApiProvider: React__default.FC<{
    children: React__default.ReactNode;
    host: string;
    resources: ResourceConfig;
}>;
declare const useApiContext: () => ApiContextProps;

export { ACTION_THREE_COLUMNS, AI, Align, type ApiContextProps, ApiProvider, AudioMedia, BackgroundColor, BlockWithPlus, Bold, BulletedIndentList, Code, Comment, type CommentsConfig, CoreEditor, EditorProvider, type EditorProviderProps, Emoji, type EmptyText, Export, FileMedia, FixedToolbarPlugin, FloatingToolbarPlugin, FontColor, FontSize, Highlight, ImageMedia, Import, Indent, Insert, Italic, LineHeight, Link, Mode, type Model, More, type MutationOptions, type MyAlignProps, type MyBlockElement, type MyBlockquoteElement, type MyCodeBlockElement, type MyCodeLineElement, type MyExcalidrawElement, type MyH1Element, type MyH2Element, type MyH3Element, type MyHrElement, type MyImageElement, type MyIndentListProps, type MyIndentProps, type MyInlineChildren, type MyInlineDescendant, type MyInlineElement, type MyLineHeightProps, type MyLinkElement, type MyMediaEmbedElement, type MyMentionElement, type MyMentionInputElement, type MyNestableBlock, type MyParagraphElement, type MyRootBlock, type MyTableCellElement, type MyTableElement, type MyTableRowElement, type MyToggleElement, type MyValue, NumberIndentList, Outdent, PLUGIN_DEFAULTS, type PLUGIN_KEY, PROMPT_TEMPLATES, type PlainText, Redo, type ResourceConfig, type RichText, STRUCTURAL_TYPES, type SettingsContextType, SettingsDialog, SettingsProvider, StrikeThrough, type SuggestionConfig, type TDiscussion, type TEditorProps, Table, TodoIndentList, Toggle, TurnInto, Underline, Undo, VideoMedia, aiPlugins, alignPlugin, autoformatPlugin, avatarUrl, basicNodesPlugins, blockMenuPlugins, blockSelectionPlugins, blockSelectionReadOnlyPlugin, commentsPlugin, copilotPlugins, cursorOverlayPlugin, deletePlugins, discussionPlugin, discussionsData, dndPlugins, editorPlugins, equationPlugins, exitBreakPlugin, getBlockType, indentListPlugins, insertBlock, insertBlockMap, insertInlineElement, insertInlineMap, insertList, isSelectionAtTopLevel, lineHeightPlugin, linkPlugin, markdownPlugin, mediaPlugins, mentionPlugin, models, resetBlockTypePlugin, resetBlockTypesCodeBlockRule, resetBlockTypesCommonRule, setBlockMap, setBlockType, setList, skipMarkPlugin, softBreakPlugin, suggestionPlugin, tablePlugin, tocPlugin, useApi, useApiContext, useApiMutation, useChat, useCreateEditor, useSettings, viewPlugins };
