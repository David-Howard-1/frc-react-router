import { AxiosError } from 'axios';
import api from '../api';
import { authenticate } from '../auth';
import type { CaseRecord } from '../types';
import { CasesLayout, CasesPeoplePortal } from '../types';

export async function getCaseRecord(recordId: string) {
  const token = await authenticate(
    process.env.FILEMAKER_USERNAME || '',
    process.env.FILEMAKER_PASSWORD || ''
  );

  if (!token) {
    throw new AxiosError('Unable to authenticate with FileMaker', '405');
  }

  const response = await api.get(
    `/databases/${process.env.FM_DATABASE_NAME}/layouts/${CasesLayout}/records/${recordId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (response.status !== 200) {
    throw new AxiosError(response.statusText, String(response.status));
  }

  //   const records: FileMakerRecord<CaseFieldData>[] = response.data.response.data;
  const record: CaseRecord = response.data.response.data[0];
  console.log(record);

  return record;
}
