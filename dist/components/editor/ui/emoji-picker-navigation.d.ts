import type { EmojiCategoryList } from '@udecode/plate-emoji';
import type { UseEmojiPickerType } from '@udecode/plate-emoji/react';
export type EmojiPickerNavigationProps = {
    onClick: (id: EmojiCategoryList) => void;
} & Pick<UseEmojiPickerType, 'emojiLibrary' | 'focusedCategory' | 'i18n' | 'icons'>;
export declare function EmojiPickerNavigation({ emojiLibrary, focusedCategory, i18n, icons, onClick, }: EmojiPickerNavigationProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=emoji-picker-navigation.d.ts.map