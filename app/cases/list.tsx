import { getFileMakerRecords } from '~/server/records';
import type { Route } from './+types/list';
import type { CaseData } from '~/server/types';

// export async function loader() {
//   const cases = await getFileMakerRecords<CaseData>('API | Cases');
//   return cases;
// }

export default function CasesList({ loaderData }: Route.ComponentProps) {
  const cases = loaderData;
  console.log(JSON.stringify(cases));

  return (
    <main>
      <h1>Cases List</h1>
      <div className="flex flex-col gap-4">{}</div>
    </main>
  );
}
