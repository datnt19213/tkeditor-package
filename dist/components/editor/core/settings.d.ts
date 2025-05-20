import * as React from 'react';
export interface Model {
    label: string;
    value: string;
}
export interface SettingsContextType {
    keys: Record<string, string>;
    model: Model;
    setKey: (service: string, key: string) => void;
    setModel: (model: Model) => void;
}
export declare const models: Model[];
export declare function SettingsProvider({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useSettings(): SettingsContextType;
export declare function SettingsDialog(): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=settings.d.ts.map