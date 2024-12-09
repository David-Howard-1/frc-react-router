import {
  Plus,
  PlusSquare,
  Search,
  Settings,
  Settings2,
  User,
} from 'lucide-react';
import { Form } from 'react-router';

export default function TopNav() {
  return (
    <div className="sticky top-0 w-full p-2 flex items-center bg-gray-300">
      <Form method="post" className="flex items-center gap-1">
        <input
          name="searchCases"
          placeholder="Search Cases..."
          className="p-1 px-2 min-w-64 rounded text-sm focus:outline outline-1 outline-sky-300 focus:shadow shadow-sky-400"
        />
        <button type="submit">
          <Search />
        </button>
      </Form>
      <button className="ml-auto mr-3 text-sky-900 hover:bg-black/5 rounded-md p-1 active:bg-black/10">
        <Plus size={30} />
      </button>
    </div>
  );
}
