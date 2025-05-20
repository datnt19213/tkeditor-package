import React from 'react';
export type ResourceConfig = {
    [key: string]: string;
};
export type ApiContextProps = {
    host: string;
    resources: ResourceConfig;
};
export declare const ApiProvider: React.FC<{
    children: React.ReactNode;
    host: string;
    resources: ResourceConfig;
}>;
export declare const useApiContext: () => ApiContextProps;
//# sourceMappingURL=apiProvider.d.ts.map