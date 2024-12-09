import { getFileMakerRecords } from "server/records";
import type { Route } from "./+types/list";
import { getFmAuthToken } from "./getFmAuthToken";
import { authenticate } from "server/auth";
import type { FileMakerRecord } from "server/types";

export async function loader() {
  // Load cases from TOP FM server
  const response = await getFileMakerRecords("API | Cases");

  return response;

  // const token = await getFmAuthToken();
  // const token = await authenticate(
  //   process.env.FILEMAKER_USERNAME || "",
  //   process.env.FILEMAKER_PASSWORD || ""
  // );

  // console.log("FM Auth Token: ", token);
}

export default function CasesList({ loaderData }: Route.ComponentProps) {
  // Get cases from loader data
  // const cases = loaderData....
  const data = loaderData;
  console.log(JSON.stringify(data));

  return (
    <main>
      <h1>Cases List</h1>
      <div className='flex flex-col gap-4'>{}</div>
    </main>
  );
}
