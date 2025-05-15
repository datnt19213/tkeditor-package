import * as ai from 'ai';
import * as _udecode_plate_combobox from '@udecode/plate-combobox';
import * as _udecode_plate_ai_react from '@udecode/plate-ai/react';
import * as _ai_sdk_react from '@ai-sdk/react';
import * as _udecode_slate from '@udecode/slate';
import * as _udecode_utils from '@udecode/utils';
import * as unified from 'unified';
import * as _udecode_plate_markdown from '@udecode/plate-markdown';
import { serializeMd } from '@udecode/plate-markdown';
import * as _udecode_plate_core_react from '@udecode/plate-core/react';
import * as _udecode_plate_core from '@udecode/plate-core';
import * as _udecode_plate_selection_react from '@udecode/plate-selection/react';
import { CursorOverlayState, CursorData } from '@udecode/plate-selection/react';
import { AutoformatRule } from '@udecode/plate-autoformat';
import * as _udecode_plate_heading from '@udecode/plate-heading';
import { HEADING_KEYS } from '@udecode/plate-heading';
import * as highlight_js from 'highlight.js';
import * as hast from 'hast';
import * as _lowlight from 'lowlight';
import { createLowlight } from 'lowlight';
import * as _udecode_plate_comments from '@udecode/plate-comments';
import { BaseCommentsConfig, TCommentText } from '@udecode/plate-comments';
import { ExtendConfig, Path, Value as Value$1, SlateRenderElementProps, TElement, TText, NodeEntry, SlateEditor, AnyPluginConfig, SlateElementProps, SlateLeafProps, PlateStaticProps, WithRequiredKey, Editor as Editor$1 } from '@udecode/plate';
import * as _udecode_plate_select from '@udecode/plate-select';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import react__default from 'react';
import * as react_dnd from 'react-dnd';
import * as _udecode_plate_dnd from '@udecode/plate-dnd';
import * as _udecode_plate_node_id from '@udecode/plate-node-id';
import * as _udecode_plate_suggestion from '@udecode/plate-suggestion';
import { TSuggestionText, BaseSuggestionConfig, TSuggestionElement, TResolvedSuggestion } from '@udecode/plate-suggestion';
import * as _udecode_plate_indent_list from '@udecode/plate-indent-list';
import { ListStyleType } from '@udecode/plate-indent-list';
import * as _udecode_plate_callout from '@udecode/plate-callout';
import * as _udecode_plate_media_react from '@udecode/plate-media/react';
import { ImagePlugin, MediaEmbedPlugin } from '@udecode/plate-media/react';
import * as _udecode_plate_media from '@udecode/plate-media';
import { TImageElement, TMediaEmbedElement, TAudioElement, TFileElement, TPlaceholderElement, TVideoElement } from '@udecode/plate-media';
import * as _udecode_plate_table from '@udecode/plate-table';
import { TTableCellElement, TTableRowElement, TTableElement } from '@udecode/plate-table';
import * as _udecode_plate_link from '@udecode/plate-link';
import { TLinkElement } from '@udecode/plate-link';
import * as _udecode_plate_link_react from '@udecode/plate-link/react';
import { LinkPlugin, LinkFloatingToolbarState } from '@udecode/plate-link/react';
import * as node_modules__udecode_plate_break_dist_BaseSoftBreakPlugin_CeLtcSTo from 'node_modules/@udecode/plate-break/dist/BaseSoftBreakPlugin-CeLtcSTo';
import * as class_variance_authority from 'class-variance-authority';
import { VariantProps } from 'class-variance-authority';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as _udecode_plate_layout from '@udecode/plate-layout';
import { TColumnElement } from '@udecode/plate-layout';
import { CodeLinePlugin, CodeBlockPlugin } from '@udecode/plate-code-block/react';
import { PlateTextProps, PlateElementProps, PlateElement, PlateLeafProps, PlateEditor, CreatePlateEditorOptions, PlateContentProps, ParagraphPlugin, RenderNodeWrapper, PlaceholderProps } from '@udecode/plate/react';
import { TCodeBlockElement } from '@udecode/plate-code-block';
import { TDateElement } from '@udecode/plate-date';
import { TEquationElement } from '@udecode/plate-math';
import { TExcalidrawElement } from '@udecode/plate-excalidraw';
import { TMentionElement, TMentionInputElement } from '@udecode/plate-mention';
import { TSlashInputElement } from '@udecode/plate-slash-command';
import * as _udecode_plate_reset_node from '@udecode/plate-reset-node';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { ExcalidrawPlugin } from '@udecode/plate-excalidraw/react';
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react';
import { MentionPlugin, MentionInputPlugin } from '@udecode/plate-mention/react';
import { TableCellPlugin, TableRowPlugin, TablePlugin } from '@udecode/plate-table/react';
import { TToggleElement } from '@udecode/plate-toggle';
import { TogglePlugin } from '@udecode/plate-toggle/react';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { DropdownMenuProps, DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu';
import * as zustand_x from 'zustand-x';
import * as mutative from 'mutative';
import { Caption as Caption$1, CaptionTextarea as CaptionTextarea$1 } from '@udecode/plate-caption/react';
import { EmojiDropdownMenuOptions, UseEmojiPickerType } from '@udecode/plate-emoji/react';
import { EmojiCategoryList, Emoji as Emoji$1, GridRow } from '@udecode/plate-emoji';
import { TextareaAutosizeProps } from 'react-textarea-autosize';
import { FloatingToolbarState } from '@udecode/plate-floating';
import { TCaptionElement } from '@udecode/plate-caption';
import { ComboboxItemProps } from '@ariakit/react';
import { UseComboboxInputResult } from '@udecode/plate-combobox/react';
import * as _udecode_plate_utils_react from '@udecode/plate-utils/react';
import { Resizable as Resizable$1, ResizeHandle as ResizeHandle$1 } from '@udecode/plate-resizable';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { LucideProps } from 'lucide-react';
import * as uploadthing_types from 'uploadthing/types';
import { ClientUploadedFileData, UploadFilesOptions } from 'uploadthing/types';
import * as next_server from 'next/server';
import * as node_modules_uploadthing_dist__internal_types from 'node_modules/uploadthing/dist/_internal/types';
import * as _uploadthing_shared from '@uploadthing/shared';
import { ClassValue } from 'clsx';

declare const PROMPT_TEMPLATES: {
    systemBlockSelecting: string;
    systemDefault: string;
    systemSelecting: string;
    userBlockSelecting: string;
    userDefault: string;
    userSelecting: string;
};
declare const aiPlugins: readonly [_udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"cursorOverlay", {
    cursors: Record<string, _udecode_plate_selection_react.CursorState<_udecode_plate_selection_react.CursorData>>;
}, {
    cursorOverlay: {
        addCursor: (id: string, cursor: Omit<_udecode_plate_selection_react.CursorState<_udecode_plate_selection_react.CursorData>, "id">) => void;
        removeCursor: (id: (string & {}) | "drag" | "selection") => void;
    };
} & Record<"cursorOverlay", {
    addCursor: (id: string, cursor: Omit<_udecode_plate_selection_react.CursorState<_udecode_plate_selection_react.CursorData>, "id">) => void;
    removeCursor: (id: (string & {}) | "drag" | "selection") => void;
}>, {}, {}>>, _udecode_plate_core.SlatePlugin<_udecode_plate_core.PluginConfig<"markdown", {
    allowedNodes: _udecode_plate_markdown.NodesConfig;
    disallowedNodes: _udecode_plate_markdown.NodesConfig;
    remarkPlugins: unified.Plugin[];
    rules: _udecode_plate_markdown.TRules | null;
    allowNode?: _udecode_plate_markdown.AllowNodeConfig;
}, {
    markdown: {
        deserialize: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, data: string, options?: Omit<_udecode_plate_markdown.DeserializeMdOptions, "editor">) => any>;
        deserializeInline: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, text: string, options?: _udecode_plate_markdown.DeserializeMdOptions) => _udecode_slate.Descendant[]>;
        serialize: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, options?: Omit<_udecode_plate_markdown.SerializeMdOptions, "editor">) => string>;
    };
} & Record<"markdown", {
    deserialize: (data: string, options?: Omit<_udecode_plate_markdown.DeserializeMdOptions, "editor"> | undefined) => any;
    deserializeInline: (text: string, options?: _udecode_plate_markdown.DeserializeMdOptions | undefined) => _udecode_slate.Descendant[];
    serialize: (options?: Omit<_udecode_plate_markdown.SerializeMdOptions, "editor"> | undefined) => string;
}>, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<any, {}, {}, Record<any, {
    insertNodes: (nodes: _udecode_slate.Descendant[], args_1?: {
        target?: _udecode_slate.Path;
    } | undefined) => void;
    removeMarks: (args_0?: {
        at?: _udecode_slate.TLocation;
    } | undefined) => void;
    removeNodes: (args_0?: {
        at?: _udecode_slate.Path;
    } | undefined) => void;
    undo: () => void;
}>, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"aiChat", {
    _blockChunks: string;
    _blockPath: _udecode_slate.Path | null;
    aiEditor: _udecode_plate_core.SlateEditor | null;
    chat: Partial<_ai_sdk_react.UseChatHelpers>;
    experimental_lastTextId: string | null;
    mode: "chat" | "insert";
    open: boolean;
    streaming: boolean;
    promptTemplate: (props: _udecode_plate_ai_react.EditorPromptParams) => string;
    systemTemplate: (props: _udecode_plate_ai_react.EditorPromptParams) => string | void;
} & _udecode_plate_combobox.TriggerComboboxPluginOptions, {
    aiChat: {
        reset: _udecode_utils.OmitFirst<(editor: _udecode_plate_core_react.PlateEditor) => void>;
        submit: _udecode_utils.OmitFirst<(editor: _udecode_plate_core_react.PlateEditor, { mode, options, prompt, system, }?: {
            mode?: "chat" | "insert";
            options?: ai.ChatRequestOptions;
            prompt?: _udecode_plate_ai_react.EditorPrompt;
            system?: _udecode_plate_ai_react.EditorPrompt;
        }) => void>;
        hide: () => void;
        node: (options?: _udecode_slate.EditorNodesOptions & {
            anchor?: boolean;
            streaming?: boolean;
        }) => _udecode_slate.NodeEntry | undefined;
        reload: () => void;
        show: () => void;
        stop: () => void;
    };
} & Record<"aiChat", Pick<{
    reset: _udecode_utils.OmitFirst<(editor: _udecode_plate_core_react.PlateEditor) => void>;
    submit: _udecode_utils.OmitFirst<(editor: _udecode_plate_core_react.PlateEditor, { mode, options, prompt, system, }?: {
        mode?: "chat" | "insert";
        options?: ai.ChatRequestOptions;
        prompt?: _udecode_plate_ai_react.EditorPrompt;
        system?: _udecode_plate_ai_react.EditorPrompt;
    }) => void>;
    hide: () => void;
    node: (options?: _udecode_slate.EditorNodesOptions & {
        anchor?: boolean;
        streaming?: boolean;
    }) => _udecode_slate.NodeEntry | undefined;
    reload: () => void;
    show: () => void;
    stop: () => void;
}, "node" | "stop" | "submit" | "reset">> & Record<"aiChat", {
    hide: () => void;
    show: () => void;
}>, {
    aiChat: {
        accept: _udecode_utils.OmitFirst<(editor: _udecode_plate_core_react.PlateEditor) => void>;
        insertBelow: _udecode_utils.OmitFirst<(editor: _udecode_plate_core_react.PlateEditor, sourceEditor: _udecode_plate_core.SlateEditor, { format }?: {
            format?: "all" | "none" | "single";
        }) => void>;
        replaceSelection: _udecode_utils.OmitFirst<(editor: _udecode_plate_core_react.PlateEditor, sourceEditor: _udecode_plate_core.SlateEditor, { format }?: {
            format?: "all" | "none" | "single";
        }) => void>;
        removeAnchor: (options?: _udecode_slate.EditorNodesOptions) => void;
    };
} & Record<"aiChat", {
    accept: () => void;
    insertBelow: (sourceEditor: _udecode_plate_core.SlateEditor, args_1?: {
        format?: "all" | "none" | "single";
    } | undefined) => void;
    removeAnchor: (options?: _udecode_slate.RemoveNodesOptions | undefined) => void;
    replaceSelection: (sourceEditor: _udecode_plate_core.SlateEditor, args_1?: {
        format?: "all" | "none" | "single";
    } | undefined) => void;
}>, {}>>];

declare const alignPlugin: _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"align", {}, {}, {}, {}>>;

declare const autoformatPlugin: _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"autoformat", {
    enableUndoOnDelete?: boolean;
    rules?: AutoformatRule[];
}, {}, {}, {}>>;

declare const lowlight$2: {
    highlight: (language: string, value: string, options?: Readonly<_lowlight.Options> | null | undefined) => hast.Root;
    highlightAuto: (value: string, options?: Readonly<_lowlight.AutoOptions> | null | undefined) => hast.Root;
    listLanguages: () => Array<string>;
    register: {
        (grammars: Readonly<Record<string, highlight_js.LanguageFn>>): undefined;
        (name: string, grammar: highlight_js.LanguageFn): undefined;
    };
    registerAlias: {
        (aliases: Readonly<Record<string, ReadonlyArray<string> | string>>): undefined;
        (language: string, alias: ReadonlyArray<string> | string): undefined;
    };
    registered: (aliasOrName: string) => boolean;
};
declare const basicNodesPlugins: readonly [_udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"heading", {
    levels?: _udecode_plate_heading.HeadingLevel | _udecode_plate_heading.HeadingLevel[];
}, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"blockquote", {}, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"code_block", {
    defaultLanguage?: string | null;
    lowlight?: ReturnType<typeof createLowlight> | null;
}, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"basicMarks", {}, {}, {}, {}>>];

declare const blockMenuPlugins: any;

declare const blockSelectionPlugins: any;
declare const blockSelectionReadOnlyPlugin: any;

type CommentsConfig = ExtendConfig<BaseCommentsConfig, {
    activeId: string | null;
    commentingBlock: Path | null;
    hotkey: string[];
    hoverId: string | null;
    uniquePathMap: Map<string, Path>;
}>;
declare const commentsPlugin: _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"comment", {
    activeId: string | null;
    commentingBlock: Path | null;
    hotkey: string[];
    hoverId: string | null;
    uniquePathMap: Map<string, Path>;
}, {
    comment: {
        has: (options: {
            id: string;
        }) => boolean;
        node: (options?: _udecode_slate.EditorNodesOptions & {
            id?: string;
            isDraft?: boolean;
        }) => _udecode_slate.NodeEntry<_udecode_plate_comments.TCommentText> | undefined;
        nodeId: (leaf: _udecode_plate_comments.TCommentText) => string | undefined;
        nodes: (options?: _udecode_slate.EditorNodesOptions & {
            id?: string;
            isDraft?: boolean;
        }) => _udecode_slate.NodeEntry<_udecode_plate_comments.TCommentText>[];
    };
}, {
    comment: {
        removeMark: () => void;
        setDraft: (options?: _udecode_slate.SetNodesOptions) => void;
        unsetMark: (options: {
            id: string;
        }) => void;
    };
}, {}>>;

declare const copilotPlugins: readonly [_udecode_plate_core.SlatePlugin<_udecode_plate_core.PluginConfig<"markdown", {
    allowedNodes: _udecode_plate_markdown.NodesConfig;
    disallowedNodes: _udecode_plate_markdown.NodesConfig;
    remarkPlugins: unified.Plugin[];
    rules: _udecode_plate_markdown.TRules | null;
    allowNode?: _udecode_plate_markdown.AllowNodeConfig;
}, {
    markdown: {
        deserialize: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, data: string, options?: Omit<_udecode_plate_markdown.DeserializeMdOptions, "editor">) => any>;
        deserializeInline: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, text: string, options?: _udecode_plate_markdown.DeserializeMdOptions) => _udecode_slate.Descendant[]>;
        serialize: _udecode_utils.OmitFirst<typeof serializeMd>;
    };
} & Record<"markdown", {
    deserialize: (data: string, options?: Omit<_udecode_plate_markdown.DeserializeMdOptions, "editor"> | undefined) => any;
    deserializeInline: (text: string, options?: _udecode_plate_markdown.DeserializeMdOptions | undefined) => _udecode_slate.Descendant[];
    serialize: (options?: Omit<_udecode_plate_markdown.SerializeMdOptions, "editor"> | undefined) => string;
}>, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"copilot", {
    abortController?: AbortController | null;
    completion?: string | null;
    error?: Error | null;
    isLoading?: boolean;
} & {
    completeOptions?: Partial<_udecode_plate_ai_react.CompleteOptions>;
    debounceDelay?: number;
    getNextWord?: _udecode_plate_ai_react.GetNextWord;
    renderGhostText?: (() => React.ReactNode) | null;
    shouldAbort?: boolean;
    suggestionNodeId?: string | null;
    suggestionText?: string | null;
    autoTriggerQuery?: (options: {
        editor: _udecode_plate_core_react.PlateEditor;
    }) => boolean;
    getPrompt?: (options: {
        editor: _udecode_plate_core_react.PlateEditor;
    }) => string;
    triggerQuery?: (options: {
        editor: _udecode_plate_core_react.PlateEditor;
    }) => boolean;
}, {
    copilot: {
        accept: _udecode_utils.OmitFirst<(editor: _udecode_plate_core_react.PlateEditor) => void>;
        acceptNextWord: _udecode_utils.OmitFirst<(editor: _udecode_plate_core_react.PlateEditor) => void>;
        triggerSuggestion: _udecode_utils.OmitFirst<(editor: _udecode_plate_core_react.PlateEditor) => Promise<void>>;
        reset: () => void;
        setBlockSuggestion: (options: {
            text: string;
            id?: string;
        }) => void;
        stop: () => void;
    };
} & Record<"copilot", Omit<{
    accept: _udecode_utils.OmitFirst<(editor: _udecode_plate_core_react.PlateEditor) => void>;
    acceptNextWord: _udecode_utils.OmitFirst<(editor: _udecode_plate_core_react.PlateEditor) => void>;
    triggerSuggestion: _udecode_utils.OmitFirst<(editor: _udecode_plate_core_react.PlateEditor) => Promise<void>>;
    reset: () => void;
    setBlockSuggestion: (options: {
        text: string;
        id?: string;
    }) => void;
    stop: () => void;
}, "reset">> & Record<"copilot", {
    reset: () => void;
}>, {}, {
    isSuggested?: (id: string) => boolean;
}>>];

declare const cursorOverlayPlugin: _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"cursorOverlay", {
    cursors: Record<string, _udecode_plate_selection_react.CursorState<_udecode_plate_selection_react.CursorData>>;
}, {
    cursorOverlay: {
        addCursor: (id: string, cursor: Omit<_udecode_plate_selection_react.CursorState<_udecode_plate_selection_react.CursorData>, "id">) => void;
        removeCursor: (id: (string & {}) | "drag" | "selection") => void;
    };
} & Record<"cursorOverlay", {
    addCursor: (id: string, cursor: Omit<_udecode_plate_selection_react.CursorState<_udecode_plate_selection_react.CursorData>, "id">) => void;
    removeCursor: (id: (string & {}) | "drag" | "selection") => void;
}>, {}, {}>>;

declare const deletePlugins: readonly [_udecode_plate_core.SlatePlugin<_udecode_plate_select.SelectOnBackspaceConfig>, _udecode_plate_core.SlatePlugin<_udecode_plate_select.DeleteConfig>];

declare const formatCommentDate: (date: Date) => string;
interface TComment {
    id: string;
    contentRich: Value$1;
    createdAt: Date;
    discussionId: string;
    isEdited: boolean;
    userId: string;
}
declare function Comment$1(props: {
    comment: TComment;
    discussionLength: number;
    editingId: string | null;
    index: number;
    setEditingId: react.Dispatch<react.SetStateAction<string | null>>;
    documentContent?: string;
    showDocumentContent?: boolean;
    onEditorClick?: () => void;
}): react_jsx_runtime.JSX.Element;
interface CommentMoreDropdownProps {
    comment: TComment;
    dropdownOpen: boolean;
    setDropdownOpen: react.Dispatch<react.SetStateAction<boolean>>;
    setEditingId: react.Dispatch<react.SetStateAction<string | null>>;
    onCloseAutoFocus?: () => void;
    onRemoveComment?: () => void;
}
declare function CommentMoreDropdown(props: CommentMoreDropdownProps): react_jsx_runtime.JSX.Element;

