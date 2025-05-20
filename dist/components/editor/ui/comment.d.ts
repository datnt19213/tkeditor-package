import * as React from 'react';
import type { Value } from '@udecode/plate';
export declare const formatCommentDate: any;
export interface TComment {
    id: string;
    contentRich: Value;
    createdAt: Date;
    discussionId: string;
    isEdited: boolean;
    userId: string;
}
export declare function Comment(props: {
    comment: TComment;
    discussionLength: number;
    editingId: string | null;
    index: number;
    setEditingId: React.Dispatch<React.SetStateAction<string | null>>;
    documentContent?: string;
    showDocumentContent?: boolean;
    onEditorClick?: () => void;
}): import("react/jsx-runtime").JSX.Element;
interface CommentMoreDropdownProps {
    comment: TComment;
    dropdownOpen: boolean;
    setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setEditingId: React.Dispatch<React.SetStateAction<string | null>>;
    onCloseAutoFocus?: () => void;
    onRemoveComment?: () => void;
}
export declare function CommentMoreDropdown(props: CommentMoreDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=comment.d.ts.map