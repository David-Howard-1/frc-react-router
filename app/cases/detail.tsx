import { getCaseRecord } from 'server/records/getCase';
import type { Route } from './+types/detail';

export async function loader({ params }: Route.LoaderArgs) {
  const { recordId } = params;

  const fileMakerRecord = await getCaseRecord(recordId);

  return fileMakerRecord;
}

export default function CasesDetail({
  params,
  loaderData,
}: Route.ComponentProps) {
  const data = loaderData;

  return (
    <div className="h-[110vh]">
      <div className="w-full p-3 border-b">
        <h1 className="text-xl font-bold">
          {
            data.portalData['api.cases.client'][0][
              'cases_People::Name_Last_First_Middle'
            ]
          }
        </h1>
        <h1>{data.fieldData.Case_Number}</h1>
      </div>
    </div>
  );
}
