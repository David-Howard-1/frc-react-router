import type { CaseRecord, CasesPeoplePortalRecord } from "server/types";

export function DetailHeader(data: CaseRecord) {
  const clientData = data.portalData["api.cases.client"][0];
  const formattedAddress = `${clientData["cases_people_Contact_Data::Address"]}, ${clientData["cases_people_Contact_Data::City"]} ${clientData["cases_people_Contact_Data::State"]} ${clientData["cases_people_Contact_Data::Zip"]}`;
  return (
    <div className='w-full p-3 border-b'>
      <h1 className='text-xl font-bold'>
        {clientData["cases_People::Name_Last_First_Middle"]}
      </h1>
      <div className='flex items-center gap-2 text-sm'>
        <span>{data.fieldData.Case_Number}</span>
        <span className='text-gray-500'>{formattedAddress}</span>
      </div>
    </div>
  );
}
