/**
 * TYPES/CONSTANTS FOR CASES DATA
 */
export const CasesLayout = 'API | Cases';

export const CasesPeoplePortal = 'api.cases.client';

export type CaseFieldData = {
  ID: string;
  Case_Number: string;
  Case_Status: string;
  Date: string;
  Client_People_ID: string;
};

export type CasesPeoplePortalRecord = {
  recordId: string;
  'cases_People::Name_Last_First_Middle': string;
  'cases_people_Contact_Data::Address': string;
  'cases_people_Contact_Data::City': string;
  'cases_people_Contact_Data::State': string;
  'cases_people_Contact_Data::Zip': string;
  'cases_people_Contact_Data::County': string;
  'cases_people_Contact_Data::Phone': string;
  'cases_people_Contact_Data::Email': string;
  modId: string;
};

export type CasesPortalData = {
  'api.cases.client': CasesPeoplePortalRecord[];
};

export type CasesPeoplePortalInfo = {
  portalObjectName: string;
  database: string;
  table: string;
  foundCount: number;
  returnedCount: number;
};

export type CaseRecord = {
  fieldData: CaseFieldData;
  portalData: CasesPortalData;
  recordId: string;
  modId: string;
  portalDataInfo: CasesPeoplePortalInfo[];
};

/**
 * GENERAL FILEMAKER RECORD TYPE
 */
export type FileMakerRecord<T> = {
  fieldData: T;
  recordId: string;
  modId: string;
};
