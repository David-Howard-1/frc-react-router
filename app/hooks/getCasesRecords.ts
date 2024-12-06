import { useState, useEffect } from 'react';
import { getFileMakerRecords } from '../server/records';
import type { FileMakerRecord } from '~/server/types';

export const useFetchFileMaker = <T>(layoutName: string) => {
  const [data, setData] = useState<FileMakerRecord<T>[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getFileMakerRecords<T>(layoutName);
        setData(response);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [layoutName]);

  return { data, loading, error };
};
