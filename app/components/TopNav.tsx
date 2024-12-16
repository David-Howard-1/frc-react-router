import { Plus, Search } from 'lucide-react';
import { Form } from 'react-router';
import type { Route } from '../+types/root';

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
}

export default function TopNav() {
  return (
    <div className="sticky top-0 w-full p-2 flex items-center bg-slate-200 border-b shadow">
      <Form className="flex items-center gap-1">
        <input
          name="searchCases"
          placeholder="Search..."
          className="p-1 px-2 min-w-64 rounded text-sm border focus:outline outline-1 outline-sky-300 focus:shadow shadow-sky-400"
        />
        <button type="submit" className="text-slate-400">
          <Search size={20} />
        </button>
      </Form>
      <button className="ml-auto mr-3 text-sky-900 hover:bg-black/5 rounded-md p-1 active:bg-black/10">
        <Plus size={30} />
      </button>
    </div>
  );
}
