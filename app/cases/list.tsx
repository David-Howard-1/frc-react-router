import type { Route } from './+types/list';
import { getCasesRecords } from 'server/records/getCases';
import {
  NavLink,
  useLoaderData,
  useNavigate,
  useNavigation,
} from 'react-router';
import type { CaseRecord } from 'server/types';

export async function loader() {
  // Load cases from TOP FM server
  const data = await getCasesRecords();

  return data;
}

export default function CasesList({ loaderData }: Route.ComponentProps) {
  // Get cases from loader data
  // const data = loaderData;
  const data = useLoaderData() as CaseRecord[];

  return (
    <div className="relative">
      <div className="flex flex-col text-sm">
        {data.map((record) => {
          const { recordId } = record;
          const { ID, Case_Number, Case_Status, Date } = record.fieldData;
          const clientData = record.portalData['api.cases.client'][0];
          const clientName = clientData['cases_People::Name_Last_First_Middle'];

          const formattedAddress = `${clientData['cases_people_Contact_Data::Address']}, ${clientData['cases_people_Contact_Data::City']} ${clientData['cases_people_Contact_Data::State']} ${clientData['cases_people_Contact_Data::Zip']}`;

          return (
            <NavLink
              to={`/cases/${recordId}`}
              key={ID}
              className={`flex items-center gap-4 w-full p-2 px-5 transition-all odd:bg-gray-100 even:hover:bg-black/5 odd:hover:bg-black/10 active:bg-black/15`}
            >
              <div className="flex flex-col w-28">
                <span className="font-bold">{Case_Number}</span>
                <span className="text-gray-400 font-bold text-xs">{Date}</span>
              </div>
              <div className="flex flex-col">
                <span className="">{clientName}</span>
                <span className="text-gray-400 text-xs">
                  {/* 123 Test Drive, Birmingham AL, 35242 */}
                  {formattedAddress}
                </span>
              </div>
              <div className="ml-auto">
                <span
                  className={`font-semibold ${
                    Case_Status === 'Open' ? 'text-green-500' : 'text-gray-600'
                  }`}
                >
                  {Case_Status}
                </span>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
