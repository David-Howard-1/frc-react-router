import { useEffect, useState } from 'react';
import { getCasesRecords } from 'server/records/getCases';
import type { CaseRecord } from 'server/types';

export function useGetCases() {
  const [records, setRecords] = useState<CaseRecord[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        setIsLoading(true);
        const fetchedCases = await getCasesRecords();
        setRecords(fetchedCases);
      } catch (err) {
        console.error('Error fetching cases: ', err);
        setError('Failed to fetch cases.');
      } finally {
        setIsLoading(false);
      }

      fetchCases();
    };
  });

  return { records, error, isLoading };
}
