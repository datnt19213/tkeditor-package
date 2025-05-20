import type { ExtendConfig, Path } from '@udecode/plate';
import { type BaseCommentsConfig } from '@udecode/plate-comments';
export type CommentsConfig = ExtendConfig<BaseCommentsConfig, {
    activeId: string | null;
    commentingBlock: Path | null;
    hotkey: string[];
    hoverId: string | null;
    uniquePathMap: Map<string, Path>;
}>;
export declare const commentsPlugin: any;
//# sourceMappingURL=comments-plugin.d.ts.map