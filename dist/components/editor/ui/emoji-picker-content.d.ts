import { type Emoji, type GridRow } from '@udecode/plate-emoji';
import type { UseEmojiPickerType } from '@udecode/plate-emoji/react';
export type EmojiButtonProps = {
    emoji: Emoji;
    index: number;
    onMouseOver: (emoji?: Emoji) => void;
    onSelect: (emoji: Emoji) => void;
};
export type EmojiPickerContentProps = Pick<UseEmojiPickerType, 'emojiLibrary' | 'i18n' | 'isSearching' | 'onMouseOver' | 'onSelectEmoji' | 'refs' | 'searchResult' | 'settings' | 'visibleCategories'>;
export type RowOfButtonsProps = {
    row: GridRow;
} & Pick<UseEmojiPickerType, 'emojiLibrary' | 'onMouseOver' | 'onSelectEmoji'>;
export declare function EmojiPickerContent({ emojiLibrary, i18n, isSearching, refs, searchResult, settings, visibleCategories, onMouseOver, onSelectEmoji, }: EmojiPickerContentProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=emoji-picker-content.d.ts.map