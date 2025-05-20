import { type ExtendConfig, type Path } from '@udecode/plate';
import { type BaseSuggestionConfig } from '@udecode/plate-suggestion';
export type SuggestionConfig = ExtendConfig<BaseSuggestionConfig, {
    activeId: string | null;
    hoverId: string | null;
    uniquePathMap: Map<string, Path>;
}>;
export declare const suggestionPlugin: any;
//# sourceMappingURL=suggestion-plugin.d.ts.map