import { getCaseRecord } from "server/records/getCase";
import type { Route } from "./+types/detail";
import { useState } from "react";
import type { CaseRecord, CasesProgramsPortalRecord } from "server/types";
import { useLoaderData } from "react-router";
import { DetailHeader } from "~/components/DetailHeader";

export async function loader({ params }: Route.LoaderArgs) {
  const { recordId } = params;

  const fileMakerRecord = await getCaseRecord(recordId);

  return fileMakerRecord;
}

export default function CasesDetail() {
  const [selectedProgram, setSelectedProgram] =
    useState<CasesProgramsPortalRecord | null>(null);

  const data = useLoaderData() as CaseRecord;
  const programsData = data.portalData["api.cases.programs"];

  return (
    <div className=''>
      <DetailHeader {...data} />
      <div className='text-sm p-3 max-w-96 space-y-1 rounded-md shadow-md'>
        <h2 className='text-sky-900 font-bold mb-1'>Programs</h2>
        {programsData.map((program) => (
          <button
            key={program.recordId}
            className={`flex items-center justify-between w-full hover:bg-black/5 px-2 p-1 rounded active:bg-black/15 ${
              selectedProgram === program
                ? "bg-sky-700 font-bold hover:bg-sky-700 text-white shadow"
                : ""
            }`}
            onClick={() => setSelectedProgram(program)}
          >
            <span>{program["cases_Programs::Program_Name"]}</span>
            <span>{program["cases_Programs::Program_Status"]}</span>
          </button>
        ))}
      </div>
      <div></div>
    </div>
  );
}
