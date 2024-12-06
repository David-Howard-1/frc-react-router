export type FileMakerRecord<FieldDataType> = {
  fieldData: FieldDataType;
  recordId: string;
  modId: string;
};

export type CaseData = {
  id: string;
  clientPeopleId: string;
  caseNumber: string;
  caseStatus: string;
  nameLastFirstMiddle: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
};
