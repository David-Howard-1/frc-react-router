import { useEffect, useState } from 'react';
import { authenticate } from 'server/auth';

export function useFileMakerAuth() {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const authToken = await authenticate();
        setToken(authToken);
      } catch (err) {
        console.error('Authentication failed: ', err);
        setError('Failed to authenticate');
      }
    };

    fetchToken();
  }, []);

  return { token, error };
}
