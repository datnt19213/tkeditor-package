export type EditorChatState = 'cursorCommand' | 'cursorSuggestion' | 'selectionCommand' | 'selectionSuggestion';
export declare const aiChatItems: any;
export declare const menuStateItems: Record<EditorChatState, {
    items: (typeof aiChatItems)[keyof typeof aiChatItems][];
    heading?: string;
}[]>;
export declare const AIMenuItems: any;
//# sourceMappingURL=ai-menu-items.d.ts.map