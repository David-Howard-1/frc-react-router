import { Outlet, useNavigation } from 'react-router';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';

export default function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <main className="w-full relative">
        <TopNav />
        <Outlet />
        {isLoading ? (
          <div className="h-full w-full absolute top-0 left-0 bg-gray-100/25 z-50 transition-all"></div>
        ) : null}
      </main>
    </div>
  );
}
