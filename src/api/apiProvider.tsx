import React, {
  createContext,
  useContext,
} from 'react';

export type ResourceConfig = {
  [key: string]: string; // ví dụ: users: "/users"
};

export type ApiContextProps = {
  host: string;
  resources: ResourceConfig;
};

const ApiContext = createContext<ApiContextProps | undefined>(undefined);

export const ApiProvider: React.FC<{
  children: React.ReactNode;
  host: string;
  resources: ResourceConfig;
}> = ({ children, host, resources }) => {
  return (
    <ApiContext.Provider value={{ host, resources }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) throw new Error('useApiContext must be used inside ApiProvider');
  return context;
};