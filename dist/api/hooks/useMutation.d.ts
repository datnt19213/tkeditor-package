import { Method } from 'axios';
export type MutationOptions = {
    method?: Method;
    onSuccess?: (data: any) => void;
    onError?: (err: any) => void;
};
export declare const useApiMutation: (resourceKey: string, options?: MutationOptions) => {
    mutate: (body?: any, extraParams?: Record<string, any>) => Promise<any>;
    loading: boolean;
    error: any;
    data: any;
};
//# sourceMappingURL=useMutation.d.ts.map