interface TDiscussion {
    id: string;
    comments: TComment[];
    createdAt: Date;
    isResolved: boolean;
    userId: string;
    documentContent?: string;
}
declare const discussionsData: TDiscussion[];
declare const avatarUrl: (seed: string) => string;
declare const discussionPlugin: _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"discussion", {
    currentUserId: string;
    discussions: TDiscussion[];
    users: Record<string, {
        id: string;
        avatarUrl: string;
        name: string;
        hue?: number;
    }>;
}, {}, {}, {
    currentUser: () => {
        id: string;
        avatarUrl: string;
        name: string;
        hue?: number;
    };
    user: (id: string) => {
        id: string;
        avatarUrl: string;
        name: string;
        hue?: number;
    };
}>>;

declare const dndPlugins: readonly [_udecode_plate_core.SlatePlugin<_udecode_plate_node_id.NodeIdConfig>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"dnd", {
    draggingId?: string | null;
    dropTarget?: {
        id: string | null;
        line: _udecode_plate_dnd.DropLineDirection;
    };
    enableScroller?: boolean;
    isDragging?: boolean;
    scrollerProps?: Partial<_udecode_plate_dnd.ScrollerProps>;
    onDropFiles?: (props: {
        id: string;
        dragItem: _udecode_plate_dnd.FileDragItemNode;
        editor: _udecode_plate_core_react.PlateEditor;
        monitor: react_dnd.DropTargetMonitor<_udecode_plate_dnd.DragItemNode, unknown>;
        nodeRef: any;
        target?: _udecode_slate.Path;
    }) => void;
}, {}, {}, {}>>];

declare const viewPlugins: readonly [_udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"heading", {
    levels?: _udecode_plate_heading.HeadingLevel | _udecode_plate_heading.HeadingLevel[];
}, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"blockquote", {}, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"code_block", {
    defaultLanguage?: string | null;
    lowlight?: ReturnType<typeof _lowlight.createLowlight> | null;
}, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"basicMarks", {}, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"hr", {}, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"a", {
    allowedSchemes?: string[];
    dangerouslySkipSanitization?: boolean;
    defaultLinkAttributes?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
    forceSubmit?: boolean;
    keepSelectedTextOnPaste?: boolean;
    rangeBeforeOptions?: _udecode_slate.EditorBeforeOptions;
    triggerFloatingLinkHotkeys?: string[] | string;
    getLinkUrl?: (prevUrl: string | null) => Promise<string | null>;
    getUrlHref?: (url: string) => string | undefined;
    isUrl?: (text: string) => boolean;
    transformInput?: (url: string) => string | undefined;
} & {
    isEditing: boolean;
    mode: _udecode_plate_link_react.FloatingLinkMode;
    mouseDown: boolean;
    newTab: boolean;
    openEditorId: string | null;
    text: string;
    updated: boolean;
    url: string;
    triggerFloatingLinkHotkeys?: string;
}, {
    floatingLink: {
        hide: () => void;
        reset: () => void;
        show: (mode: _udecode_plate_link_react.FloatingLinkMode, editorId: string) => void;
    };
    link: {
        getAttributes: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, link: _udecode_plate_link.TLinkElement) => {
            download?: any;
            href?: string | undefined;
            hrefLang?: string | undefined;
            media?: string | undefined;
            ping?: string | undefined;
            target?: react.HTMLAttributeAnchorTarget | undefined;
            type?: string | undefined;
            referrerPolicy?: react.HTMLAttributeReferrerPolicy | undefined;
            defaultChecked?: boolean | undefined;
            defaultValue?: string | number | readonly string[] | undefined;
            suppressContentEditableWarning?: boolean | undefined;
            suppressHydrationWarning?: boolean | undefined;
            accessKey?: string | undefined;
            autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {});
            autoFocus?: boolean | undefined;
            className?: string | undefined;
            contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
            contextMenu?: string | undefined;
            dir?: string | undefined;
            draggable?: (boolean | "true" | "false") | undefined;
            enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
            hidden?: boolean | undefined;
            id?: string | undefined;
            lang?: string | undefined;
            nonce?: string | undefined;
            slot?: string | undefined;
            spellCheck?: (boolean | "true" | "false") | undefined;
            style?: react.CSSProperties | undefined;
            tabIndex?: number | undefined;
            title?: string | undefined;
            translate?: "yes" | "no" | undefined;
            radioGroup?: string | undefined;
            role?: react.AriaRole | undefined;
            about?: string | undefined;
            content?: string | undefined;
            datatype?: string | undefined;
            inlist?: any;
            prefix?: string | undefined;
            property?: string | undefined;
            rel?: string | undefined;
            resource?: string | undefined;
            rev?: string | undefined;
            typeof?: string | undefined;
            vocab?: string | undefined;
            autoCorrect?: string | undefined;
            autoSave?: string | undefined;
            color?: string | undefined;
            itemProp?: string | undefined;
            itemScope?: boolean | undefined;
            itemType?: string | undefined;
            itemID?: string | undefined;
            itemRef?: string | undefined;
            results?: number | undefined;
            security?: string | undefined;
            unselectable?: "on" | "off" | undefined;
            popover?: "" | "auto" | "manual" | undefined;
            popoverTargetAction?: "toggle" | "show" | "hide" | undefined;
            popoverTarget?: string | undefined;
            inert?: boolean | undefined;
            inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
            is?: string | undefined;
            exportparts?: string | undefined;
            part?: string | undefined;
            "aria-activedescendant"?: string | undefined;
            "aria-atomic"?: (boolean | "true" | "false") | undefined;
            "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
            "aria-braillelabel"?: string | undefined;
            "aria-brailleroledescription"?: string | undefined;
            "aria-busy"?: (boolean | "true" | "false") | undefined;
            "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
            "aria-colcount"?: number | undefined;
            "aria-colindex"?: number | undefined;
            "aria-colindextext"?: string | undefined;
            "aria-colspan"?: number | undefined;
            "aria-controls"?: string | undefined;
            "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
            "aria-describedby"?: string | undefined;
            "aria-description"?: string | undefined;
            "aria-details"?: string | undefined;
            "aria-disabled"?: (boolean | "true" | "false") | undefined;
            "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
            "aria-errormessage"?: string | undefined;
            "aria-expanded"?: (boolean | "true" | "false") | undefined;
            "aria-flowto"?: string | undefined;
            "aria-grabbed"?: (boolean | "true" | "false") | undefined;
            "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
            "aria-hidden"?: (boolean | "true" | "false") | undefined;
            "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
            "aria-keyshortcuts"?: string | undefined;
            "aria-label"?: string | undefined;
            "aria-labelledby"?: string | undefined;
            "aria-level"?: number | undefined;
            "aria-live"?: "off" | "assertive" | "polite" | undefined;
            "aria-modal"?: (boolean | "true" | "false") | undefined;
            "aria-multiline"?: (boolean | "true" | "false") | undefined;
            "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
            "aria-orientation"?: "horizontal" | "vertical" | undefined;
            "aria-owns"?: string | undefined;
            "aria-placeholder"?: string | undefined;
            "aria-posinset"?: number | undefined;
            "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
            "aria-readonly"?: (boolean | "true" | "false") | undefined;
            "aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined;
            "aria-required"?: (boolean | "true" | "false") | undefined;
            "aria-roledescription"?: string | undefined;
            "aria-rowcount"?: number | undefined;
            "aria-rowindex"?: number | undefined;
            "aria-rowindextext"?: string | undefined;
            "aria-rowspan"?: number | undefined;
            "aria-selected"?: (boolean | "true" | "false") | undefined;
            "aria-setsize"?: number | undefined;
            "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
            "aria-valuemax"?: number | undefined;
            "aria-valuemin"?: number | undefined;
            "aria-valuenow"?: number | undefined;
            "aria-valuetext"?: string | undefined;
            children?: react.ReactNode | undefined;
            dangerouslySetInnerHTML?: {
                __html: string | TrustedHTML;
            } | undefined;
            onCopy?: react.ClipboardEventHandler<HTMLAnchorElement> | undefined;
            onCopyCapture?: react.ClipboardEventHandler<HTMLAnchorElement> | undefined;
            onCut?: react.ClipboardEventHandler<HTMLAnchorElement> | undefined;
            onCutCapture?: react.ClipboardEventHandler<HTMLAnchorElement> | undefined;
            onPaste?: react.ClipboardEventHandler<HTMLAnchorElement> | undefined;
            onPasteCapture?: react.ClipboardEventHandler<HTMLAnchorElement> | undefined;
            onCompositionEnd?: react.CompositionEventHandler<HTMLAnchorElement> | undefined;
            onCompositionEndCapture?: react.CompositionEventHandler<HTMLAnchorElement> | undefined;
            onCompositionStart?: react.CompositionEventHandler<HTMLAnchorElement> | undefined;
            onCompositionStartCapture?: react.CompositionEventHandler<HTMLAnchorElement> | undefined;
            onCompositionUpdate?: react.CompositionEventHandler<HTMLAnchorElement> | undefined;
            onCompositionUpdateCapture?: react.CompositionEventHandler<HTMLAnchorElement> | undefined;
            onFocus?: react.FocusEventHandler<HTMLAnchorElement> | undefined;
            onFocusCapture?: react.FocusEventHandler<HTMLAnchorElement> | undefined;
            onBlur?: react.FocusEventHandler<HTMLAnchorElement> | undefined;
            onBlurCapture?: react.FocusEventHandler<HTMLAnchorElement> | undefined;
            onChange?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onChangeCapture?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onBeforeInput?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onBeforeInputCapture?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onInput?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onInputCapture?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onReset?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onResetCapture?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onSubmit?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onSubmitCapture?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onInvalid?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onInvalidCapture?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onLoad?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onLoadCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onError?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onErrorCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onKeyDown?: react.KeyboardEventHandler<HTMLAnchorElement> | undefined;
            onKeyDownCapture?: react.KeyboardEventHandler<HTMLAnchorElement> | undefined;
            onKeyPress?: react.KeyboardEventHandler<HTMLAnchorElement> | undefined;
            onKeyPressCapture?: react.KeyboardEventHandler<HTMLAnchorElement> | undefined;
            onKeyUp?: react.KeyboardEventHandler<HTMLAnchorElement> | undefined;
            onKeyUpCapture?: react.KeyboardEventHandler<HTMLAnchorElement> | undefined;
            onAbort?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onAbortCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onCanPlay?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onCanPlayCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onCanPlayThrough?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onCanPlayThroughCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onDurationChange?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onDurationChangeCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onEmptied?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onEmptiedCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onEncrypted?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onEncryptedCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onEnded?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onEndedCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onLoadedData?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onLoadedDataCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onLoadedMetadata?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onLoadedMetadataCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onLoadStart?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onLoadStartCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onPause?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onPauseCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onPlay?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onPlayCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onPlaying?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onPlayingCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onProgress?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onProgressCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onRateChange?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onRateChangeCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onResize?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onResizeCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onSeeked?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onSeekedCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onSeeking?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onSeekingCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onStalled?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onStalledCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onSuspend?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onSuspendCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onTimeUpdate?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onTimeUpdateCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onVolumeChange?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onVolumeChangeCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onWaiting?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onWaitingCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onAuxClick?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onAuxClickCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onClick?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onClickCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onContextMenu?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onContextMenuCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onDoubleClick?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onDoubleClickCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onDrag?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragCapture?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragEnd?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragEndCapture?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragEnter?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragEnterCapture?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragExit?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragExitCapture?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragLeave?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragLeaveCapture?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragOver?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragOverCapture?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragStart?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragStartCapture?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDrop?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDropCapture?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onMouseDown?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseDownCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseEnter?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseLeave?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseMove?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseMoveCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseOut?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseOutCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseOver?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseOverCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseUp?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseUpCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onSelect?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onSelectCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onTouchCancel?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
            onTouchCancelCapture?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
            onTouchEnd?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
            onTouchEndCapture?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
            onTouchMove?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
            onTouchMoveCapture?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
            onTouchStart?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
            onTouchStartCapture?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
            onPointerDown?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerDownCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerMove?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerMoveCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerUp?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerUpCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerCancel?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerCancelCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerEnter?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerLeave?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerOver?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerOverCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerOut?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerOutCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onGotPointerCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onGotPointerCaptureCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onLostPointerCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onLostPointerCaptureCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onScroll?: react.UIEventHandler<HTMLAnchorElement> | undefined;
            onScrollCapture?: react.UIEventHandler<HTMLAnchorElement> | undefined;
            onScrollEnd?: react.UIEventHandler<HTMLAnchorElement> | undefined;
            onScrollEndCapture?: react.UIEventHandler<HTMLAnchorElement> | undefined;
            onWheel?: react.WheelEventHandler<HTMLAnchorElement> | undefined;
            onWheelCapture?: react.WheelEventHandler<HTMLAnchorElement> | undefined;
            onAnimationStart?: react.AnimationEventHandler<HTMLAnchorElement> | undefined;
            onAnimationStartCapture?: react.AnimationEventHandler<HTMLAnchorElement> | undefined;
            onAnimationEnd?: react.AnimationEventHandler<HTMLAnchorElement> | undefined;
            onAnimationEndCapture?: react.AnimationEventHandler<HTMLAnchorElement> | undefined;
            onAnimationIteration?: react.AnimationEventHandler<HTMLAnchorElement> | undefined;
            onAnimationIterationCapture?: react.AnimationEventHandler<HTMLAnchorElement> | undefined;
            onToggle?: react.ToggleEventHandler<HTMLAnchorElement> | undefined;
            onBeforeToggle?: react.ToggleEventHandler<HTMLAnchorElement> | undefined;
            onTransitionCancel?: react.TransitionEventHandler<HTMLAnchorElement> | undefined;
            onTransitionCancelCapture?: react.TransitionEventHandler<HTMLAnchorElement> | undefined;
            onTransitionEnd?: react.TransitionEventHandler<HTMLAnchorElement> | undefined;
            onTransitionEndCapture?: react.TransitionEventHandler<HTMLAnchorElement> | undefined;
            onTransitionRun?: react.TransitionEventHandler<HTMLAnchorElement> | undefined;
            onTransitionRunCapture?: react.TransitionEventHandler<HTMLAnchorElement> | undefined;
            onTransitionStart?: react.TransitionEventHandler<HTMLAnchorElement> | undefined;
            onTransitionStartCapture?: react.TransitionEventHandler<HTMLAnchorElement> | undefined;
        }>;
    };
}, {}, {
    isOpen?: (editorId: string) => boolean;
}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"date", {}, {}, {
    insert: {
        date: (args_0?: ({
            date?: string;
        } & {
            batchDirty?: boolean;
            hanging?: boolean;
            nextBlock?: boolean;
            removeEmpty?: _udecode_slate.QueryNodeOptions | boolean;
            select?: boolean;
        } & {
            id?: boolean | string;
            block?: boolean;
            empty?: boolean;
            match?: _udecode_slate.Predicate<_udecode_slate.NodeIn<_udecode_slate.Value>> | undefined;
            text?: boolean;
        } & _udecode_slate.QueryAt & _udecode_slate.QueryMode & _udecode_slate.QueryVoids) | undefined) => void;
    };
}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"mention", {
    insertSpaceAfterMention?: boolean;
} & _udecode_plate_combobox.TriggerComboboxPluginOptions, {}, {
    insert: {
        mention: (options: {
            search: string;
            value: any;
            key?: any;
        }) => void;
    };
}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"table", {
    _cellIndices: Record<string, {
        col: number;
        row: number;
    }>;
    selectedCells: _udecode_slate.TElement[] | null;
    selectedTables: _udecode_slate.TElement[] | null;
    disableExpandOnInsert?: boolean;
    disableMarginLeft?: boolean;
    disableMerge?: boolean;
    enableUnsetSingleColSize?: boolean;
    initialTableWidth?: number;
    minColumnWidth?: number;
}, {
    create: {
        table: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { colCount, header, rowCount, ...cellOptions }?: _udecode_plate_table.GetEmptyTableNodeOptions) => _udecode_plate_table.TTableElement>;
        tableCell: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { children, header, row }?: _udecode_plate_table.CreateCellOptions) => {
            children: _udecode_slate.Descendant[];
            type: string;
        }>;
        tableRow: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { colCount, ...cellOptions }?: _udecode_plate_table.GetEmptyRowNodeOptions) => {
            children: {
                children: _udecode_slate.Descendant[];
                type: string;
            }[];
            type: string;
        }>;
    };
    table: {
        getCellBorders: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { cellIndices, defaultBorder, element, }: {
            element: _udecode_plate_table.TTableCellElement;
            cellIndices?: _udecode_plate_table.CellIndices;
            defaultBorder?: _udecode_plate_table.BorderStyle;
        }) => _udecode_plate_table.BorderStylesDefault>;
        getCellSize: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { cellIndices, colSizes, element, rowSize, }: {
            element: _udecode_plate_table.TTableCellElement;
            cellIndices?: _udecode_plate_table.CellIndices;
            colSizes?: number[];
            rowSize?: number;
        }) => {
            minHeight: number | undefined;
            width: number;
        }>;
        getColSpan: (cellElem: _udecode_plate_table.TTableCellElement) => number;
        getRowSpan: (cellElem: _udecode_plate_table.TTableCellElement) => number;
        getCellChildren: (cell: _udecode_plate_table.TTableCellElement) => _udecode_slate.Descendant[];
    };
} & {
    create: {
        table: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { colCount, header, rowCount, ...cellOptions }?: _udecode_plate_table.GetEmptyTableNodeOptions) => _udecode_plate_table.TTableElement>;
        tableCell: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { children, header, row }?: _udecode_plate_table.CreateCellOptions) => {
            children: _udecode_slate.Descendant[];
            type: string;
        }>;
        tableRow: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { colCount, ...cellOptions }?: _udecode_plate_table.GetEmptyRowNodeOptions) => {
            children: {
                children: _udecode_slate.Descendant[];
                type: string;
            }[];
            type: string;
        }>;
    };
    table: {
        getCellBorders: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { cellIndices, defaultBorder, element, }: {
            element: _udecode_plate_table.TTableCellElement;
            cellIndices?: _udecode_plate_table.CellIndices;
            defaultBorder?: _udecode_plate_table.BorderStyle;
        }) => _udecode_plate_table.BorderStylesDefault>;
        getCellSize: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { cellIndices, colSizes, element, rowSize, }: {
            element: _udecode_plate_table.TTableCellElement;
            cellIndices?: _udecode_plate_table.CellIndices;
            colSizes?: number[];
            rowSize?: number;
        }) => {
            minHeight: number | undefined;
            width: number;
        }>;
        getColSpan: (cellElem: _udecode_plate_table.TTableCellElement) => number;
        getRowSpan: (cellElem: _udecode_plate_table.TTableCellElement) => number;
        getCellChildren: (cell: _udecode_plate_table.TTableCellElement) => _udecode_slate.Descendant[];
    };
}, {
    insert: {
        table: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { colCount, header, rowCount }?: _udecode_plate_table.GetEmptyTableNodeOptions, { select: shouldSelect, ...options }?: _udecode_slate.InsertNodesOptions) => void>;
        tableColumn: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, options?: {
            at?: _udecode_slate.Path;
            before?: boolean;
            fromCell?: _udecode_slate.Path;
            header?: boolean;
            select?: boolean;
        }) => void>;
        tableRow: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, options?: {
            at?: _udecode_slate.Path;
            before?: boolean;
            fromRow?: _udecode_slate.Path;
            header?: boolean;
            select?: boolean;
        }) => void>;
    };
    remove: {
        table: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
        tableColumn: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
        tableRow: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
    };
    table: {
        merge: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
        split: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
    };
} & {
    insert: {
        table: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { colCount, header, rowCount }?: _udecode_plate_table.GetEmptyTableNodeOptions, { select: shouldSelect, ...options }?: _udecode_slate.InsertNodesOptions) => void>;
        tableColumn: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, options?: {
            at?: _udecode_slate.Path;
            before?: boolean;
            fromCell?: _udecode_slate.Path;
            header?: boolean;
            select?: boolean;
        }) => void>;
        tableRow: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, options?: {
            at?: _udecode_slate.Path;
            before?: boolean;
            fromRow?: _udecode_slate.Path;
            header?: boolean;
            select?: boolean;
        }) => void>;
    };
    remove: {
        table: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
        tableColumn: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
        tableRow: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
    };
    table: {
        merge: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
        split: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
    };
}, {
    cellIndices?: (id: string) => _udecode_plate_table.CellIndices;
}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"toggle", {
    openIds?: Set<string>;
} & {
    toggleIndex?: ReturnType<(elements: _udecode_slate.Value) => Map<string, string[]>>;
}, {
    toggle: {
        toggleIds: (ids: string[], force?: boolean | null) => void;
    };
}, {}, {
    isOpen?: (toggleId: string) => boolean;
    someClosed?: (toggleIds: string[]) => boolean;
}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"toc", {
    isScroll: boolean;
    topOffset: number;
    queryHeading?: (editor: _udecode_plate_core.SlateEditor) => _udecode_plate_heading.Heading[];
}, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"img", {
    disableUploadInsert: true;
} & {
    disableEmbedInsert?: boolean;
    disableUploadInsert?: boolean;
    uploadImage?: (dataUrl: ArrayBuffer | string) => ArrayBuffer | Promise<ArrayBuffer | string> | string;
} & _udecode_plate_media.MediaPluginOptions, {}, {
    insert: {
        imageFromFiles: (files: FileList, options?: _udecode_slate.InsertNodesOptions | undefined) => void;
    };
}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"media_embed", _udecode_plate_media.MediaPluginOptions, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"video", {}, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"audio", {}, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"file", {}, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"caption", {
    focusEndPath: _udecode_slate.Path | null;
    focusStartPath: _udecode_slate.Path | null;
    plugins: _udecode_plate_core.WithRequiredKey[];
    visibleId: string | null;
}, {}, {}, {
    isVisible?: (elementId: string) => boolean;
}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"placeholder", _udecode_plate_media.MediaPlaceholderOptions & {
    disableEmptyPlaceholder: boolean;
    disableFileDrop: boolean;
    uploadConfig: _udecode_plate_media_react.UploadConfig;
    uploadingFiles: Record<string, File>;
    error?: _udecode_plate_media_react.UploadError | null;
    maxFileCount?: number;
    multiple?: boolean;
}, {
    placeholder: _udecode_plate_media_react.PlaceholderApi;
} & Record<"placeholder", {
    addUploadingFile: (id: string, file: File) => void;
    getUploadingFile: (id: string) => File;
    removeUploadingFile: (id: string) => void;
}>, {
    insert: {
        media: (files: FileList, options?: (Omit<_udecode_slate.InsertNodesOptions, "at"> & {
            at?: _udecode_slate.Path;
        }) | undefined) => any;
    };
}, {}>>, ...(_udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"column_group", {}, {}, {}, {}>> | _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"callout", {}, {}, {
    insert: {
        callout: (args_0?: ({
            batchDirty?: boolean;
            hanging?: boolean;
            nextBlock?: boolean;
            removeEmpty?: _udecode_slate.QueryNodeOptions | boolean;
            select?: boolean;
        } & {
            id?: boolean | string;
            block?: boolean;
            empty?: boolean;
            match?: _udecode_slate.Predicate<_udecode_slate.NodeIn<_udecode_slate.Value>> | undefined;
            text?: boolean;
        } & _udecode_slate.QueryAt & _udecode_slate.QueryMode & _udecode_slate.QueryVoids & {
            icon?: string;
            variant?: (string & {}) | _udecode_plate_callout.TCalloutElement["variant"];
        }) | undefined) => void;
    };
}, {}>> | _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"equation", {}, {}, {
    insert: {
        equation: (options?: _udecode_slate.InsertNodesOptions | undefined) => void;
    };
}, {}>> | _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"inline_equation", {}, {}, {
    insert: {
        inlineEquation: (texExpression?: string | undefined, options?: _udecode_slate.InsertNodesOptions | undefined) => void;
    };
}, {}>> | _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"align", {}, {}, {}, {}>> | _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"highlight", {}, {}, {}, {}>> | _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"indent", {
    indentMax?: number;
    offset?: number;
    unit?: string;
}, {}, {}, {}>> | _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"listStyleType", {
    listStyleTypes: {
        fire: {
            liComponent: (props: _udecode_plate_core.SlateRenderElementProps) => react_jsx_runtime.JSX.Element;
            markerComponent: (props: Omit<_udecode_plate_core.SlateRenderElementProps, "children">) => react_jsx_runtime.JSX.Element;
            type: string;
        };
        todo: {
            liComponent: typeof TodoLi;
            markerComponent: typeof TodoMarker;
            type: string;
        };
    };
} & {
    getSiblingIndentListOptions?: _udecode_plate_indent_list.GetSiblingIndentListOptions<_udecode_slate.TElement>;
    listStyleTypes?: Record<string, {
        type: string;
        isOrdered?: boolean;
        liComponent?: React.FC<_udecode_plate_core.SlateRenderElementProps>;
        markerComponent?: React.FC<Omit<_udecode_plate_core.SlateRenderElementProps, "children">>;
    }>;
    getListStyleType?: (element: HTMLElement) => _udecode_plate_indent_list.ListStyleType;
}, {}, {}, {}>> | _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"skip-mark", {
    query: {
        allow: string[];
    };
}, {}, {}, {}>> | _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"color", {}, {}, {}, {}>> | _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"backgroundColor", {}, {}, {}, {}>> | _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<any, {}, Record<any, {
    setMark: (fontSize: string) => void;
}>, {}, {}>> | _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"kbd", {}, {}, {}, {}>>)[], _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"lineHeight", {}, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"discussion", {
    currentUserId: string;
    discussions: TDiscussion[];
    users: Record<string, {
        id: string;
        avatarUrl: string;
        name: string;
        hue?: number;
    }>;
}, {}, {}, {
    currentUser: () => {
        id: string;
        avatarUrl: string;
        name: string;
        hue?: number;
    };
    user: (id: string) => {
        id: string;
        avatarUrl: string;
        name: string;
        hue?: number;
    };
}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"comment", {
    activeId: string | null;
    commentingBlock: _udecode_slate.Path | null;
    hotkey: string[];
    hoverId: string | null;
    uniquePathMap: Map<string, _udecode_slate.Path>;
}, {
    comment: {
        has: (options: {
            id: string;
        }) => boolean;
        node: (options?: _udecode_slate.EditorNodesOptions & {
            id?: string;
            isDraft?: boolean;
        }) => _udecode_slate.NodeEntry<_udecode_plate_comments.TCommentText> | undefined;
        nodeId: (leaf: _udecode_plate_comments.TCommentText) => string | undefined;
        nodes: (options?: _udecode_slate.EditorNodesOptions & {
            id?: string;
            isDraft?: boolean;
        }) => _udecode_slate.NodeEntry<_udecode_plate_comments.TCommentText>[];
    };
}, {
    comment: {
        removeMark: () => void;
        setDraft: (options?: _udecode_slate.SetNodesOptions) => void;
        unsetMark: (options: {
            id: string;
        }) => void;
    };
}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"suggestion", {
    currentUserId: string | null;
    isSuggesting: boolean;
} & {
    activeId: string | null;
    hoverId: string | null;
    uniquePathMap: Map<string, _udecode_slate.Path>;
}, {
    suggestion: {
        dataList: (node: _udecode_plate_suggestion.TSuggestionText) => _udecode_plate_suggestion.TInlineSuggestionData[];
        isBlockSuggestion: (node: _udecode_slate.TElement) => node is _udecode_plate_suggestion.TSuggestionElement;
        node: (options?: _udecode_slate.EditorNodesOptions & {
            id?: string;
            isText?: boolean;
        }) => _udecode_slate.NodeEntry<_udecode_plate_suggestion.TSuggestionElement | _udecode_plate_suggestion.TSuggestionText> | undefined;
        nodeId: (node: _udecode_slate.TElement | _udecode_plate_suggestion.TSuggestionText) => string | undefined;
        nodes: (options?: _udecode_slate.EditorNodesOptions) => _udecode_slate.NodeEntry<_udecode_slate.TElement | _udecode_plate_suggestion.TSuggestionText>[];
        suggestionData: (node: _udecode_slate.TElement | _udecode_plate_suggestion.TSuggestionText) => _udecode_plate_suggestion.TInlineSuggestionData | _udecode_plate_suggestion.TSuggestionElement["suggestion"] | undefined;
        withoutSuggestions: (fn: () => void) => void;
    };
}, {}, {}>>];
declare const editorPlugins: any[];

