import { Outlet } from 'react-router';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';

export default function Layout() {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <main className="w-full">
        <TopNav />
        <Outlet />
      </main>
    </div>
  );
}
