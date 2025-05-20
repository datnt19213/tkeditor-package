import type { TComment } from '../ui/comment';
export interface TDiscussion {
    id: string;
    comments: TComment[];
    createdAt: Date;
    isResolved: boolean;
    userId: string;
    documentContent?: string;
}
export declare const discussionsData: TDiscussion[];
export declare const avatarUrl: any;
export declare const discussionPlugin: any;
//# sourceMappingURL=discussion-plugin.d.ts.map