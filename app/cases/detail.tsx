import { getCaseRecord } from "server/records/getCase";
import type { Route } from "./+types/detail";
import { useState } from "react";
import type { CasesProgramsPortalRecord } from "server/types";

export async function loader({ params }: Route.LoaderArgs) {
  const { recordId } = params;

  const fileMakerRecord = await getCaseRecord(recordId);

  return fileMakerRecord;
}

export default function CasesDetail({
  params,
  loaderData,
}: Route.ComponentProps) {
  const [selectedProgram, setSelectedProgram] =
    useState<CasesProgramsPortalRecord | null>(null);

  const data = loaderData;
  const clientData = data.portalData["api.cases.client"][0];
  const formattedAddress = `${clientData["cases_people_Contact_Data::Address"]}, ${clientData["cases_people_Contact_Data::City"]} ${clientData["cases_people_Contact_Data::State"]} ${clientData["cases_people_Contact_Data::Zip"]}`;
  const programsData = data.portalData["api.cases.programs"];

  return (
    <div className=''>
      <div className='w-full p-3 border-b'>
        <h1 className='text-xl font-bold'>
          {clientData["cases_People::Name_Last_First_Middle"]}
        </h1>
        <div className='flex items-center gap-2 text-sm'>
          <span>{data.fieldData.Case_Number}</span>
          <span className='text-gray-500'>{formattedAddress}</span>
        </div>
      </div>
      <div className='text-sm p-3 max-w-96 space-y-1'>
        <h2 className='text-sky-900 font-bold mb-1'>Programs</h2>
        {programsData.map((program) => (
          <button
            key={program.recordId}
            className={`flex items-center justify-between w-full hover:bg-black/5 px-2 p-1 rounded active:bg-black/15 ${
              selectedProgram === program
                ? "bg-black/10 font-bold hover:bg-black/10"
                : ""
            }`}
            onClick={() => setSelectedProgram(program)}
          >
            <span>{program["cases_Programs::Program_Name"]}</span>
            <span>{program["cases_Programs::Program_Status"]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
