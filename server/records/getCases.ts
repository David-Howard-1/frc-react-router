import { AxiosError } from 'axios';
import api from '../api';
import { authenticate } from '../auth';
import type { CaseRecord } from '../types';
import { CasesLayout, CasesPeoplePortal } from '../types';

export async function getCasesRecords() {
  const token = await authenticate(
    process.env.FILEMAKER_USERNAME || '',
    process.env.FILEMAKER_PASSWORD || ''
  );

  if (!token) {
    throw new AxiosError('Unable to authenticate with FileMaker', '405');
  }

  const response = await api.get(
    `/databases/${process.env.FM_DATABASE_NAME}/layouts/${CasesLayout}/records?_offset=1932&_limit=1942`,
    // `/databases/${process.env.FM_DATABASE_NAME}/layouts/${CasesLayout}/records?_offset=1&_limit=100&portal=[${CasesPeoplePortal}]&_offset.${CasesPeoplePortal}=1&_limit.${CasesPeoplePortal}=1`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (response.status !== 200) {
    throw new AxiosError(response.statusText, String(response.status));
  }

  //   const records: FileMakerRecord<CaseFieldData>[] = response.data.response.data;
  const records: CaseRecord[] = response.data.response.data;

  return records;
}
