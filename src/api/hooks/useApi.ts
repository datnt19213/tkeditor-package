import {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

import { useApiContext } from '../apiProvider';

export const useApi = <T>(
  resourceKey: string,
  params?: Record<string, any>,
  options?: { skip?: boolean }
) => {
  const { host, resources } = useApiContext();
  const endpoint = resources[resourceKey];
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!endpoint || options?.skip) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${host}${endpoint}`, { params });
        setData(res.data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [host, endpoint, JSON.stringify(params)]);

  return { data, loading, error };
};
