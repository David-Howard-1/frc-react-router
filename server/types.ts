export type CaseFieldData = {
  ID: string;
  Case_Number: string;
  Case_Status: string;
  Date: string;
  Name_Last_First_Middle: string;
  Street: string;
  City: string;
  State: string;
  Client_People_ID: string;
  Zip: string;
};

export type FileMakerRecord<T> = {
  fieldData: T;
  recordId: string;
  modId: string;
};
