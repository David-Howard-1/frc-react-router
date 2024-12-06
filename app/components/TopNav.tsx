import { Settings, Settings2, User } from 'lucide-react';

export default function TopNav() {
  return (
    <div className="sticky top-0 w-full bg-gray-100 p-3 px-10 flex items-center justify-end">
      <span>
        <User />
      </span>
    </div>
  );
}
