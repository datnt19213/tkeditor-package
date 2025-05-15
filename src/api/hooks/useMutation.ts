import { useState } from 'react';

import axios, { Method } from 'axios';

import { useApiContext } from '../apiProvider';

export type MutationOptions = {
  method?: Method;
  onSuccess?: (data: any) => void;
  onError?: (err: any) => void;
};

export const useApiMutation = (resourceKey: string, options?: MutationOptions) => {
  const { host, resources } = useApiContext();
  const endpoint = resources[resourceKey];

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  const mutate = async (body?: any, extraParams?: Record<string, any>) => {
    setLoading(true);
    try {
      const res = await axios.request({
        url: `${host}${endpoint}`,
        method: options?.method || 'POST',
        data: body,
        params: extraParams,
      });

      setData(res.data);
      setError(null);
      options?.onSuccess?.(res.data);
      return res.data;
    } catch (err) {
      setError(err);
      options?.onError?.(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error, data };
};
