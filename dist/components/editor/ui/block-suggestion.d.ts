import { type TElement } from '@udecode/plate';
import type { TResolvedSuggestion, TSuggestionElement } from '@udecode/plate-suggestion';
import { type TComment } from './comment';
export interface ResolvedSuggestion extends TResolvedSuggestion {
    comments: TComment[];
}
export declare const BLOCK_SUGGESTION: any;
export declare const TYPE_TEXT_MAP: Record<string, (node?: TElement) => string>;
export declare const BlockSuggestionCard: any;
export declare const useResolveSuggestion: any;
export declare const isResolvedSuggestion: any;
export declare function BlockSuggestion({ element }: {
    element: TSuggestionElement;
}): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=block-suggestion.d.ts.map