declare const equationPlugins: (_udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"equation", {}, {}, {
    insert: {
        equation: (options?: _udecode_slate.InsertNodesOptions | undefined) => void;
    };
}, {}>> | _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"inline_equation", {}, {}, {
    insert: {
        inlineEquation: (texExpression?: string | undefined, options?: _udecode_slate.InsertNodesOptions | undefined) => void;
    };
}, {}>>)[];

declare const exitBreakPlugin: _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"exitBreak", {
    rules?: node_modules__udecode_plate_break_dist_BaseSoftBreakPlugin_CeLtcSTo.E[];
}, {}, {}, {}>>;

declare function AILeaf(props: PlateTextProps): react_jsx_runtime.JSX.Element;

declare function BlockquoteElement(props: PlateElementProps): react_jsx_runtime.JSX.Element;

declare function CalloutElement({ attributes, children, className, ...props }: react.ComponentProps<typeof PlateElement>): react_jsx_runtime.JSX.Element;

declare function CodeBlockElement(props: PlateElementProps<TCodeBlockElement>): react_jsx_runtime.JSX.Element;

declare function CodeLeaf(props: PlateLeafProps): react_jsx_runtime.JSX.Element;

declare function CodeLineElement(props: PlateElementProps): react_jsx_runtime.JSX.Element;

declare function CodeSyntaxLeaf(props: PlateLeafProps): react_jsx_runtime.JSX.Element;

declare function ColumnGroupElement(props: PlateElementProps): react_jsx_runtime.JSX.Element;
declare function ColumnFloatingToolbar({ children }: react.PropsWithChildren): react_jsx_runtime.JSX.Element;

declare function CommentLeaf(props: PlateLeafProps<TCommentText>): react_jsx_runtime.JSX.Element;

declare function DateElement(props: PlateElementProps<TDateElement>): react_jsx_runtime.JSX.Element;

declare function EmojiInputElement(props: PlateElementProps): react_jsx_runtime.JSX.Element;

declare function EquationElement(props: PlateElementProps<TEquationElement>): react_jsx_runtime.JSX.Element;

declare function ExcalidrawElement(props: PlateElementProps<TExcalidrawElement>): react_jsx_runtime.JSX.Element;

declare function HighlightLeaf(props: PlateLeafProps): react_jsx_runtime.JSX.Element;

declare function HrElement(props: PlateElementProps): react_jsx_runtime.JSX.Element;

declare function InlineEquationElement(props: PlateElementProps<TEquationElement>): react_jsx_runtime.JSX.Element;

declare function KbdLeaf(props: PlateLeafProps): react_jsx_runtime.JSX.Element;

declare function LinkElement(props: PlateElementProps<TLinkElement>): react_jsx_runtime.JSX.Element;

declare function MentionElement(props: PlateElementProps<TMentionElement> & {
    prefix?: string;
}): react_jsx_runtime.JSX.Element;

declare function MentionInputElement(props: PlateElementProps<TMentionInputElement>): react_jsx_runtime.JSX.Element;
declare const MENTIONABLES: {
    key: string;
    text: string;
}[];

declare function ParagraphElement(props: PlateElementProps): react_jsx_runtime.JSX.Element;

type Group$1 = {
    group: string;
    items: Item$1[];
};
interface Item$1 {
    icon: react.ReactNode;
    value: string;
    onSelect: (editor: PlateEditor, value: string) => void;
    className?: string;
    focusEditor?: boolean;
    keywords?: string[];
    label?: string;
}
declare const groups$1: Group$1[];
declare function SlashInputElement(props: PlateElementProps<TSlashInputElement>): react_jsx_runtime.JSX.Element;

declare function SuggestionLeaf(props: PlateLeafProps<TSuggestionText>): react_jsx_runtime.JSX.Element;

