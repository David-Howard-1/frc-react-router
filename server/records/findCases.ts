import { AxiosError } from 'axios';
import api from '../api';
import { authenticate } from '../auth';
import type { CaseRecord } from '../types';
import { CasesLayout, CasesPeoplePortal } from '../types';

export async function findCasesRecords(findRequest: string) {
  const token = await authenticate(
    process.env.FILEMAKER_USERNAME || '',
    process.env.FILEMAKER_PASSWORD || ''
  );

  if (!token) {
    throw new AxiosError('Unable to authenticate with FileMaker', '405');
  }

  const response = await api.post(
    `/databases/${process.env.FM_DATABASE_NAME}/layouts/${CasesLayout}/_find`,
    {
      query: [
        {
          Case_Number: findRequest,
          Case_Status: findRequest,
        },
      ],
      portal: [CasesPeoplePortal],
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status !== 200) {
    throw new AxiosError(response.statusText, String(response.status));
  }

  //   const records: FileMakerRecord<CaseFieldData>[] = response.data.response.data;
  const records: CaseRecord[] = response.data.response.data;

  return records;
}
