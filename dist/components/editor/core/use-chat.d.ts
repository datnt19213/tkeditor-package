import * as React from 'react';
export declare const useChat: () => {
    _abortFakeStream: () => void;
    messages: import("ai").UIMessage[];
    error: undefined | Error;
    append: (message: import("@ai-sdk/react").Message | import("@ai-sdk/react").CreateMessage, chatRequestOptions?: import("ai").ChatRequestOptions) => Promise<string | null | undefined>;
    reload: (chatRequestOptions?: import("ai").ChatRequestOptions) => Promise<string | null | undefined>;
    stop: () => void;
    experimental_resume: () => void;
    setMessages: (messages: import("@ai-sdk/react").Message[] | ((messages: import("@ai-sdk/react").Message[]) => import("@ai-sdk/react").Message[])) => void;
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleSubmit: (event?: {
        preventDefault?: () => void;
    }, chatRequestOptions?: import("ai").ChatRequestOptions) => void;
    metadata?: Object;
    isLoading: boolean;
    status: "submitted" | "streaming" | "ready" | "error";
    data?: import("ai").JSONValue[];
    setData: (data: import("ai").JSONValue[] | undefined | ((data: import("ai").JSONValue[] | undefined) => import("ai").JSONValue[] | undefined)) => void;
    id: string;
    addToolResult: ({ toolCallId, result, }: {
        toolCallId: string;
        result: any;
    }) => void;
};
//# sourceMappingURL=use-chat.d.ts.map