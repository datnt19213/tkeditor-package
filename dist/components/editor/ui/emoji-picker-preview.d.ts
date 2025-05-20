import type { UseEmojiPickerType } from '@udecode/plate-emoji/react';
export type EmojiPickerPreviewProps = Pick<UseEmojiPickerType, 'emoji' | 'hasFound' | 'i18n' | 'isSearching'>;
export type EmojiPreviewProps = Pick<UseEmojiPickerType, 'emoji'>;
export type NoEmojiPreviewProps = Pick<UseEmojiPickerType, 'i18n'>;
export type PickAnEmojiPreviewProps = NoEmojiPreviewProps;
export declare function EmojiPickerPreview({ emoji, hasFound, i18n, isSearching, ...props }: EmojiPickerPreviewProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=emoji-picker-preview.d.ts.map