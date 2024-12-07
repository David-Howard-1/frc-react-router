import { getFileMakerRecords } from "server/records";
import type { Route } from "./+types/list";

export async function loader() {
  // Load cases from TOP FM server
  // const cases = await getFileMakerRecords<CaseData>("API | Cases");
  // return cases;
}

export default function CasesList({ loaderData }: Route.ComponentProps) {
  // Get cases from loader data
  // const cases = loaderData....

  return (
    <main>
      <h1>Cases List</h1>
      <div className='flex flex-col gap-4'>{}</div>
    </main>
  );
}