declare function TableCellElement({ isHeader, ...props }: PlateElementProps<TTableCellElement> & {
    isHeader?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function TableCellHeaderElement(props: react.ComponentProps<typeof TableCellElement>): react_jsx_runtime.JSX.Element;

declare function TableRowElement(props: PlateElementProps<TTableRowElement>): react_jsx_runtime.JSX.Element;

declare function TocElement(props: PlateElementProps): react_jsx_runtime.JSX.Element;

declare function ToggleElement(props: PlateElementProps): react_jsx_runtime.JSX.Element;

declare const viewComponents: {
    [CodeLinePlugin.key]: typeof CodeLineElement;
    audio: react.ForwardRefExoticComponent<Omit<_udecode_plate_core_react.PlateElementProps<_udecode_plate_media.TAudioElement>, "ref"> & react.RefAttributes<unknown>>;
    blockquote: typeof BlockquoteElement;
    bold: react.ForwardRefExoticComponent<Omit<Omit<_udecode_plate_core_react.PlateLeafProps<_udecode_slate.TText, _udecode_plate_core.AnyPluginConfig>, keyof {
        className?: string;
        style?: react.CSSProperties;
    }> & _udecode_plate_core.BasePluginContext<_udecode_plate_core.AnyPluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.AnyPluginConfig>;
    } & {
        ref?: any;
    } & {
        attributes: (Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, "ref"> | Omit<react.DetailedHTMLProps<react.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, "ref"> | Omit<react.DetailedHTMLProps<react.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MenuHTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, "ref"> | Omit<react.DetailedHTMLProps<react.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, "ref"> | Omit<react.DetailedHTMLProps<react.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref">) & _udecode_utils.UnknownObject;
        as?: keyof HTMLElementTagNameMap | undefined;
        className?: string;
        style?: react.CSSProperties;
    }, "ref"> & react.RefAttributes<unknown>>;
    callout: typeof CalloutElement;
    code_block: typeof CodeBlockElement;
    code: typeof CodeLeaf;
    code_syntax: typeof CodeSyntaxLeaf;
    column: react.ForwardRefExoticComponent<Omit<_udecode_plate_core_react.PlateElementProps<_udecode_plate_layout.TColumnElement>, "ref"> & react.RefAttributes<unknown>>;
    column_group: typeof ColumnGroupElement;
    comment: typeof CommentLeaf;
    date: typeof DateElement;
    equation: typeof EquationElement;
    excalidraw: typeof ExcalidrawElement;
    file: react.ForwardRefExoticComponent<Omit<_udecode_plate_core_react.PlateElementProps<_udecode_plate_media.TFileElement>, "ref"> & react.RefAttributes<unknown>>;
    h1: react.ForwardRefExoticComponent<Omit<_udecode_plate_core.BasePluginContext<_udecode_plate_core.PluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.PluginConfig>;
    } & {
        ref?: any;
    } & _udecode_plate_core.RenderElementProps<_udecode_slate.TElement> & {
        path: _udecode_slate.Path;
    } & {
        className?: string;
        style?: react.CSSProperties;
    } & class_variance_authority.VariantProps<(props?: ({
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string>, "ref"> & react.RefAttributes<unknown>>;
    h2: react.ForwardRefExoticComponent<Omit<_udecode_plate_core.BasePluginContext<_udecode_plate_core.PluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.PluginConfig>;
    } & {
        ref?: any;
    } & _udecode_plate_core.RenderElementProps<_udecode_slate.TElement> & {
        path: _udecode_slate.Path;
    } & {
        className?: string;
        style?: react.CSSProperties;
    } & class_variance_authority.VariantProps<(props?: ({
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string>, "ref"> & react.RefAttributes<unknown>>;
    h3: react.ForwardRefExoticComponent<Omit<_udecode_plate_core.BasePluginContext<_udecode_plate_core.PluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.PluginConfig>;
    } & {
        ref?: any;
    } & _udecode_plate_core.RenderElementProps<_udecode_slate.TElement> & {
        path: _udecode_slate.Path;
    } & {
        className?: string;
        style?: react.CSSProperties;
    } & class_variance_authority.VariantProps<(props?: ({
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string>, "ref"> & react.RefAttributes<unknown>>;
    h4: react.ForwardRefExoticComponent<Omit<_udecode_plate_core.BasePluginContext<_udecode_plate_core.PluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.PluginConfig>;
    } & {
        ref?: any;
    } & _udecode_plate_core.RenderElementProps<_udecode_slate.TElement> & {
        path: _udecode_slate.Path;
    } & {
        className?: string;
        style?: react.CSSProperties;
    } & class_variance_authority.VariantProps<(props?: ({
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string>, "ref"> & react.RefAttributes<unknown>>;
    h5: react.ForwardRefExoticComponent<Omit<_udecode_plate_core.BasePluginContext<_udecode_plate_core.PluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.PluginConfig>;
    } & {
        ref?: any;
    } & _udecode_plate_core.RenderElementProps<_udecode_slate.TElement> & {
        path: _udecode_slate.Path;
    } & {
        className?: string;
        style?: react.CSSProperties;
    } & class_variance_authority.VariantProps<(props?: ({
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string>, "ref"> & react.RefAttributes<unknown>>;
    h6: react.ForwardRefExoticComponent<Omit<_udecode_plate_core.BasePluginContext<_udecode_plate_core.PluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.PluginConfig>;
    } & {
        ref?: any;
    } & _udecode_plate_core.RenderElementProps<_udecode_slate.TElement> & {
        path: _udecode_slate.Path;
    } & {
        className?: string;
        style?: react.CSSProperties;
    } & class_variance_authority.VariantProps<(props?: ({
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string>, "ref"> & react.RefAttributes<unknown>>;
    highlight: typeof HighlightLeaf;
    hr: typeof HrElement;
    img: react.ForwardRefExoticComponent<Omit<_udecode_plate_core_react.PlateElementProps<_udecode_plate_media.TImageElement>, "ref"> & react.RefAttributes<unknown>>;
    inline_equation: typeof InlineEquationElement;
    italic: react.ForwardRefExoticComponent<Omit<Omit<_udecode_plate_core_react.PlateLeafProps<_udecode_slate.TText, _udecode_plate_core.AnyPluginConfig>, keyof {
        className?: string;
        style?: react.CSSProperties;
    }> & _udecode_plate_core.BasePluginContext<_udecode_plate_core.AnyPluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.AnyPluginConfig>;
    } & {
        ref?: any;
    } & {
        attributes: (Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, "ref"> | Omit<react.DetailedHTMLProps<react.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, "ref"> | Omit<react.DetailedHTMLProps<react.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MenuHTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, "ref"> | Omit<react.DetailedHTMLProps<react.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, "ref"> | Omit<react.DetailedHTMLProps<react.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref">) & _udecode_utils.UnknownObject;
        as?: keyof HTMLElementTagNameMap | undefined;
        className?: string;
        style?: react.CSSProperties;
    }, "ref"> & react.RefAttributes<unknown>>;
    kbd: typeof KbdLeaf;
    a: typeof LinkElement;
    media_embed: react.ForwardRefExoticComponent<Omit<_udecode_plate_core_react.PlateElementProps<_udecode_plate_media.TMediaEmbedElement>, "ref"> & react.RefAttributes<unknown>>;
    mention: typeof MentionElement;
    p: typeof ParagraphElement;
    placeholder: react.ForwardRefExoticComponent<Omit<_udecode_plate_core_react.PlateElementProps<_udecode_plate_media.TPlaceholderElement>, "ref"> & react.RefAttributes<unknown>>;
    strikethrough: react.ForwardRefExoticComponent<Omit<Omit<_udecode_plate_core_react.PlateLeafProps<_udecode_slate.TText, _udecode_plate_core.AnyPluginConfig>, keyof {
        className?: string;
        style?: react.CSSProperties;
    }> & _udecode_plate_core.BasePluginContext<_udecode_plate_core.AnyPluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.AnyPluginConfig>;
    } & {
        ref?: any;
    } & {
        attributes: (Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, "ref"> | Omit<react.DetailedHTMLProps<react.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, "ref"> | Omit<react.DetailedHTMLProps<react.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MenuHTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, "ref"> | Omit<react.DetailedHTMLProps<react.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, "ref"> | Omit<react.DetailedHTMLProps<react.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref">) & _udecode_utils.UnknownObject;
        as?: keyof HTMLElementTagNameMap | undefined;
        className?: string;
        style?: react.CSSProperties;
    }, "ref"> & react.RefAttributes<unknown>>;
    subscript: react.ForwardRefExoticComponent<Omit<Omit<_udecode_plate_core_react.PlateLeafProps<_udecode_slate.TText, _udecode_plate_core.AnyPluginConfig>, keyof {
        className?: string;
        style?: react.CSSProperties;
    }> & _udecode_plate_core.BasePluginContext<_udecode_plate_core.AnyPluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.AnyPluginConfig>;
    } & {
        ref?: any;
    } & {
        attributes: (Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, "ref"> | Omit<react.DetailedHTMLProps<react.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, "ref"> | Omit<react.DetailedHTMLProps<react.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MenuHTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, "ref"> | Omit<react.DetailedHTMLProps<react.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, "ref"> | Omit<react.DetailedHTMLProps<react.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref">) & _udecode_utils.UnknownObject;
        as?: keyof HTMLElementTagNameMap | undefined;
        className?: string;
        style?: react.CSSProperties;
    }, "ref"> & react.RefAttributes<unknown>>;
    suggestion: typeof SuggestionLeaf;
    superscript: react.ForwardRefExoticComponent<Omit<Omit<_udecode_plate_core_react.PlateLeafProps<_udecode_slate.TText, _udecode_plate_core.AnyPluginConfig>, keyof {
        className?: string;
        style?: react.CSSProperties;
    }> & _udecode_plate_core.BasePluginContext<_udecode_plate_core.AnyPluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.AnyPluginConfig>;
    } & {
        ref?: any;
    } & {
        attributes: (Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, "ref"> | Omit<react.DetailedHTMLProps<react.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, "ref"> | Omit<react.DetailedHTMLProps<react.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MenuHTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, "ref"> | Omit<react.DetailedHTMLProps<react.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, "ref"> | Omit<react.DetailedHTMLProps<react.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref">) & _udecode_utils.UnknownObject;
        as?: keyof HTMLElementTagNameMap | undefined;
        className?: string;
        style?: react.CSSProperties;
    }, "ref"> & react.RefAttributes<unknown>>;
    th: typeof TableCellHeaderElement;
    td: typeof TableCellElement;
    table: react.ForwardRefExoticComponent<Omit<_udecode_plate_core_react.PlateElementProps<_udecode_plate_table.TTableElement>, "ref"> & react.RefAttributes<unknown>>;
    tr: typeof TableRowElement;
    toc: typeof TocElement;
    toggle: typeof ToggleElement;
    underline: react.ForwardRefExoticComponent<Omit<Omit<_udecode_plate_core_react.PlateLeafProps<_udecode_slate.TText, _udecode_plate_core.AnyPluginConfig>, keyof {
        className?: string;
        style?: react.CSSProperties;
    }> & _udecode_plate_core.BasePluginContext<_udecode_plate_core.AnyPluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.AnyPluginConfig>;
    } & {
        ref?: any;
    } & {
        attributes: (Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, "ref"> | Omit<react.DetailedHTMLProps<react.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, "ref"> | Omit<react.DetailedHTMLProps<react.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MenuHTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, "ref"> | Omit<react.DetailedHTMLProps<react.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, "ref"> | Omit<react.DetailedHTMLProps<react.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref">) & _udecode_utils.UnknownObject;
        as?: keyof HTMLElementTagNameMap | undefined;
        className?: string;
        style?: react.CSSProperties;
    }, "ref"> & react.RefAttributes<unknown>>;
    video: react.ForwardRefExoticComponent<Omit<_udecode_plate_core_react.PlateElementProps<_udecode_plate_media.TVideoElement>, "ref"> & react.RefAttributes<unknown>>;
};
declare const editorComponents: {
    [x: number]: typeof CodeLineElement | typeof AILeaf;
    emoji_input: typeof EmojiInputElement;
    mention_input: typeof MentionInputElement;
    slash_input: typeof SlashInputElement;
    audio: react.ForwardRefExoticComponent<Omit<_udecode_plate_core_react.PlateElementProps<_udecode_plate_media.TAudioElement>, "ref"> & react.RefAttributes<unknown>>;
    blockquote: typeof BlockquoteElement;
    bold: react.ForwardRefExoticComponent<Omit<Omit<_udecode_plate_core_react.PlateLeafProps<_udecode_slate.TText, _udecode_plate_core.AnyPluginConfig>, keyof {
        className?: string;
        style?: react.CSSProperties;
    }> & _udecode_plate_core.BasePluginContext<_udecode_plate_core.AnyPluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.AnyPluginConfig>;
    } & {
        ref?: any;
    } & {
        attributes: (Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, "ref"> | Omit<react.DetailedHTMLProps<react.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, "ref"> | Omit<react.DetailedHTMLProps<react.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MenuHTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, "ref"> | Omit<react.DetailedHTMLProps<react.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, "ref"> | Omit<react.DetailedHTMLProps<react.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref">) & _udecode_utils.UnknownObject;
        as?: keyof HTMLElementTagNameMap | undefined;
        className?: string;
        style?: react.CSSProperties;
    }, "ref"> & react.RefAttributes<unknown>>;
    callout: typeof CalloutElement;
    code_block: typeof CodeBlockElement;
    code: typeof CodeLeaf;
    code_syntax: typeof CodeSyntaxLeaf;
    column: react.ForwardRefExoticComponent<Omit<_udecode_plate_core_react.PlateElementProps<_udecode_plate_layout.TColumnElement>, "ref"> & react.RefAttributes<unknown>>;
    column_group: typeof ColumnGroupElement;
    comment: typeof CommentLeaf;
    date: typeof DateElement;
    equation: typeof EquationElement;
    excalidraw: typeof ExcalidrawElement;
    file: react.ForwardRefExoticComponent<Omit<_udecode_plate_core_react.PlateElementProps<_udecode_plate_media.TFileElement>, "ref"> & react.RefAttributes<unknown>>;
    h1: react.ForwardRefExoticComponent<Omit<_udecode_plate_core.BasePluginContext<_udecode_plate_core.PluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.PluginConfig>;
    } & {
        ref?: any;
    } & _udecode_plate_core.RenderElementProps<_udecode_slate.TElement> & {
        path: _udecode_slate.Path;
    } & {
        className?: string;
        style?: react.CSSProperties;
    } & class_variance_authority.VariantProps<(props?: ({
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string>, "ref"> & react.RefAttributes<unknown>>;
    h2: react.ForwardRefExoticComponent<Omit<_udecode_plate_core.BasePluginContext<_udecode_plate_core.PluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.PluginConfig>;
    } & {
        ref?: any;
    } & _udecode_plate_core.RenderElementProps<_udecode_slate.TElement> & {
        path: _udecode_slate.Path;
    } & {
        className?: string;
        style?: react.CSSProperties;
    } & class_variance_authority.VariantProps<(props?: ({
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string>, "ref"> & react.RefAttributes<unknown>>;
    h3: react.ForwardRefExoticComponent<Omit<_udecode_plate_core.BasePluginContext<_udecode_plate_core.PluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.PluginConfig>;
    } & {
        ref?: any;
    } & _udecode_plate_core.RenderElementProps<_udecode_slate.TElement> & {
        path: _udecode_slate.Path;
    } & {
        className?: string;
        style?: react.CSSProperties;
    } & class_variance_authority.VariantProps<(props?: ({
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string>, "ref"> & react.RefAttributes<unknown>>;
    h4: react.ForwardRefExoticComponent<Omit<_udecode_plate_core.BasePluginContext<_udecode_plate_core.PluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.PluginConfig>;
    } & {
        ref?: any;
    } & _udecode_plate_core.RenderElementProps<_udecode_slate.TElement> & {
        path: _udecode_slate.Path;
    } & {
        className?: string;
        style?: react.CSSProperties;
    } & class_variance_authority.VariantProps<(props?: ({
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string>, "ref"> & react.RefAttributes<unknown>>;
    h5: react.ForwardRefExoticComponent<Omit<_udecode_plate_core.BasePluginContext<_udecode_plate_core.PluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.PluginConfig>;
    } & {
        ref?: any;
    } & _udecode_plate_core.RenderElementProps<_udecode_slate.TElement> & {
        path: _udecode_slate.Path;
    } & {
        className?: string;
        style?: react.CSSProperties;
    } & class_variance_authority.VariantProps<(props?: ({
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string>, "ref"> & react.RefAttributes<unknown>>;
    h6: react.ForwardRefExoticComponent<Omit<_udecode_plate_core.BasePluginContext<_udecode_plate_core.PluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.PluginConfig>;
    } & {
        ref?: any;
    } & _udecode_plate_core.RenderElementProps<_udecode_slate.TElement> & {
        path: _udecode_slate.Path;
    } & {
        className?: string;
        style?: react.CSSProperties;
    } & class_variance_authority.VariantProps<(props?: ({
        variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string>, "ref"> & react.RefAttributes<unknown>>;
    highlight: typeof HighlightLeaf;
    hr: typeof HrElement;
    img: react.ForwardRefExoticComponent<Omit<_udecode_plate_core_react.PlateElementProps<_udecode_plate_media.TImageElement>, "ref"> & react.RefAttributes<unknown>>;
    inline_equation: typeof InlineEquationElement;
    italic: react.ForwardRefExoticComponent<Omit<Omit<_udecode_plate_core_react.PlateLeafProps<_udecode_slate.TText, _udecode_plate_core.AnyPluginConfig>, keyof {
        className?: string;
        style?: react.CSSProperties;
    }> & _udecode_plate_core.BasePluginContext<_udecode_plate_core.AnyPluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.AnyPluginConfig>;
    } & {
        ref?: any;
    } & {
        attributes: (Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, "ref"> | Omit<react.DetailedHTMLProps<react.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, "ref"> | Omit<react.DetailedHTMLProps<react.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MenuHTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, "ref"> | Omit<react.DetailedHTMLProps<react.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, "ref"> | Omit<react.DetailedHTMLProps<react.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref">) & _udecode_utils.UnknownObject;
        as?: keyof HTMLElementTagNameMap | undefined;
        className?: string;
        style?: react.CSSProperties;
    }, "ref"> & react.RefAttributes<unknown>>;
    kbd: typeof KbdLeaf;
    a: typeof LinkElement;
    media_embed: react.ForwardRefExoticComponent<Omit<_udecode_plate_core_react.PlateElementProps<_udecode_plate_media.TMediaEmbedElement>, "ref"> & react.RefAttributes<unknown>>;
    mention: typeof MentionElement;
    p: typeof ParagraphElement;
    placeholder: react.ForwardRefExoticComponent<Omit<_udecode_plate_core_react.PlateElementProps<_udecode_plate_media.TPlaceholderElement>, "ref"> & react.RefAttributes<unknown>>;
    strikethrough: react.ForwardRefExoticComponent<Omit<Omit<_udecode_plate_core_react.PlateLeafProps<_udecode_slate.TText, _udecode_plate_core.AnyPluginConfig>, keyof {
        className?: string;
        style?: react.CSSProperties;
    }> & _udecode_plate_core.BasePluginContext<_udecode_plate_core.AnyPluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.AnyPluginConfig>;
    } & {
        ref?: any;
    } & {
        attributes: (Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, "ref"> | Omit<react.DetailedHTMLProps<react.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, "ref"> | Omit<react.DetailedHTMLProps<react.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MenuHTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, "ref"> | Omit<react.DetailedHTMLProps<react.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, "ref"> | Omit<react.DetailedHTMLProps<react.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref">) & _udecode_utils.UnknownObject;
        as?: keyof HTMLElementTagNameMap | undefined;
        className?: string;
        style?: react.CSSProperties;
    }, "ref"> & react.RefAttributes<unknown>>;
    subscript: react.ForwardRefExoticComponent<Omit<Omit<_udecode_plate_core_react.PlateLeafProps<_udecode_slate.TText, _udecode_plate_core.AnyPluginConfig>, keyof {
        className?: string;
        style?: react.CSSProperties;
    }> & _udecode_plate_core.BasePluginContext<_udecode_plate_core.AnyPluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.AnyPluginConfig>;
    } & {
        ref?: any;
    } & {
        attributes: (Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, "ref"> | Omit<react.DetailedHTMLProps<react.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, "ref"> | Omit<react.DetailedHTMLProps<react.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MenuHTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, "ref"> | Omit<react.DetailedHTMLProps<react.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, "ref"> | Omit<react.DetailedHTMLProps<react.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref">) & _udecode_utils.UnknownObject;
        as?: keyof HTMLElementTagNameMap | undefined;
        className?: string;
        style?: react.CSSProperties;
    }, "ref"> & react.RefAttributes<unknown>>;
    suggestion: typeof SuggestionLeaf;
    superscript: react.ForwardRefExoticComponent<Omit<Omit<_udecode_plate_core_react.PlateLeafProps<_udecode_slate.TText, _udecode_plate_core.AnyPluginConfig>, keyof {
        className?: string;
        style?: react.CSSProperties;
    }> & _udecode_plate_core.BasePluginContext<_udecode_plate_core.AnyPluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.AnyPluginConfig>;
    } & {
        ref?: any;
    } & {
        attributes: (Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, "ref"> | Omit<react.DetailedHTMLProps<react.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, "ref"> | Omit<react.DetailedHTMLProps<react.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MenuHTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, "ref"> | Omit<react.DetailedHTMLProps<react.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, "ref"> | Omit<react.DetailedHTMLProps<react.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref">) & _udecode_utils.UnknownObject;
        as?: keyof HTMLElementTagNameMap | undefined;
        className?: string;
        style?: react.CSSProperties;
    }, "ref"> & react.RefAttributes<unknown>>;
    th: typeof TableCellHeaderElement;
    td: typeof TableCellElement;
    table: react.ForwardRefExoticComponent<Omit<_udecode_plate_core_react.PlateElementProps<_udecode_plate_table.TTableElement>, "ref"> & react.RefAttributes<unknown>>;
    tr: typeof TableRowElement;
    toc: typeof TocElement;
    toggle: typeof ToggleElement;
    underline: react.ForwardRefExoticComponent<Omit<Omit<_udecode_plate_core_react.PlateLeafProps<_udecode_slate.TText, _udecode_plate_core.AnyPluginConfig>, keyof {
        className?: string;
        style?: react.CSSProperties;
    }> & _udecode_plate_core.BasePluginContext<_udecode_plate_core.AnyPluginConfig> & {
        editor: _udecode_plate_core_react.PlateEditor;
        plugin: _udecode_plate_core_react.EditorPlatePlugin<_udecode_plate_core.AnyPluginConfig>;
    } & {
        ref?: any;
    } & {
        attributes: (Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, "ref"> | Omit<react.DetailedHTMLProps<react.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "ref"> | Omit<react.DetailedHTMLProps<react.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, "ref"> | Omit<react.DetailedHTMLProps<react.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, "ref"> | Omit<react.DetailedHTMLProps<react.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, "ref"> | Omit<react.DetailedHTMLProps<react.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, "ref"> | Omit<react.DetailedHTMLProps<react.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, "ref"> | Omit<react.DetailedHTMLProps<react.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, "ref"> | Omit<react.DetailedHTMLProps<react.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MenuHTMLAttributes<HTMLElement>, HTMLElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, "ref"> | Omit<react.DetailedHTMLProps<react.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, "ref"> | Omit<react.DetailedHTMLProps<react.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> | Omit<react.DetailedHTMLProps<react.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, "ref"> | Omit<react.DetailedHTMLProps<react.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, "ref"> | Omit<react.DetailedHTMLProps<react.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, "ref"> | Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref">) & _udecode_utils.UnknownObject;
        as?: keyof HTMLElementTagNameMap | undefined;
        className?: string;
        style?: react.CSSProperties;
    }, "ref"> & react.RefAttributes<unknown>>;
    video: react.ForwardRefExoticComponent<Omit<_udecode_plate_core_react.PlateElementProps<_udecode_plate_media.TVideoElement>, "ref"> & react.RefAttributes<unknown>>;
};
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
} & Omit<CreatePlateEditorOptions, "plugins">, deps?: any[]) => any;

declare const FixedToolbarPlugin: ({ allows, classes }: {
    allows: PLUGIN_KEY[];
    classes?: {
        className?: string;
        groupClass?: string;
    };
}) => _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"fixed-toolbar", {}, {}, {}, {}>>;

declare const FloatingToolbarPlugin: ({ allows, classes }: {
    allows: PLUGIN_KEY[];
    classes?: {
        className?: string;
        groupClass?: string;
    };
}) => _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"floating-toolbar", {}, {}, {}, {}>>;

declare function TodoMarker(props: Omit<SlateRenderElementProps, 'children'>): react_jsx_runtime.JSX.Element;
declare function TodoLi(props: SlateRenderElementProps): react_jsx_runtime.JSX.Element;

declare const indentListPlugins: (_udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"indent", {
    indentMax?: number;
    offset?: number;
    unit?: string;
}, {}, {}, {}>> | _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"listStyleType", {
    listStyleTypes: {
        fire: {
            liComponent: (props: _udecode_plate_core.SlateRenderElementProps) => react_jsx_runtime.JSX.Element;
            markerComponent: (props: Omit<_udecode_plate_core.SlateRenderElementProps, "children">) => react_jsx_runtime.JSX.Element;
            type: string;
        };
        todo: {
            liComponent: typeof TodoLi;
            markerComponent: typeof TodoMarker;
            type: string;
        };
    };
} & {
    getSiblingIndentListOptions?: _udecode_plate_indent_list.GetSiblingIndentListOptions<_udecode_slate.TElement>;
    listStyleTypes?: Record<string, {
        type: string;
        isOrdered?: boolean;
        liComponent?: React.FC<_udecode_plate_core.SlateRenderElementProps>;
        markerComponent?: React.FC<Omit<_udecode_plate_core.SlateRenderElementProps, "children">>;
    }>;
    getListStyleType?: (element: HTMLElement) => _udecode_plate_indent_list.ListStyleType;
}, {}, {}, {}>>)[];

declare const lineHeightPlugin: _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"lineHeight", {}, {}, {}, {}>>;

declare const linkPlugin: _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"a", {
    allowedSchemes?: string[];
    dangerouslySkipSanitization?: boolean;
    defaultLinkAttributes?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
    forceSubmit?: boolean;
    keepSelectedTextOnPaste?: boolean;
    rangeBeforeOptions?: _udecode_slate.EditorBeforeOptions;
    triggerFloatingLinkHotkeys?: string[] | string;
    getLinkUrl?: (prevUrl: string | null) => Promise<string | null>;
    getUrlHref?: (url: string) => string | undefined;
    isUrl?: (text: string) => boolean;
    transformInput?: (url: string) => string | undefined;
} & {
    isEditing: boolean;
    mode: _udecode_plate_link_react.FloatingLinkMode;
    mouseDown: boolean;
    newTab: boolean;
    openEditorId: string | null;
    text: string;
    updated: boolean;
    url: string;
    triggerFloatingLinkHotkeys?: string;
}, {
    floatingLink: {
        hide: () => void;
        reset: () => void;
        show: (mode: _udecode_plate_link_react.FloatingLinkMode, editorId: string) => void;
    };
    link: {
        getAttributes: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, link: _udecode_plate_link.TLinkElement) => {
            download?: any;
            href?: string | undefined;
            hrefLang?: string | undefined;
            media?: string | undefined;
            ping?: string | undefined;
            target?: react.HTMLAttributeAnchorTarget | undefined;
            type?: string | undefined;
            referrerPolicy?: react.HTMLAttributeReferrerPolicy | undefined;
            defaultChecked?: boolean | undefined;
            defaultValue?: string | number | readonly string[] | undefined;
            suppressContentEditableWarning?: boolean | undefined;
            suppressHydrationWarning?: boolean | undefined;
            accessKey?: string | undefined;
            autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {});
            autoFocus?: boolean | undefined;
            className?: string | undefined;
            contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
            contextMenu?: string | undefined;
            dir?: string | undefined;
            draggable?: (boolean | "true" | "false") | undefined;
            enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined;
            hidden?: boolean | undefined;
            id?: string | undefined;
            lang?: string | undefined;
            nonce?: string | undefined;
            slot?: string | undefined;
            spellCheck?: (boolean | "true" | "false") | undefined;
            style?: react.CSSProperties | undefined;
            tabIndex?: number | undefined;
            title?: string | undefined;
            translate?: "yes" | "no" | undefined;
            radioGroup?: string | undefined;
            role?: react.AriaRole | undefined;
            about?: string | undefined;
            content?: string | undefined;
            datatype?: string | undefined;
            inlist?: any;
            prefix?: string | undefined;
            property?: string | undefined;
            rel?: string | undefined;
            resource?: string | undefined;
            rev?: string | undefined;
            typeof?: string | undefined;
            vocab?: string | undefined;
            autoCorrect?: string | undefined;
            autoSave?: string | undefined;
            color?: string | undefined;
            itemProp?: string | undefined;
            itemScope?: boolean | undefined;
            itemType?: string | undefined;
            itemID?: string | undefined;
            itemRef?: string | undefined;
            results?: number | undefined;
            security?: string | undefined;
            unselectable?: "on" | "off" | undefined;
            popover?: "" | "auto" | "manual" | undefined;
            popoverTargetAction?: "toggle" | "show" | "hide" | undefined;
            popoverTarget?: string | undefined;
            inert?: boolean | undefined;
            inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
            is?: string | undefined;
            exportparts?: string | undefined;
            part?: string | undefined;
            "aria-activedescendant"?: string | undefined;
            "aria-atomic"?: (boolean | "true" | "false") | undefined;
            "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
            "aria-braillelabel"?: string | undefined;
            "aria-brailleroledescription"?: string | undefined;
            "aria-busy"?: (boolean | "true" | "false") | undefined;
            "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
            "aria-colcount"?: number | undefined;
            "aria-colindex"?: number | undefined;
            "aria-colindextext"?: string | undefined;
            "aria-colspan"?: number | undefined;
            "aria-controls"?: string | undefined;
            "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
            "aria-describedby"?: string | undefined;
            "aria-description"?: string | undefined;
            "aria-details"?: string | undefined;
            "aria-disabled"?: (boolean | "true" | "false") | undefined;
            "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
            "aria-errormessage"?: string | undefined;
            "aria-expanded"?: (boolean | "true" | "false") | undefined;
            "aria-flowto"?: string | undefined;
            "aria-grabbed"?: (boolean | "true" | "false") | undefined;
            "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
            "aria-hidden"?: (boolean | "true" | "false") | undefined;
            "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
            "aria-keyshortcuts"?: string | undefined;
            "aria-label"?: string | undefined;
            "aria-labelledby"?: string | undefined;
            "aria-level"?: number | undefined;
            "aria-live"?: "off" | "assertive" | "polite" | undefined;
            "aria-modal"?: (boolean | "true" | "false") | undefined;
            "aria-multiline"?: (boolean | "true" | "false") | undefined;
            "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
            "aria-orientation"?: "horizontal" | "vertical" | undefined;
            "aria-owns"?: string | undefined;
            "aria-placeholder"?: string | undefined;
            "aria-posinset"?: number | undefined;
            "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
            "aria-readonly"?: (boolean | "true" | "false") | undefined;
            "aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined;
            "aria-required"?: (boolean | "true" | "false") | undefined;
            "aria-roledescription"?: string | undefined;
            "aria-rowcount"?: number | undefined;
            "aria-rowindex"?: number | undefined;
            "aria-rowindextext"?: string | undefined;
            "aria-rowspan"?: number | undefined;
            "aria-selected"?: (boolean | "true" | "false") | undefined;
            "aria-setsize"?: number | undefined;
            "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
            "aria-valuemax"?: number | undefined;
            "aria-valuemin"?: number | undefined;
            "aria-valuenow"?: number | undefined;
            "aria-valuetext"?: string | undefined;
            children?: react.ReactNode | undefined;
            dangerouslySetInnerHTML?: {
                __html: string | TrustedHTML;
            } | undefined;
            onCopy?: react.ClipboardEventHandler<HTMLAnchorElement> | undefined;
            onCopyCapture?: react.ClipboardEventHandler<HTMLAnchorElement> | undefined;
            onCut?: react.ClipboardEventHandler<HTMLAnchorElement> | undefined;
            onCutCapture?: react.ClipboardEventHandler<HTMLAnchorElement> | undefined;
            onPaste?: react.ClipboardEventHandler<HTMLAnchorElement> | undefined;
            onPasteCapture?: react.ClipboardEventHandler<HTMLAnchorElement> | undefined;
            onCompositionEnd?: react.CompositionEventHandler<HTMLAnchorElement> | undefined;
            onCompositionEndCapture?: react.CompositionEventHandler<HTMLAnchorElement> | undefined;
            onCompositionStart?: react.CompositionEventHandler<HTMLAnchorElement> | undefined;
            onCompositionStartCapture?: react.CompositionEventHandler<HTMLAnchorElement> | undefined;
            onCompositionUpdate?: react.CompositionEventHandler<HTMLAnchorElement> | undefined;
            onCompositionUpdateCapture?: react.CompositionEventHandler<HTMLAnchorElement> | undefined;
            onFocus?: react.FocusEventHandler<HTMLAnchorElement> | undefined;
            onFocusCapture?: react.FocusEventHandler<HTMLAnchorElement> | undefined;
            onBlur?: react.FocusEventHandler<HTMLAnchorElement> | undefined;
            onBlurCapture?: react.FocusEventHandler<HTMLAnchorElement> | undefined;
            onChange?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onChangeCapture?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onBeforeInput?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onBeforeInputCapture?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onInput?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onInputCapture?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onReset?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onResetCapture?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onSubmit?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onSubmitCapture?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onInvalid?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onInvalidCapture?: react.FormEventHandler<HTMLAnchorElement> | undefined;
            onLoad?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onLoadCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onError?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onErrorCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onKeyDown?: react.KeyboardEventHandler<HTMLAnchorElement> | undefined;
            onKeyDownCapture?: react.KeyboardEventHandler<HTMLAnchorElement> | undefined;
            onKeyPress?: react.KeyboardEventHandler<HTMLAnchorElement> | undefined;
            onKeyPressCapture?: react.KeyboardEventHandler<HTMLAnchorElement> | undefined;
            onKeyUp?: react.KeyboardEventHandler<HTMLAnchorElement> | undefined;
            onKeyUpCapture?: react.KeyboardEventHandler<HTMLAnchorElement> | undefined;
            onAbort?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onAbortCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onCanPlay?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onCanPlayCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onCanPlayThrough?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onCanPlayThroughCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onDurationChange?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onDurationChangeCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onEmptied?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onEmptiedCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onEncrypted?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onEncryptedCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onEnded?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onEndedCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onLoadedData?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onLoadedDataCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onLoadedMetadata?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onLoadedMetadataCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onLoadStart?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onLoadStartCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onPause?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onPauseCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onPlay?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onPlayCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onPlaying?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onPlayingCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onProgress?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onProgressCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onRateChange?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onRateChangeCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onResize?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onResizeCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onSeeked?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onSeekedCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onSeeking?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onSeekingCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onStalled?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onStalledCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onSuspend?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onSuspendCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onTimeUpdate?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onTimeUpdateCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onVolumeChange?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onVolumeChangeCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onWaiting?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onWaitingCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onAuxClick?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onAuxClickCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onClick?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onClickCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onContextMenu?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onContextMenuCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onDoubleClick?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onDoubleClickCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onDrag?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragCapture?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragEnd?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragEndCapture?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragEnter?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragEnterCapture?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragExit?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragExitCapture?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragLeave?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragLeaveCapture?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragOver?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragOverCapture?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragStart?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDragStartCapture?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDrop?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onDropCapture?: react.DragEventHandler<HTMLAnchorElement> | undefined;
            onMouseDown?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseDownCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseEnter?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseLeave?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseMove?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseMoveCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseOut?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseOutCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseOver?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseOverCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseUp?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onMouseUpCapture?: react.MouseEventHandler<HTMLAnchorElement> | undefined;
            onSelect?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onSelectCapture?: react.ReactEventHandler<HTMLAnchorElement> | undefined;
            onTouchCancel?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
            onTouchCancelCapture?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
            onTouchEnd?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
            onTouchEndCapture?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
            onTouchMove?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
            onTouchMoveCapture?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
            onTouchStart?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
            onTouchStartCapture?: react.TouchEventHandler<HTMLAnchorElement> | undefined;
            onPointerDown?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerDownCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerMove?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerMoveCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerUp?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerUpCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerCancel?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerCancelCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerEnter?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerLeave?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerOver?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerOverCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerOut?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onPointerOutCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onGotPointerCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onGotPointerCaptureCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onLostPointerCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onLostPointerCaptureCapture?: react.PointerEventHandler<HTMLAnchorElement> | undefined;
            onScroll?: react.UIEventHandler<HTMLAnchorElement> | undefined;
            onScrollCapture?: react.UIEventHandler<HTMLAnchorElement> | undefined;
            onScrollEnd?: react.UIEventHandler<HTMLAnchorElement> | undefined;
            onScrollEndCapture?: react.UIEventHandler<HTMLAnchorElement> | undefined;
            onWheel?: react.WheelEventHandler<HTMLAnchorElement> | undefined;
            onWheelCapture?: react.WheelEventHandler<HTMLAnchorElement> | undefined;
            onAnimationStart?: react.AnimationEventHandler<HTMLAnchorElement> | undefined;
            onAnimationStartCapture?: react.AnimationEventHandler<HTMLAnchorElement> | undefined;
            onAnimationEnd?: react.AnimationEventHandler<HTMLAnchorElement> | undefined;
            onAnimationEndCapture?: react.AnimationEventHandler<HTMLAnchorElement> | undefined;
            onAnimationIteration?: react.AnimationEventHandler<HTMLAnchorElement> | undefined;
            onAnimationIterationCapture?: react.AnimationEventHandler<HTMLAnchorElement> | undefined;
            onToggle?: react.ToggleEventHandler<HTMLAnchorElement> | undefined;
            onBeforeToggle?: react.ToggleEventHandler<HTMLAnchorElement> | undefined;
            onTransitionCancel?: react.TransitionEventHandler<HTMLAnchorElement> | undefined;
            onTransitionCancelCapture?: react.TransitionEventHandler<HTMLAnchorElement> | undefined;
            onTransitionEnd?: react.TransitionEventHandler<HTMLAnchorElement> | undefined;
            onTransitionEndCapture?: react.TransitionEventHandler<HTMLAnchorElement> | undefined;
            onTransitionRun?: react.TransitionEventHandler<HTMLAnchorElement> | undefined;
            onTransitionRunCapture?: react.TransitionEventHandler<HTMLAnchorElement> | undefined;
            onTransitionStart?: react.TransitionEventHandler<HTMLAnchorElement> | undefined;
            onTransitionStartCapture?: react.TransitionEventHandler<HTMLAnchorElement> | undefined;
        }>;
    };
}, {}, {
    isOpen?: (editorId: string) => boolean;
}>>;

declare const markdownPlugin: _udecode_plate_core.SlatePlugin<_udecode_plate_core.PluginConfig<"markdown", {
    allowedNodes: _udecode_plate_markdown.NodesConfig;
    disallowedNodes: _udecode_plate_markdown.NodesConfig;
    remarkPlugins: unified.Plugin[];
    rules: _udecode_plate_markdown.TRules | null;
    allowNode?: _udecode_plate_markdown.AllowNodeConfig;
}, {
    markdown: {
        deserialize: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, data: string, options?: Omit<_udecode_plate_markdown.DeserializeMdOptions, "editor">) => any>;
        deserializeInline: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, text: string, options?: _udecode_plate_markdown.DeserializeMdOptions) => _udecode_slate.Descendant[]>;
        serialize: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, options?: Omit<_udecode_plate_markdown.SerializeMdOptions, "editor">) => string>;
    };
} & Record<"markdown", {
    deserialize: (data: string, options?: Omit<_udecode_plate_markdown.DeserializeMdOptions, "editor"> | undefined) => any;
    deserializeInline: (text: string, options?: _udecode_plate_markdown.DeserializeMdOptions | undefined) => _udecode_slate.Descendant[];
    serialize: (options?: Omit<_udecode_plate_markdown.SerializeMdOptions, "editor"> | undefined) => string;
}>, {}, {}>>;

declare const mediaPlugins: readonly [_udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"img", {
    disableUploadInsert: true;
} & {
    disableEmbedInsert?: boolean;
    disableUploadInsert?: boolean;
    uploadImage?: (dataUrl: ArrayBuffer | string) => ArrayBuffer | Promise<ArrayBuffer | string> | string;
} & _udecode_plate_media.MediaPluginOptions, {}, {
    insert: {
        imageFromFiles: (files: FileList, options?: _udecode_slate.InsertNodesOptions | undefined) => void;
    };
}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"media_embed", _udecode_plate_media.MediaPluginOptions, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"video", {}, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"audio", {}, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"file", {}, {}, {}, {}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"caption", {
    focusEndPath: _udecode_slate.Path | null;
    focusStartPath: _udecode_slate.Path | null;
    plugins: _udecode_plate_core.WithRequiredKey[];
    visibleId: string | null;
}, {}, {}, {
    isVisible?: (elementId: string) => boolean;
}>>, _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"placeholder", _udecode_plate_media.MediaPlaceholderOptions & {
    disableEmptyPlaceholder: boolean;
    disableFileDrop: boolean;
    uploadConfig: _udecode_plate_media_react.UploadConfig;
    uploadingFiles: Record<string, File>;
    error?: _udecode_plate_media_react.UploadError | null;
    maxFileCount?: number;
    multiple?: boolean;
}, {
    placeholder: _udecode_plate_media_react.PlaceholderApi;
} & Record<"placeholder", {
    addUploadingFile: (id: string, file: File) => void;
    getUploadingFile: (id: string) => File;
    removeUploadingFile: (id: string) => void;
}>, {
    insert: {
        media: (files: FileList, options?: (Omit<_udecode_slate.InsertNodesOptions, "at"> & {
            at?: _udecode_slate.Path;
        }) | undefined) => any;
    };
}, {}>>];

declare const mentionPlugin: _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"mention", {
    insertSpaceAfterMention?: boolean;
} & _udecode_plate_combobox.TriggerComboboxPluginOptions, {}, {
    insert: {
        mention: (options: {
            search: string;
            value: any;
            key?: any;
        }) => void;
    };
}, {}>>;

declare const resetBlockTypesCommonRule: {
    defaultType: "p";
    types: ("blockquote" | "callout" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "todo" | ListStyleType)[];
};
declare const resetBlockTypesCodeBlockRule: {
    defaultType: "p";
    types: "code_block"[];
    onReset: (editor: _udecode_plate_core.SlateEditor) => void;
};
declare const resetBlockTypePlugin: _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"resetNode", {
    disableEditorReset?: boolean;
    disableFirstBlockReset?: boolean;
    rules?: _udecode_plate_reset_node.ResetNodePluginRule[];
}, {}, {}, {}>>;

declare const skipMarkPlugin: _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"skip-mark", {
    query: {
        allow: string[];
    };
}, {}, {}, {}>>;

declare const softBreakPlugin: _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"softBreak", {
    rules?: node_modules__udecode_plate_break_dist_BaseSoftBreakPlugin_CeLtcSTo.b[];
}, {}, {}, {}>>;

type SuggestionConfig = ExtendConfig<BaseSuggestionConfig, {
    activeId: string | null;
    hoverId: string | null;
    uniquePathMap: Map<string, Path>;
}>;
declare const suggestionPlugin: _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"suggestion", {
    currentUserId: string | null;
    isSuggesting: boolean;
} & {
    activeId: string | null;
    hoverId: string | null;
    uniquePathMap: Map<string, Path>;
}, {
    suggestion: {
        dataList: (node: _udecode_plate_suggestion.TSuggestionText) => _udecode_plate_suggestion.TInlineSuggestionData[];
        isBlockSuggestion: (node: _udecode_slate.TElement) => node is _udecode_plate_suggestion.TSuggestionElement;
        node: (options?: _udecode_slate.EditorNodesOptions & {
            id?: string;
            isText?: boolean;
        }) => _udecode_slate.NodeEntry<_udecode_plate_suggestion.TSuggestionElement | _udecode_plate_suggestion.TSuggestionText> | undefined;
        nodeId: (node: _udecode_slate.TElement | _udecode_plate_suggestion.TSuggestionText) => string | undefined;
        nodes: (options?: _udecode_slate.EditorNodesOptions) => _udecode_slate.NodeEntry<_udecode_slate.TElement | _udecode_plate_suggestion.TSuggestionText>[];
        suggestionData: (node: _udecode_slate.TElement | _udecode_plate_suggestion.TSuggestionText) => _udecode_plate_suggestion.TInlineSuggestionData | _udecode_plate_suggestion.TSuggestionElement["suggestion"] | undefined;
        withoutSuggestions: (fn: () => void) => void;
    };
}, {}, {}>>;

declare const tablePlugin: _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"table", {
    _cellIndices: Record<string, {
        col: number;
        row: number;
    }>;
    selectedCells: _udecode_slate.TElement[] | null;
    selectedTables: _udecode_slate.TElement[] | null;
    disableExpandOnInsert?: boolean;
    disableMarginLeft?: boolean;
    disableMerge?: boolean;
    enableUnsetSingleColSize?: boolean;
    initialTableWidth?: number;
    minColumnWidth?: number;
}, {
    create: {
        table: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { colCount, header, rowCount, ...cellOptions }?: _udecode_plate_table.GetEmptyTableNodeOptions) => _udecode_plate_table.TTableElement>;
        tableCell: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { children, header, row }?: _udecode_plate_table.CreateCellOptions) => {
            children: _udecode_slate.Descendant[];
            type: string;
        }>;
        tableRow: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { colCount, ...cellOptions }?: _udecode_plate_table.GetEmptyRowNodeOptions) => {
            children: {
                children: _udecode_slate.Descendant[];
                type: string;
            }[];
            type: string;
        }>;
    };
    table: {
        getCellBorders: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { cellIndices, defaultBorder, element, }: {
            element: _udecode_plate_table.TTableCellElement;
            cellIndices?: _udecode_plate_table.CellIndices;
            defaultBorder?: _udecode_plate_table.BorderStyle;
        }) => _udecode_plate_table.BorderStylesDefault>;
        getCellSize: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { cellIndices, colSizes, element, rowSize, }: {
            element: _udecode_plate_table.TTableCellElement;
            cellIndices?: _udecode_plate_table.CellIndices;
            colSizes?: number[];
            rowSize?: number;
        }) => {
            minHeight: number | undefined;
            width: number;
        }>;
        getColSpan: (cellElem: _udecode_plate_table.TTableCellElement) => number;
        getRowSpan: (cellElem: _udecode_plate_table.TTableCellElement) => number;
        getCellChildren: (cell: _udecode_plate_table.TTableCellElement) => _udecode_slate.Descendant[];
    };
} & {
    create: {
        table: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { colCount, header, rowCount, ...cellOptions }?: _udecode_plate_table.GetEmptyTableNodeOptions) => _udecode_plate_table.TTableElement>;
        tableCell: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { children, header, row }?: _udecode_plate_table.CreateCellOptions) => {
            children: _udecode_slate.Descendant[];
            type: string;
        }>;
        tableRow: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { colCount, ...cellOptions }?: _udecode_plate_table.GetEmptyRowNodeOptions) => {
            children: {
                children: _udecode_slate.Descendant[];
                type: string;
            }[];
            type: string;
        }>;
    };
    table: {
        getCellBorders: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { cellIndices, defaultBorder, element, }: {
            element: _udecode_plate_table.TTableCellElement;
            cellIndices?: _udecode_plate_table.CellIndices;
            defaultBorder?: _udecode_plate_table.BorderStyle;
        }) => _udecode_plate_table.BorderStylesDefault>;
        getCellSize: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { cellIndices, colSizes, element, rowSize, }: {
            element: _udecode_plate_table.TTableCellElement;
            cellIndices?: _udecode_plate_table.CellIndices;
            colSizes?: number[];
            rowSize?: number;
        }) => {
            minHeight: number | undefined;
            width: number;
        }>;
        getColSpan: (cellElem: _udecode_plate_table.TTableCellElement) => number;
        getRowSpan: (cellElem: _udecode_plate_table.TTableCellElement) => number;
        getCellChildren: (cell: _udecode_plate_table.TTableCellElement) => _udecode_slate.Descendant[];
    };
}, {
    insert: {
        table: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { colCount, header, rowCount }?: _udecode_plate_table.GetEmptyTableNodeOptions, { select: shouldSelect, ...options }?: _udecode_slate.InsertNodesOptions) => void>;
        tableColumn: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, options?: {
            at?: _udecode_slate.Path;
            before?: boolean;
            fromCell?: _udecode_slate.Path;
            header?: boolean;
            select?: boolean;
        }) => void>;
        tableRow: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, options?: {
            at?: _udecode_slate.Path;
            before?: boolean;
            fromRow?: _udecode_slate.Path;
            header?: boolean;
            select?: boolean;
        }) => void>;
    };
    remove: {
        table: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
        tableColumn: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
        tableRow: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
    };
    table: {
        merge: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
        split: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
    };
} & {
    insert: {
        table: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, { colCount, header, rowCount }?: _udecode_plate_table.GetEmptyTableNodeOptions, { select: shouldSelect, ...options }?: _udecode_slate.InsertNodesOptions) => void>;
        tableColumn: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, options?: {
            at?: _udecode_slate.Path;
            before?: boolean;
            fromCell?: _udecode_slate.Path;
            header?: boolean;
            select?: boolean;
        }) => void>;
        tableRow: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor, options?: {
            at?: _udecode_slate.Path;
            before?: boolean;
            fromRow?: _udecode_slate.Path;
            header?: boolean;
            select?: boolean;
        }) => void>;
    };
    remove: {
        table: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
        tableColumn: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
        tableRow: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
    };
    table: {
        merge: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
        split: _udecode_utils.OmitFirst<(editor: _udecode_plate_core.SlateEditor) => void>;
    };
}, {
    cellIndices?: (id: string) => _udecode_plate_table.CellIndices;
}>>;

declare const tocPlugin: _udecode_plate_core_react.PlatePlugin<_udecode_plate_core.PluginConfig<"toc", {
    isScroll: boolean;
    topOffset: number;
    queryHeading?: (editor: _udecode_plate_core.SlateEditor) => _udecode_plate_heading.Heading[];
}, {}, {}, {}>>;

declare const isSelectionAtTopLevel: (editor: any) => boolean;
declare const BlockWithPlus: ({ children, element }: any) => react_jsx_runtime.JSX.Element;

declare const editorContainerVariants: (props?: ({
    variant?: "comment" | "default" | "select" | "demo" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const EditorContainer: {
    ({ className, variant, ...props }: react.ComponentProps<"div"> & VariantProps<typeof editorContainerVariants>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const editorVariants$1: (props?: ({
    disabled?: boolean | null | undefined;
    focused?: boolean | null | undefined;
    variant?: "comment" | "default" | "select" | "none" | "aiChat" | "ai" | "demo" | "fullWidth" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type EditorProps = PlateContentProps & VariantProps<typeof editorVariants$1>;
declare const Editor: react.ForwardRefExoticComponent<Omit<_udecode_plate_core.EditableProps, "decorate"> & {
    autoFocusOnEditable?: boolean;
    decorate?: _udecode_plate_core_react.PlateStoreState["decorate"];
    disabled?: boolean;
    renderEditable?: (editable: react.ReactElement<any>) => react.ReactNode;
} & VariantProps<(props?: ({
    disabled?: boolean | null | undefined;
    focused?: boolean | null | undefined;
    variant?: "comment" | "default" | "select" | "none" | "aiChat" | "ai" | "demo" | "fullWidth" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & react.RefAttributes<HTMLDivElement>>;

type TEditorProps = {
    isToolbar?: boolean;
    isFloating?: boolean;
    allowPlugins?: PLUGIN_KEY[];
    toolbarClasses?: {
        className?: string;
        groupClass?: string;
    };
    isSettingDialog?: boolean;
    ref?: react.Ref<HTMLDivElement>;
} & EditorProps;
declare const TEditor: react.FC<TEditorProps>;

/** Text */
type EmptyText = {
    text: '';
};
interface MyAlignProps {
    align?: react__default.CSSProperties['textAlign'];
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
    lineHeight?: react__default.CSSProperties['lineHeight'];
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
    backgroundColor?: react__default.CSSProperties['backgroundColor'];
    bold?: boolean;
    code?: boolean;
    color?: react__default.CSSProperties['color'];
    fontFamily?: react__default.CSSProperties['fontFamily'];
    fontSize?: react__default.CSSProperties['fontSize'];
    fontWeight?: react__default.CSSProperties['fontWeight'];
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
declare const models$1: Model[];
declare function SettingsProvider({ children }: {
    children: react.ReactNode;
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
    setInput: react.Dispatch<react.SetStateAction<string>>;
    handleInputChange: (e: react.ChangeEvent<HTMLInputElement> | react.ChangeEvent<HTMLTextAreaElement>) => void;
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

declare function AIAnchorElement(props: PlateElementProps): react_jsx_runtime.JSX.Element;

declare const AIChatEditor: react.NamedExoticComponent<{
    content: string;
}>;

declare const AILoadingBar: () => react_jsx_runtime.JSX.Element | null;

type EditorChatState = 'cursorCommand' | 'cursorSuggestion' | 'selectionCommand' | 'selectionSuggestion';
declare const aiChatItems: {
    accept: {
        icon: react_jsx_runtime.JSX.Element;
        label: string;
        value: string;
        onSelect: ({ editor }: {
            aiEditor: SlateEditor;
            editor: PlateEditor;
        }) => void;
    };
    continueWrite: {
        icon: react_jsx_runtime.JSX.Element;
        label: string;
        value: string;
        onSelect: ({ editor }: {
            aiEditor: SlateEditor;
            editor: PlateEditor;
        }) => void;
    };
    discard: {
        icon: react_jsx_runtime.JSX.Element;
        label: string;
        shortcut: string;
        value: string;
        onSelect: ({ editor }: {
            aiEditor: SlateEditor;
            editor: PlateEditor;
        }) => void;
    };
    emojify: {
        icon: react_jsx_runtime.JSX.Element;
        label: string;
        value: string;
        onSelect: ({ editor }: {
            aiEditor: SlateEditor;
            editor: PlateEditor;
        }) => void;
    };
    explain: {
        icon: react_jsx_runtime.JSX.Element;
        label: string;
        value: string;
        onSelect: ({ editor }: {
            aiEditor: SlateEditor;
            editor: PlateEditor;
        }) => void;
    };
    fixSpelling: {
        icon: react_jsx_runtime.JSX.Element;
        label: string;
        value: string;
        onSelect: ({ editor }: {
            aiEditor: SlateEditor;
            editor: PlateEditor;
        }) => void;
    };
    generateMarkdownSample: {
        icon: react_jsx_runtime.JSX.Element;
        label: string;
        value: string;
        onSelect: ({ editor }: {
            aiEditor: SlateEditor;
            editor: PlateEditor;
        }) => void;
    };
    generateMdxSample: {
        icon: react_jsx_runtime.JSX.Element;
        label: string;
        value: string;
        onSelect: ({ editor }: {
            aiEditor: SlateEditor;
            editor: PlateEditor;
        }) => void;
    };
    improveWriting: {
        icon: react_jsx_runtime.JSX.Element;
        label: string;
        value: string;
        onSelect: ({ editor }: {
            aiEditor: SlateEditor;
            editor: PlateEditor;
        }) => void;
    };
    insertBelow: {
        icon: react_jsx_runtime.JSX.Element;
        label: string;
        value: string;
        onSelect: ({ aiEditor, editor }: {
            aiEditor: SlateEditor;
            editor: PlateEditor;
        }) => void;
    };
    makeLonger: {
        icon: react_jsx_runtime.JSX.Element;
        label: string;
        value: string;
        onSelect: ({ editor }: {
            aiEditor: SlateEditor;
            editor: PlateEditor;
        }) => void;
    };
    makeShorter: {
        icon: react_jsx_runtime.JSX.Element;
        label: string;
        value: string;
        onSelect: ({ editor }: {
            aiEditor: SlateEditor;
            editor: PlateEditor;
        }) => void;
    };
    replace: {
        icon: react_jsx_runtime.JSX.Element;
        label: string;
        value: string;
        onSelect: ({ aiEditor, editor }: {
            aiEditor: SlateEditor;
            editor: PlateEditor;
        }) => void;
    };
    simplifyLanguage: {
        icon: react_jsx_runtime.JSX.Element;
        label: string;
        value: string;
        onSelect: ({ editor }: {
            aiEditor: SlateEditor;
            editor: PlateEditor;
        }) => void;
    };
    summarize: {
        icon: react_jsx_runtime.JSX.Element;
        label: string;
        value: string;
        onSelect: ({ editor }: {
            aiEditor: SlateEditor;
            editor: PlateEditor;
        }) => void;
    };
    tryAgain: {
        icon: react_jsx_runtime.JSX.Element;
        label: string;
        value: string;
        onSelect: ({ editor }: {
            aiEditor: SlateEditor;
            editor: PlateEditor;
        }) => void;
    };
};
declare const menuStateItems: Record<EditorChatState, {
    items: (typeof aiChatItems)[keyof typeof aiChatItems][];
    heading?: string;
}[]>;
declare const AIMenuItems: ({ setValue, }: {
    setValue: (value: string) => void;
}) => react_jsx_runtime.JSX.Element;

declare function AIMenu(): react_jsx_runtime.JSX.Element | null;

declare function DropdownMenuRadioGroup({ ...props }: react.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>): react_jsx_runtime.JSX.Element;

declare function Tooltip({ ...props }: react.ComponentProps<typeof TooltipPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function TooltipTrigger({ ...props }: react.ComponentProps<typeof TooltipPrimitive.Trigger>): react_jsx_runtime.JSX.Element;

declare function Toolbar({ className, ...props }: react.ComponentProps<typeof ToolbarPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function ToolbarToggleGroup({ className, ...props }: react.ComponentProps<typeof ToolbarPrimitive.ToolbarToggleGroup>): react_jsx_runtime.JSX.Element;
declare function ToolbarLink({ className, ...props }: react.ComponentProps<typeof ToolbarPrimitive.Link>): react_jsx_runtime.JSX.Element;
declare function ToolbarSeparator({ className, ...props }: react.ComponentProps<typeof ToolbarPrimitive.Separator>): react_jsx_runtime.JSX.Element;
declare const toolbarButtonVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "outline" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const dropdownArrowVariants: (props?: ({
    size?: "default" | "sm" | "lg" | null | undefined;
    variant?: "default" | "outline" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ToolbarButtonProps = {
    isDropdown?: boolean;
    pressed?: boolean;
} & Omit<react.ComponentPropsWithoutRef<typeof ToolbarToggleItem>, 'asChild' | 'value'> & VariantProps<typeof toolbarButtonVariants>;
declare const ToolbarButton: ({ tooltip, tooltipContentProps, tooltipProps, tooltipTriggerProps, ...props }: TooltipProps<({ children, className, isDropdown, pressed, size, variant, ...props }: ToolbarButtonProps) => react_jsx_runtime.JSX.Element>) => react_jsx_runtime.JSX.Element;
declare function ToolbarSplitButton({ className, ...props }: react.ComponentPropsWithoutRef<typeof ToolbarButton>): react_jsx_runtime.JSX.Element;
type ToolbarSplitButtonPrimaryProps = Omit<react.ComponentPropsWithoutRef<typeof ToolbarToggleItem>, 'value'> & VariantProps<typeof toolbarButtonVariants>;
declare function ToolbarSplitButtonPrimary({ children, className, size, variant, ...props }: ToolbarSplitButtonPrimaryProps): react_jsx_runtime.JSX.Element;
declare function ToolbarSplitButtonSecondary({ className, size, variant, ...props }: react.ComponentPropsWithoutRef<'span'> & VariantProps<typeof dropdownArrowVariants>): react_jsx_runtime.JSX.Element;
declare function ToolbarToggleItem({ className, size, variant, ...props }: react.ComponentProps<typeof ToolbarPrimitive.ToggleItem> & VariantProps<typeof toolbarButtonVariants>): react_jsx_runtime.JSX.Element;
declare function ToolbarGroup({ children, className, }: react.ComponentProps<'div'>): react_jsx_runtime.JSX.Element;
type TooltipProps<T extends react.ElementType> = {
    tooltip?: react.ReactNode;
    tooltipContentProps?: Omit<react.ComponentPropsWithoutRef<typeof TooltipContent>, 'children'>;
    tooltipProps?: Omit<react.ComponentPropsWithoutRef<typeof Tooltip>, 'children'>;
    tooltipTriggerProps?: react.ComponentPropsWithoutRef<typeof TooltipTrigger>;
} & react.ComponentProps<T>;
declare function TooltipContent({ children, className, sideOffset, ...props }: react.ComponentProps<typeof TooltipPrimitive.Content>): react_jsx_runtime.JSX.Element;
declare function ToolbarMenuGroup({ children, className, label, ...props }: react.ComponentProps<typeof DropdownMenuRadioGroup> & {
    label?: string;
}): react_jsx_runtime.JSX.Element;

declare function AIToolbarButton(props: react.ComponentProps<typeof ToolbarButton>): react_jsx_runtime.JSX.Element;

declare function AlignDropdownMenu(props: DropdownMenuProps): react_jsx_runtime.JSX.Element;

type Value = 'askAI' | null;
declare function BlockContextMenu({ children }: {
    children: react.ReactNode;
}): string | number | bigint | boolean | Iterable<react.ReactNode> | Promise<string | number | bigint | boolean | react.ReactPortal | react.ReactElement<unknown, string | react.JSXElementConstructor<any>> | Iterable<react.ReactNode> | null | undefined> | react_jsx_runtime.JSX.Element | null | undefined;

declare const BlockDiscussion: RenderNodeWrapper<AnyPluginConfig>;
declare const BlockComment: ({ discussion, isLast, }: {
    discussion: TDiscussion;
    isLast: boolean;
}) => react_jsx_runtime.JSX.Element;
declare const useResolvedDiscussion: (commentNodes: NodeEntry<TCommentText>[], blockPath: Path) => {
    createdAt: Date;
    id: string;
    comments: TComment[];
    isResolved: boolean;
    userId: string;
    documentContent?: string;
}[];

declare const blockSelectionVariants: (props?: ({
    active?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function BlockSelection({ className, ...props }: react.ComponentProps<'div'> & VariantProps<typeof blockSelectionVariants>): react_jsx_runtime.JSX.Element | null;

interface ResolvedSuggestion extends TResolvedSuggestion {
    comments: TComment[];
}
declare const BLOCK_SUGGESTION = "__block__";
declare const TYPE_TEXT_MAP: Record<string, (node?: TElement) => string>;
declare const BlockSuggestionCard: ({ idx, isLast, suggestion, }: {
    idx: number;
    isLast: boolean;
    suggestion: ResolvedSuggestion;
}) => react_jsx_runtime.JSX.Element;
declare const useResolveSuggestion: (suggestionNodes: NodeEntry<TElement | TSuggestionText>[], blockPath: Path) => ResolvedSuggestion[];
declare const isResolvedSuggestion: (suggestion: ResolvedSuggestion | TDiscussion) => suggestion is ResolvedSuggestion;
declare function BlockSuggestion({ element }: {
    element: TSuggestionElement;
}): react_jsx_runtime.JSX.Element | null;

declare function BlockquoteElementStatic(props: SlateElementProps): react_jsx_runtime.JSX.Element;

declare function CalloutElementStatic({ children, className, ...props }: SlateElementProps): react_jsx_runtime.JSX.Element;

declare const captionVariants: (props?: ({
    align?: "center" | "left" | "right" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Caption({ align, className, ...props }: react.ComponentProps<typeof Caption$1> & VariantProps<typeof captionVariants>): react_jsx_runtime.JSX.Element;
declare function CaptionTextarea(props: react.ComponentProps<typeof CaptionTextarea$1>): react_jsx_runtime.JSX.Element;
declare const CaptionButton: react.ForwardRefExoticComponent<{
    as?: react.ElementType;
    asChild?: boolean;
    className?: string;
    options?: undefined;
    state?: {
        editor: {
            api: _udecode_slate.EditorApi & _udecode_utils.UnionToIntersection<_udecode_plate_core.InferApi<_udecode_plate_core_react.PlateCorePlugin>>;
            pluginList: _udecode_plate_core_react.AnyEditorPlatePlugin[];
            plugins: Record<string, _udecode_plate_core_react.AnyEditorPlatePlugin>;
            shortcuts: _udecode_plate_core_react.Shortcuts;
            tf: _udecode_slate.EditorTransforms & _udecode_utils.UnionToIntersection<_udecode_plate_core.InferTransforms<_udecode_plate_core_react.PlateCorePlugin>>;
            transforms: _udecode_slate.EditorTransforms & _udecode_utils.UnionToIntersection<_udecode_plate_core.InferTransforms<_udecode_plate_core_react.PlateCorePlugin>>;
            getApi: <C extends _udecode_plate_core.AnyPluginConfig = _udecode_plate_core.PluginConfig>(plugin?: _udecode_plate_core.WithRequiredKey<C>) => _udecode_plate_core_react.PlateEditor["api"] & _udecode_plate_core.InferApi<C>;
            getPlugin: <C extends _udecode_plate_core.AnyPluginConfig = _udecode_plate_core.PluginConfig>(plugin: _udecode_plate_core.WithRequiredKey<C>) => C extends {
                node: any;
            } ? C : _udecode_plate_core_react.EditorPlatePlugin<C>;
            getTransforms: <C extends _udecode_plate_core.AnyPluginConfig = _udecode_plate_core.PluginConfig>(plugin?: _udecode_plate_core.WithRequiredKey<C>) => _udecode_plate_core_react.PlateEditor["tf"] & _udecode_plate_core.InferTransforms<C>;
            uid?: string;
        } & {
            id: string;
            children: _udecode_slate.Value;
            history: _udecode_slate.History;
            marks: _udecode_slate.EditorMarks | null;
            operations: _udecode_slate.Operation<_udecode_slate.TElement | _udecode_slate.TText>[];
            selection: _udecode_slate.EditorSelection;
        } & _udecode_slate.EditorMethods<_udecode_slate.Value> & _udecode_utils.UnknownObject & {
            key: any;
            currentKeyboardEvent: is_hotkey.KeyboardEventLike | null;
            isFallback: boolean;
            pluginList: any[];
            plugins: Record<string, any>;
            prevSelection: _udecode_slate.TRange | null;
            setOptions: {
                <C extends _udecode_plate_core.AnyPluginConfig>(plugin: _udecode_plate_core.WithRequiredKey<C>, options: (state: mutative.Draft<Partial<_udecode_plate_core.InferOptions<C>>>) => void): void;
                <C extends _udecode_plate_core.AnyPluginConfig>(plugin: _udecode_plate_core.WithRequiredKey<C>, options: Partial<_udecode_plate_core.InferOptions<C>>): void;
            };
            getInjectProps: <C extends _udecode_plate_core.AnyPluginConfig = _udecode_plate_core.PluginConfig>(plugin: _udecode_plate_core.WithRequiredKey<C>) => _udecode_plate_core.InjectNodeProps<C>;
            getOption: <C extends _udecode_plate_core.AnyPluginConfig, StateType extends _udecode_plate_core.InferOptions<C>, TSelectors extends _udecode_plate_core.InferSelectors<C>, K extends keyof StateType | keyof TSelectors | "state">(plugin: _udecode_plate_core.WithRequiredKey<C>, key: K, ...args: K extends keyof TSelectors ? Parameters<TSelectors[K]> : []) => K extends "state" ? StateType : K extends keyof TSelectors ? ReturnType<TSelectors[K]> : K extends keyof StateType ? StateType[K] : never;
            getOptions: <C extends _udecode_plate_core.AnyPluginConfig = _udecode_plate_core.PluginConfig>(plugin: _udecode_plate_core.WithRequiredKey<C>) => _udecode_plate_core.InferOptions<C>;
            getOptionsStore: <C extends _udecode_plate_core.AnyPluginConfig>(plugin: _udecode_plate_core.WithRequiredKey<C>) => zustand_x.TStateApi<_udecode_plate_core.InferOptions<C>, [["zustand/mutative-x", never]], {}, _udecode_plate_core.InferSelectors<C>>;
            getPlugin: <C extends _udecode_plate_core.AnyPluginConfig = _udecode_plate_core.PluginConfig>(plugin: _udecode_plate_core.WithRequiredKey<C>) => C extends {
                node: any;
            } ? C : _udecode_plate_core.EditorPlugin<C>;
            getType: (plugin: _udecode_plate_core.WithRequiredKey) => string;
            setOption: <C extends _udecode_plate_core.AnyPluginConfig, K extends keyof _udecode_plate_core.InferOptions<C>>(plugin: _udecode_plate_core.WithRequiredKey<C>, optionKey: K, value: _udecode_plate_core.InferOptions<C>[K]) => void;
        } & {
            store: _udecode_plate_core_react.PlateStore;
        };
        element: _udecode_slate.TElement;
    } | undefined;
    style?: react.CSSProperties;
    setProps?: ((hookProps: {
        onClick: () => void;
    }) => Omit<react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<(props?: ({
        variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
        size?: "default" | "sm" | "lg" | "icon" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string> & {
        asChild?: boolean;
    }, "ref">) | undefined;
} & Omit<react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    asChild?: boolean;
}, "ref"> & react.RefAttributes<any>>;

declare function CodeBlockCombobox(): react_jsx_runtime.JSX.Element | null;

declare function CodeBlockElementStatic(props: SlateElementProps<TCodeBlockElement>): react_jsx_runtime.JSX.Element;

declare function CodeLeafStatic(props: SlateLeafProps): react_jsx_runtime.JSX.Element;

declare function CodeLineElementStatic(props: SlateElementProps): react_jsx_runtime.JSX.Element;

declare function CodeSyntaxLeafStatic(props: SlateLeafProps): react_jsx_runtime.JSX.Element;

declare const DEFAULT_COLORS: {
    isBrightColor: boolean;
    name: string;
    value: string;
}[];
declare const DEFAULT_CUSTOM_COLORS: {
    isBrightColor: boolean;
    name: string;
    value: string;
}[];

type TColor = {
    isBrightColor: boolean;
    name: string;
    value: string;
};
type ColorDropdownMenuItemProps = {
    isBrightColor: boolean;
    isSelected: boolean;
    value: string;
    updateColor: (color: string) => void;
    name?: string;
} & DropdownMenuItemProps;
declare function ColorDropdownMenuItem({ className, isBrightColor, isSelected, name, updateColor, value, ...props }: ColorDropdownMenuItemProps): react_jsx_runtime.JSX.Element;
type ColorDropdownMenuItemsProps = {
    colors: TColor[];
    updateColor: (color: string) => void;
    color?: string;
} & react.ComponentProps<'div'>;
declare function ColorDropdownMenuItems({ className, color, colors, updateColor, ...props }: ColorDropdownMenuItemsProps): react_jsx_runtime.JSX.Element;

type ColorDropdownMenuProps = {
    nodeType: string;
    tooltip?: string;
} & DropdownMenuProps;
declare function ColorDropdownMenu({ children, nodeType, tooltip, }: ColorDropdownMenuProps): react_jsx_runtime.JSX.Element;

declare function ColorInput({ children, className, value, ...props }: react.ComponentProps<'input'>): react_jsx_runtime.JSX.Element;

type ColorPickerContentProps = react.ComponentProps<'div'> & {
    colors: TColor[];
    customColors: TColor[];
    clearColor: () => void;
    updateColor: (color: string) => void;
    updateCustomColor: (color: string) => void;
    color?: string;
};
declare function ColorPickerContent({ className, clearColor, color, colors, customColors, updateColor, updateCustomColor, ...props }: ColorPickerContentProps): react_jsx_runtime.JSX.Element;
declare const ColorPicker: react.MemoExoticComponent<typeof ColorPickerContent>;

type ColorCustomProps = {
    colors: TColor[];
    customColors: TColor[];
    updateColor: (color: string) => void;
    updateCustomColor: (color: string) => void;
    color?: string;
} & react.ComponentPropsWithoutRef<'div'>;
declare function ColorCustom({ className, color, colors, customColors, updateColor, updateCustomColor, ...props }: ColorCustomProps): react_jsx_runtime.JSX.Element;

declare function ColumnElementStatic(props: SlateElementProps<TColumnElement>): react_jsx_runtime.JSX.Element;

declare const ColumnElement: react.ForwardRefExoticComponent<Omit<PlateElementProps<TColumnElement>, "ref"> & react.RefAttributes<unknown>>;

declare function ColumnGroupElementStatic(props: SlateElementProps): react_jsx_runtime.JSX.Element;

declare const useCommentEditor: (options?: Omit<CreatePlateEditorOptions, "plugins">, deps?: any[]) => any;
declare function CommentCreateForm({ autoFocus, className, discussionId: discussionIdProp, focusOnMount, }: {
    autoFocus?: boolean;
    className?: string;
    discussionId?: string;
    focusOnMount?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function CommentLeafStatic(props: SlateLeafProps<TCommentText>): react_jsx_runtime.JSX.Element;

declare function CommentToolbarButton(): react_jsx_runtime.JSX.Element;

declare function Cursor({ id, caretPosition, data, selection, selectionRects, }: CursorOverlayState<CursorData>): react_jsx_runtime.JSX.Element | null;
declare function CursorOverlay(): react_jsx_runtime.JSX.Element;

declare function DateElementStatic(props: SlateElementProps<TDateElement>): react_jsx_runtime.JSX.Element;

declare const UNDRAGGABLE_KEYS: ("tr" | "td" | "column")[];
declare const DraggableAboveNodes: RenderNodeWrapper;
declare function Draggable(props: PlateElementProps): react_jsx_runtime.JSX.Element;

declare const editorVariants: (props?: ({
    disabled?: boolean | null | undefined;
    focused?: boolean | null | undefined;
    variant?: "default" | "select" | "none" | "aiChat" | "ai" | "demo" | "fullWidth" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function EditorStatic({ className, variant, ...props }: PlateStaticProps & VariantProps<typeof editorVariants>): react_jsx_runtime.JSX.Element;

type EmojiDropdownMenuProps = {
    options?: EmojiDropdownMenuOptions;
} & react.ComponentPropsWithoutRef<typeof ToolbarButton>;
declare function EmojiDropdownMenu({ options, ...props }: EmojiDropdownMenuProps): react_jsx_runtime.JSX.Element;

declare const emojiCategoryIcons: Record<EmojiCategoryList, {
    outline: react__default.ReactElement;
    solid: react__default.ReactElement;
}>;
declare const emojiSearchIcons: {
    delete: react_jsx_runtime.JSX.Element;
    loupe: react_jsx_runtime.JSX.Element;
};

type EmojiButtonProps = {
    emoji: Emoji$1;
    index: number;
    onMouseOver: (emoji?: Emoji$1) => void;
    onSelect: (emoji: Emoji$1) => void;
};
type EmojiPickerContentProps = Pick<UseEmojiPickerType, 'emojiLibrary' | 'i18n' | 'isSearching' | 'onMouseOver' | 'onSelectEmoji' | 'refs' | 'searchResult' | 'settings' | 'visibleCategories'>;
type RowOfButtonsProps = {
    row: GridRow;
} & Pick<UseEmojiPickerType, 'emojiLibrary' | 'onMouseOver' | 'onSelectEmoji'>;
declare function EmojiPickerContent({ emojiLibrary, i18n, isSearching, refs, searchResult, settings, visibleCategories, onMouseOver, onSelectEmoji, }: EmojiPickerContentProps): react_jsx_runtime.JSX.Element;

type EmojiPickerNavigationProps = {
    onClick: (id: EmojiCategoryList) => void;
} & Pick<UseEmojiPickerType, 'emojiLibrary' | 'focusedCategory' | 'i18n' | 'icons'>;
declare function EmojiPickerNavigation({ emojiLibrary, focusedCategory, i18n, icons, onClick, }: EmojiPickerNavigationProps): react_jsx_runtime.JSX.Element;

type EmojiPickerPreviewProps = Pick<UseEmojiPickerType, 'emoji' | 'hasFound' | 'i18n' | 'isSearching'>;
type EmojiPreviewProps = Pick<UseEmojiPickerType, 'emoji'>;
type NoEmojiPreviewProps = Pick<UseEmojiPickerType, 'i18n'>;
type PickAnEmojiPreviewProps = NoEmojiPreviewProps;
declare function EmojiPickerPreview({ emoji, hasFound, i18n, isSearching, ...props }: EmojiPickerPreviewProps): react_jsx_runtime.JSX.Element;

type EmojiPickerSearchAndClearProps = Pick<UseEmojiPickerType, 'clearSearch' | 'i18n' | 'searchValue'>;
declare function EmojiPickerSearchAndClear({ clearSearch, i18n, searchValue, }: EmojiPickerSearchAndClearProps): react_jsx_runtime.JSX.Element;

type EmojiPickerSearchBarProps = {
    children: react.ReactNode;
} & Pick<UseEmojiPickerType, 'i18n' | 'searchValue' | 'setSearch'>;
declare function EmojiPickerSearchBar({ children, i18n, searchValue, setSearch, }: EmojiPickerSearchBarProps): react_jsx_runtime.JSX.Element;

declare function EmojiPicker({ clearSearch, emoji, emojiLibrary, focusedCategory, hasFound, i18n, icons, isSearching, refs, searchResult, searchValue, setSearch, settings, visibleCategories, handleCategoryClick, onMouseOver, onSelectEmoji, }: UseEmojiPickerType): react_jsx_runtime.JSX.Element;

type EmojiToolbarDropdownProps = {
    children: react.ReactNode;
    control: react.ReactNode;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
};
declare function EmojiToolbarDropdown({ children, control, isOpen, setIsOpen, }: EmojiToolbarDropdownProps): react_jsx_runtime.JSX.Element;

declare function EquationElementStatic(props: SlateElementProps<TEquationElement>): react_jsx_runtime.JSX.Element;

declare const EquationInput: react.ForwardRefExoticComponent<{
    as?: react.ElementType;
    asChild?: boolean;
    className?: string;
    options?: any;
    state?: {
        isInline?: boolean;
        open?: boolean;
        onClose?: () => void;
    } | undefined;
    style?: react.CSSProperties;
    setProps?: ((hookProps: {
        value: string;
        onChange: (e: react.ChangeEvent<HTMLTextAreaElement>) => void;
        onKeyDown: (e: react.KeyboardEvent<HTMLTextAreaElement>) => void;
    }) => Omit<TextareaAutosizeProps & react.RefAttributes<HTMLTextAreaElement>, "ref">) | undefined;
} & Omit<TextareaAutosizeProps & react.RefAttributes<HTMLTextAreaElement>, "ref"> & react.RefAttributes<any>>;

declare const lowlight$1: {
    highlight: (language: string, value: string, options?: Readonly<_lowlight.Options> | null | undefined) => hast.Root;
    highlightAuto: (value: string, options?: Readonly<_lowlight.AutoOptions> | null | undefined) => hast.Root;
    listLanguages: () => Array<string>;
    register: {
        (grammars: Readonly<Record<string, highlight_js.LanguageFn>>): undefined;
        (name: string, grammar: highlight_js.LanguageFn): undefined;
    };
    registerAlias: {
        (aliases: Readonly<Record<string, ReadonlyArray<string> | string>>): undefined;
        (language: string, alias: ReadonlyArray<string> | string): undefined;
    };
    registered: (aliasOrName: string) => boolean;
};
declare function ExportToolbarButton(props: DropdownMenuProps): react_jsx_runtime.JSX.Element;

declare function FixedToolbarButtons({ allows, groupClass }: {
    allows: PLUGIN_KEY[];
    groupClass?: string;
}): react_jsx_runtime.JSX.Element;

declare function FixedToolbar(props: React.ComponentProps<typeof Toolbar>): react_jsx_runtime.JSX.Element;

declare function FloatingToolbarButtons({ allows, groupClass, }: {
    allows: PLUGIN_KEY[];
    groupClass?: string;
}): react_jsx_runtime.JSX.Element;

type FloatingToolbarProps = react.ComponentProps<typeof Toolbar> & {
    state?: FloatingToolbarState;
};
declare function FloatingToolbar({ children, className, state, ...props }: FloatingToolbarProps): react_jsx_runtime.JSX.Element | null;

declare const DEFAULT_FONT_SIZE = "16";
declare const FONT_SIZE_MAP: {
    readonly h1: "36";
    readonly h2: "24";
    readonly h3: "20";
};
declare const FONT_SIZES: readonly ["8", "9", "10", "12", "14", "16", "18", "24", "30", "36", "48", "60", "72", "96"];
declare function FontSizeToolbarButton(): react_jsx_runtime.JSX.Element;

declare const GhostText: () => react_jsx_runtime.JSX.Element | null;
declare function GhostTextContent(): react_jsx_runtime.JSX.Element;

declare const headingVariants$1: (props?: ({
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function HeadingElementStatic({ variant, ...props }: SlateElementProps & VariantProps<typeof headingVariants$1>): react_jsx_runtime.JSX.Element;

declare const headingVariants: (props?: ({
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function HeadingElement({ variant, ...props }: PlateElementProps & VariantProps<typeof headingVariants>): react_jsx_runtime.JSX.Element;

declare function HighlightLeafStatic(props: SlateLeafProps): react_jsx_runtime.JSX.Element;

declare function RedoToolbarButton(props: react.ComponentProps<typeof ToolbarButton>): react_jsx_runtime.JSX.Element;
declare function UndoToolbarButton(props: react.ComponentProps<typeof ToolbarButton>): react_jsx_runtime.JSX.Element;

declare function HrElementStatic(props: SlateElementProps): react_jsx_runtime.JSX.Element;

declare function ImageElementStatic(props: SlateElementProps<TImageElement & TCaptionElement & {
    width: number;
}>): react_jsx_runtime.JSX.Element;

declare const ImageElement: react.ForwardRefExoticComponent<Omit<PlateElementProps<TImageElement>, "ref"> & react.RefAttributes<unknown>>;

declare const ImagePreview: () => react_jsx_runtime.JSX.Element;
declare function ScaleInput(props: React.ComponentProps<'input'>): react_jsx_runtime.JSX.Element;

type ImportType = 'html' | 'markdown';
declare function ImportToolbarButton(props: DropdownMenuProps): react_jsx_runtime.JSX.Element;

declare const FireMarker: (props: Omit<SlateRenderElementProps, "children">) => react_jsx_runtime.JSX.Element;
declare const FireLiComponent: (props: SlateRenderElementProps) => react_jsx_runtime.JSX.Element;

declare function NumberedIndentListToolbarButton(): react_jsx_runtime.JSX.Element;
declare function BulletedIndentListToolbarButton(): react_jsx_runtime.JSX.Element;

declare function TodoMarkerStatic(props: Omit<SlateRenderElementProps, 'children'>): react_jsx_runtime.JSX.Element;
declare function TodoLiStatic(props: SlateRenderElementProps): react_jsx_runtime.JSX.Element;

declare function IndentTodoToolbarButton(props: react.ComponentProps<typeof ToolbarButton>): react_jsx_runtime.JSX.Element;

declare function IndentToolbarButton(props: react.ComponentProps<typeof ToolbarButton>): react_jsx_runtime.JSX.Element;

type FilterFn = (item: {
    value: string;
    group?: string;
    keywords?: string[];
    label?: string;
}, search: string) => boolean;
interface InlineComboboxContextValue {
    filter: FilterFn | false;
    inputProps: UseComboboxInputResult['props'];
    inputRef: react.RefObject<HTMLInputElement | null>;
    removeInput: UseComboboxInputResult['removeInput'];
    showTrigger: boolean;
    trigger: string;
    setHasEmpty: (hasEmpty: boolean) => void;
}
declare const InlineComboboxContext: react.Context<InlineComboboxContextValue>;
declare const defaultFilter: FilterFn;
type InlineComboboxItemProps = {
    focusEditor?: boolean;
    group?: string;
    keywords?: string[];
    label?: string;
} & ComboboxItemProps & Required<Pick<ComboboxItemProps, 'value'>>;

declare function InlineEquationElementStatic(props: SlateElementProps<TEquationElement>): react_jsx_runtime.JSX.Element;

declare function InlineEquationToolbarButton(props: react.ComponentProps<typeof ToolbarButton>): react_jsx_runtime.JSX.Element;

type Group = {
    group: string;
    items: Item[];
};
interface Item {
    icon: react.ReactNode;
    value: string;
    onSelect: (editor: PlateEditor, value: string) => void;
    focusEditor?: boolean;
    label?: string;
}
declare const groups: Group[];
declare function InsertDropdownMenu({ button, props }: {
    button?: react.ReactNode;
    props?: DropdownMenuProps;
}): react_jsx_runtime.JSX.Element;

declare function KbdLeafStatic(props: SlateLeafProps): react_jsx_runtime.JSX.Element;

declare function LineHeightDropdownMenu({ ...props }: DropdownMenuProps): react_jsx_runtime.JSX.Element;

declare function LinkElementStatic(props: SlateElementProps<TLinkElement>): react_jsx_runtime.JSX.Element;

declare function LinkFloatingToolbar({ state, }: {
    state?: LinkFloatingToolbarState;
}): react_jsx_runtime.JSX.Element | null;

declare function LinkToolbarButton(props: react.ComponentProps<typeof ToolbarButton>): react_jsx_runtime.JSX.Element;

declare function MarkToolbarButton({ clear, nodeType, ...props }: react.ComponentProps<typeof ToolbarButton> & {
    nodeType: string;
    clear?: string[] | string;
}): react_jsx_runtime.JSX.Element;

declare function MediaAudioElementStatic(props: SlateElementProps<TAudioElement>): react_jsx_runtime.JSX.Element;

declare const MediaAudioElement: react.ForwardRefExoticComponent<Omit<PlateElementProps<TAudioElement>, "ref"> & react.RefAttributes<unknown>>;

declare const MediaEmbedElement: react.ForwardRefExoticComponent<Omit<PlateElementProps<TMediaEmbedElement>, "ref"> & react.RefAttributes<unknown>>;

declare function MediaFileElementStatic(props: SlateElementProps<TFileElement>): react_jsx_runtime.JSX.Element;

declare const MediaFileElement: react.ForwardRefExoticComponent<Omit<PlateElementProps<TFileElement>, "ref"> & react.RefAttributes<unknown>>;

declare const CONTENT: Record<string, {
    accept: string[];
    content: react.ReactNode;
    icon: react.ReactNode;
}>;
declare const MediaPlaceholderElement: react.ForwardRefExoticComponent<Omit<PlateElementProps<TPlaceholderElement>, "ref"> & react.RefAttributes<unknown>>;
declare function ImageProgress({ className, file, imageRef, progress, }: {
    file: File;
    className?: string;
    imageRef?: react.RefObject<HTMLImageElement | null>;
    progress?: number;
}): react_jsx_runtime.JSX.Element | null;
declare function formatBytes(bytes: number, opts?: {
    decimals?: number;
    sizeType?: 'accurate' | 'normal';
}): string;

interface MediaPopoverProps {
    children: react.ReactNode;
    plugin: WithRequiredKey;
}
declare function MediaPopover({ children, plugin }: MediaPopoverProps): react_jsx_runtime.JSX.Element;

declare const MEDIA_CONFIG: Record<string, {
    accept: string[];
    icon: react.ReactNode;
    title: string;
    tooltip: string;
}>;
declare function MediaToolbarButton({ nodeType, ...props }: DropdownMenuProps & {
    nodeType: string;
}): react_jsx_runtime.JSX.Element;

declare const useUploadErrorToast: () => void;
declare const MediaUploadToast: () => null;

declare function MediaVideoElementStatic(props: SlateElementProps<TVideoElement & TCaptionElement & {
    width: number;
}>): react_jsx_runtime.JSX.Element;

declare const MediaVideoElement: react.ForwardRefExoticComponent<Omit<PlateElementProps<TVideoElement>, "ref"> & react.RefAttributes<unknown>>;

declare function MentionElementStatic(props: SlateElementProps<TMentionElement> & {
    prefix?: string;
}): react_jsx_runtime.JSX.Element;

declare function ModeDropdownMenu(props: DropdownMenuProps): react_jsx_runtime.JSX.Element;

declare function MoreDropdownMenu(props: DropdownMenuProps): react_jsx_runtime.JSX.Element;

declare function OutdentToolbarButton(props: react.ComponentProps<typeof ToolbarButton>): react_jsx_runtime.JSX.Element;

declare function ParagraphElementStatic(props: SlateElementProps): react_jsx_runtime.JSX.Element;

declare const Placeholder: (props: PlaceholderProps) => any;
declare const withPlaceholder: (Component: any, props: Omit<PlaceholderProps, "editor" | "path" | "ref" | "plugin" | keyof _udecode_plate_core.RenderElementProps<_udecode_slate.TElement> | keyof {
    className?: string;
    style?: react.CSSProperties;
} | keyof _udecode_plate_core.BasePluginContext<_udecode_plate_core.PluginConfig>>) => (childrenProps: _udecode_plate_core_react.PlateElementProps) => react.JSX.Element;
declare const withPlaceholdersPrimitive: (components: any, options: _udecode_plate_utils_react.CreateHOCOptions<PlaceholderProps> | _udecode_plate_utils_react.CreateHOCOptions<PlaceholderProps>[]) => any;
declare const withPlaceholders: (components: any) => any;

declare const mediaResizeHandleVariants: (props?: ({
    direction?: "left" | "right" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const resizeHandleVariants: (props?: ({
    direction?: "bottom" | "left" | "right" | "top" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function ResizeHandle({ className, direction, options, ...props }: react.ComponentProps<typeof ResizeHandle$1> & VariantProps<typeof resizeHandleVariants>): react_jsx_runtime.JSX.Element | null;
declare const resizableVariants: (props?: ({
    align?: "center" | "left" | "right" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Resizable({ align, className, ...props }: react.ComponentProps<typeof Resizable$1> & VariantProps<typeof resizableVariants>): react_jsx_runtime.JSX.Element;

declare function SuggestionLeafStatic(props: SlateLeafProps<TSuggestionText>): react_jsx_runtime.JSX.Element;

declare const SuggestionBelowNodes: RenderNodeWrapper<SuggestionConfig>;

declare function SuggestionToolbarButton(): react_jsx_runtime.JSX.Element;

declare function TableCellElementStatic({ isHeader, ...props }: SlateElementProps<TTableCellElement> & {
    isHeader?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function TableCellHeaderStaticElement(props: SlateElementProps<TTableCellElement>): react_jsx_runtime.JSX.Element;

declare function TableDropdownMenu(props: DropdownMenuProps): react_jsx_runtime.JSX.Element;
declare function TablePicker(): react_jsx_runtime.JSX.Element;

declare function TableElementStatic({ children, ...props }: SlateElementProps<TTableElement>): react_jsx_runtime.JSX.Element;

declare function PopoverContent({ className, align, sideOffset, ...props }: react.ComponentProps<typeof PopoverPrimitive.Content>): react_jsx_runtime.JSX.Element;

declare const TableElement: react.ForwardRefExoticComponent<Omit<PlateElementProps<TTableElement>, "ref"> & react.RefAttributes<unknown>>;
declare function TableFloatingToolbar({ children, ...props }: react.ComponentProps<typeof PopoverContent>): react_jsx_runtime.JSX.Element;
declare function TableBordersDropdownMenuContent(props: react.ComponentProps<typeof DropdownMenuPrimitive.Content>): react_jsx_runtime.JSX.Element;

declare const BorderAll: (props: LucideProps) => react_jsx_runtime.JSX.Element;
declare const BorderBottom: (props: LucideProps) => react_jsx_runtime.JSX.Element;
declare const BorderLeft: (props: LucideProps) => react_jsx_runtime.JSX.Element;
declare const BorderNone: (props: LucideProps) => react_jsx_runtime.JSX.Element;
declare const BorderRight: (props: LucideProps) => react_jsx_runtime.JSX.Element;
declare const BorderTop: (props: LucideProps) => react_jsx_runtime.JSX.Element;

declare function TableRowElementStatic(props: SlateElementProps): react_jsx_runtime.JSX.Element;

declare function TocElementStatic(props: SlateElementProps): react_jsx_runtime.JSX.Element;

declare function ToggleElementStatic(props: SlateElementProps): react_jsx_runtime.JSX.Element;

declare function ToggleToolbarButton(props: react.ComponentProps<typeof ToolbarButton>): react_jsx_runtime.JSX.Element;

declare const turnIntoItems: ({
    icon: react_jsx_runtime.JSX.Element;
    keywords: string[];
    label: string;
    value: "p";
} | {
    icon: react_jsx_runtime.JSX.Element;
    keywords: string[];
    label: string;
    value: "h1";
} | {
    icon: react_jsx_runtime.JSX.Element;
    keywords: string[];
    label: string;
    value: "h2";
} | {
    icon: react_jsx_runtime.JSX.Element;
    keywords: string[];
    label: string;
    value: "h3";
} | {
    icon: react_jsx_runtime.JSX.Element;
    keywords: string[];
    label: string;
    value: ListStyleType;
} | {
    icon: react_jsx_runtime.JSX.Element;
    keywords: string[];
    label: string;
    value: "todo";
} | {
    icon: react_jsx_runtime.JSX.Element;
    keywords: string[];
    label: string;
    value: "toggle";
} | {
    icon: react_jsx_runtime.JSX.Element;
    keywords: string[];
    label: string;
    value: "code_block";
} | {
    icon: react_jsx_runtime.JSX.Element;
    keywords: string[];
    label: string;
    value: "blockquote";
} | {
    icon: react_jsx_runtime.JSX.Element;
    label: string;
    value: string;
    keywords?: undefined;
})[];
declare function TurnIntoDropdownMenu(props: DropdownMenuProps): react_jsx_runtime.JSX.Element;

declare const models: Model[];
declare const CONFIGS: {
    API_KEY: string | undefined;
    MODEL: string;
    WEBSITE_URL: string | undefined;
};

declare const useDebounce: <T>(value: T, delay?: number) => T;

declare const lowlight: {
    highlight: (language: string, value: string, options?: Readonly<_lowlight.Options> | null | undefined) => hast.Root;
    highlightAuto: (value: string, options?: Readonly<_lowlight.AutoOptions> | null | undefined) => hast.Root;
    listLanguages: () => Array<string>;
    register: {
        (grammars: Readonly<Record<string, highlight_js.LanguageFn>>): undefined;
        (name: string, grammar: highlight_js.LanguageFn): undefined;
    };
    registerAlias: {
        (aliases: Readonly<Record<string, ReadonlyArray<string> | string>>): undefined;
        (language: string, alias: ReadonlyArray<string> | string): undefined;
    };
    registered: (aliasOrName: string) => boolean;
};
declare const getCanvas: (editor: Editor$1) => Promise<HTMLCanvasElement>;
declare const downloadFile: (url: string, filename: string) => Promise<void>;
declare const useExporter: () => {
    exportToHtml: () => Promise<void>;
    exportToPdf: () => Promise<void>;
    exportToImage: () => Promise<void>;
    exportToMarkdown: () => Promise<void>;
    exportToGet?: undefined;
} | {
    exportToHtml: (type: "copy" | "download") => Promise<void>;
    exportToPdf: () => Promise<void>;
    exportToImage: () => Promise<void>;
    exportToMarkdown: (type: "download" | "copy") => Promise<void>;
    exportToGet: (type: "html" | "markdown" | "pdf" | "image") => Promise<{
        html: string;
        urlHtml: string;
        md?: undefined;
        urlMarkdown?: undefined;
        canvasPdf?: undefined;
        pdfBase64?: undefined;
        canvas?: undefined;
        urlImage?: undefined;
    } | {
        md: string;
        urlMarkdown: string;
        html?: undefined;
        urlHtml?: undefined;
        canvasPdf?: undefined;
        pdfBase64?: undefined;
        canvas?: undefined;
        urlImage?: undefined;
    } | {
        canvasPdf: HTMLCanvasElement;
        pdfBase64: string;
        html?: undefined;
        urlHtml?: undefined;
        md?: undefined;
        urlMarkdown?: undefined;
        canvas?: undefined;
        urlImage?: undefined;
    } | {
        canvas: HTMLCanvasElement;
        urlImage: string;
        html?: undefined;
        urlHtml?: undefined;
        md?: undefined;
        urlMarkdown?: undefined;
        canvasPdf?: undefined;
        pdfBase64?: undefined;
    }>;
};

declare function useIsTouchDevice(): boolean;

declare function useMounted(): boolean;

declare const f: <TRouteOptions extends _uploadthing_shared.RouteOptions>(input: _uploadthing_shared.FileRouterInputConfig, config?: TRouteOptions | undefined) => node_modules_uploadthing_dist__internal_types.UploadBuilder<{
    _routeOptions: TRouteOptions;
    _input: {
        in: node_modules_uploadthing_dist__internal_types.UnsetMarker;
        out: node_modules_uploadthing_dist__internal_types.UnsetMarker;
    };
    _metadata: node_modules_uploadthing_dist__internal_types.UnsetMarker;
    _adapterFnArgs: {
        req: next_server.NextRequest;
    };
    _errorShape: _uploadthing_shared.Json;
    _errorFn: node_modules_uploadthing_dist__internal_types.UnsetMarker;
    _output: node_modules_uploadthing_dist__internal_types.UnsetMarker;
}>;
declare const ourFileRouter: {
    editorUploader: uploadthing_types.FileRoute<{
        input: undefined;
        output: {
            key: string;
            name: string;
            size: number;
            type: string;
            url: string;
        };
        errorShape: _uploadthing_shared.Json;
    }>;
};
type OurFileRouter = typeof ourFileRouter;

type UploadedFile<T = unknown> = ClientUploadedFileData<T>;
interface UseUploadFileProps extends Pick<UploadFilesOptions<OurFileRouter['editorUploader']>, 'headers' | 'onUploadBegin' | 'onUploadProgress' | 'skipPolling'> {
    onUploadComplete?: (file: UploadedFile) => void;
    onUploadError?: (error: unknown) => void;
}
declare function useUploadFile({ onUploadComplete, onUploadError, ...props }?: UseUploadFileProps): {
    isUploading: boolean;
    progress: number;
    uploadedFile: UploadedFile<unknown> | undefined;
    uploadFile: (file: File) => Promise<UploadedFile<unknown> | undefined>;
    uploadingFile: File | undefined;
};
declare function getErrorMessage(err: unknown): string;
declare function showErrorToast(err: unknown): string | number;

declare function cn(...inputs: ClassValue[]): string;

export { ACTION_THREE_COLUMNS, AI, AIAnchorElement, AIChatEditor, AILeaf, AILoadingBar, AIMenu, AIMenuItems, AIToolbarButton, Align, AlignDropdownMenu, AudioMedia, BLOCK_SUGGESTION, BackgroundColor, BlockComment, BlockContextMenu, BlockDiscussion, BlockSelection, BlockSuggestion, BlockSuggestionCard, BlockWithPlus, BlockquoteElement, BlockquoteElementStatic, Bold, BorderAll, BorderBottom, BorderLeft, BorderNone, BorderRight, BorderTop, BulletedIndentList, BulletedIndentListToolbarButton, CONFIGS, CONTENT, CalloutElement, CalloutElementStatic, Caption, CaptionButton, CaptionTextarea, Code, CodeBlockCombobox, CodeBlockElement, CodeBlockElementStatic, CodeLeaf, CodeLeafStatic, CodeLineElement, CodeLineElementStatic, CodeSyntaxLeaf, CodeSyntaxLeafStatic, ColorCustom, type ColorCustomProps, ColorDropdownMenu, ColorDropdownMenuItem, type ColorDropdownMenuItemProps, ColorDropdownMenuItems, type ColorDropdownMenuProps, ColorInput, ColorPicker, ColorPickerContent, type ColorPickerContentProps, ColumnElement, ColumnElementStatic, ColumnFloatingToolbar, ColumnGroupElement, ColumnGroupElementStatic, Comment, CommentCreateForm, CommentLeaf, CommentLeafStatic, CommentMoreDropdown, Comment$1 as CommentOfCommentUI, CommentToolbarButton, type CommentsConfig, Cursor, CursorOverlay, DEFAULT_COLORS, DEFAULT_CUSTOM_COLORS, DEFAULT_FONT_SIZE, DateElement, DateElementStatic, Draggable, DraggableAboveNodes, Editor, type EditorChatState, EditorContainer, type EditorProps, EditorStatic, Emoji, type EmojiButtonProps, EmojiDropdownMenu, type EmojiDropdownMenuProps, EmojiInputElement, EmojiPicker, EmojiPickerContent, type EmojiPickerContentProps, EmojiPickerNavigation, type EmojiPickerNavigationProps, EmojiPickerPreview, type EmojiPickerPreviewProps, EmojiPickerSearchAndClear, type EmojiPickerSearchAndClearProps, EmojiPickerSearchBar, type EmojiPickerSearchBarProps, type EmojiPreviewProps, EmojiToolbarDropdown, type EmojiToolbarDropdownProps, type EmptyText, EquationElement, EquationElementStatic, EquationInput, ExcalidrawElement, Export, ExportToolbarButton, FONT_SIZES, FONT_SIZE_MAP, FileMedia, type FilterFn, FireLiComponent, FireMarker, FixedToolbar, FixedToolbarButtons, FixedToolbarPlugin, FloatingToolbar, FloatingToolbarButtons, FloatingToolbarPlugin, type FloatingToolbarProps, FontColor, FontSize, FontSizeToolbarButton, GhostText, GhostTextContent, type Group as GroupInsertDropdownMenu, type Group$1 as GroupSlashInputElement, HeadingElement, HeadingElementStatic, Highlight, HighlightLeaf, HighlightLeafStatic, HrElement, HrElementStatic, ImageElement, ImageElementStatic, ImageMedia, ImagePreview, ImageProgress, Import, ImportToolbarButton, type ImportType, Indent, IndentTodoToolbarButton, IndentToolbarButton, InlineComboboxContext, type InlineComboboxContextValue, type InlineComboboxItemProps, InlineEquationElement, InlineEquationElementStatic, InlineEquationToolbarButton, Insert, InsertDropdownMenu, Italic, type Item as ItemInsertDropdownMenu, type Item$1 as ItemSlashInputElement, KbdLeaf, KbdLeafStatic, LineHeight, LineHeightDropdownMenu, Link, LinkElement, LinkElementStatic, LinkFloatingToolbar, LinkToolbarButton, MEDIA_CONFIG, MENTIONABLES, MarkToolbarButton, MediaAudioElement, MediaAudioElementStatic, MediaEmbedElement, MediaFileElement, MediaFileElementStatic, MediaPlaceholderElement, MediaPopover, type MediaPopoverProps, MediaToolbarButton, MediaUploadToast, MediaVideoElement, MediaVideoElementStatic, MentionElement, MentionElementStatic, MentionInputElement, Mode, ModeDropdownMenu, type Model, More, MoreDropdownMenu, type MyAlignProps, type MyBlockElement, type MyBlockquoteElement, type MyCodeBlockElement, type MyCodeLineElement, type MyExcalidrawElement, type MyH1Element, type MyH2Element, type MyH3Element, type MyHrElement, type MyImageElement, type MyIndentListProps, type MyIndentProps, type MyInlineChildren, type MyInlineDescendant, type MyInlineElement, type MyLineHeightProps, type MyLinkElement, type MyMediaEmbedElement, type MyMentionElement, type MyMentionInputElement, type MyNestableBlock, type MyParagraphElement, type MyRootBlock, type MyTableCellElement, type MyTableElement, type MyTableRowElement, type MyToggleElement, type MyValue, type NoEmojiPreviewProps, NumberIndentList, NumberedIndentListToolbarButton, type OurFileRouter, Outdent, OutdentToolbarButton, PLUGIN_DEFAULTS, type PLUGIN_KEY, PROMPT_TEMPLATES, ParagraphElement, ParagraphElementStatic, type PickAnEmojiPreviewProps, Placeholder, type PlainText, Redo, RedoToolbarButton, Resizable, ResizeHandle, type ResolvedSuggestion, type RichText, type RowOfButtonsProps, STRUCTURAL_TYPES, ScaleInput, type SettingsContextType, SettingsDialog, SettingsProvider, SlashInputElement, StrikeThrough, SuggestionBelowNodes, type SuggestionConfig, SuggestionLeaf, SuggestionLeafStatic, SuggestionToolbarButton, type TColor, type TComment, type TDiscussion, TEditor, type TEditorProps, TYPE_TEXT_MAP, Table, TableBordersDropdownMenuContent, TableCellElement, TableCellElementStatic, TableCellHeaderElement, TableCellHeaderStaticElement, TableDropdownMenu, TableElement, TableElementStatic, TableFloatingToolbar, TablePicker, TableRowElement, TableRowElementStatic, TocElement, TocElementStatic, TodoIndentList, TodoLi, TodoLiStatic, TodoMarker, TodoMarkerStatic, Toggle, ToggleElement, ToggleElementStatic, ToggleToolbarButton, Toolbar, ToolbarButton, ToolbarGroup, ToolbarLink, ToolbarMenuGroup, ToolbarSeparator, ToolbarSplitButton, ToolbarSplitButtonPrimary, ToolbarSplitButtonSecondary, ToolbarToggleGroup, ToolbarToggleItem, TurnInto, TurnIntoDropdownMenu, UNDRAGGABLE_KEYS, Underline, Undo, UndoToolbarButton, type UploadedFile, type UseUploadFileProps, type Value, VideoMedia, aiChatItems, aiPlugins, alignPlugin, autoformatPlugin, avatarUrl, basicNodesPlugins, blockMenuPlugins, blockSelectionPlugins, blockSelectionReadOnlyPlugin, blockSelectionVariants, cn, commentsPlugin, copilotPlugins, cursorOverlayPlugin, defaultFilter, deletePlugins, discussionPlugin, discussionsData, dndPlugins, downloadFile, editorComponents, editorPlugins, editorVariants, emojiCategoryIcons, emojiSearchIcons, equationPlugins, exitBreakPlugin, f, formatBytes, formatCommentDate, getBlockType, getCanvas, getErrorMessage, groups as groupInsertDropdownMenu, indentListPlugins, insertBlock, insertBlockMap, insertInlineElement, insertInlineMap, insertList, isResolvedSuggestion, isSelectionAtTopLevel, lineHeightPlugin, linkPlugin, lowlight$2 as lowlight, lowlight as lowlightOfEditorExporter, lowlight$1 as lowlightOfExportToolbar, markdownPlugin, mediaPlugins, mediaResizeHandleVariants, mentionPlugin, menuStateItems, models, models$1 as modelsOfEditorSettings, ourFileRouter, resetBlockTypePlugin, resetBlockTypesCodeBlockRule, resetBlockTypesCommonRule, setBlockMap, setBlockType, setList, showErrorToast, skipMarkPlugin, groups$1 as slashInputElement, softBreakPlugin, suggestionPlugin, tablePlugin, tocPlugin, turnIntoItems, useChat, useCommentEditor, useCreateEditor, useDebounce, useExporter, useIsTouchDevice, useMounted, useResolveSuggestion, useResolvedDiscussion, useSettings, useUploadErrorToast, useUploadFile, viewComponents, viewPlugins, withPlaceholder, withPlaceholders, withPlaceholdersPrimitive };
