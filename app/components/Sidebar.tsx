import { NavLink } from 'react-router';

export default function Sidebar() {
  return (
    <nav className="sticky top-0 left-0 h-screen sm:min-w-52 bg-sky-900 flex flex-col p-2">
      <h1>Sidebar</h1>
      <NavLink
        to="/cases"
        className={({ isActive }) =>
          isActive ? 'nav-link_active' : 'nav-link'
        }
      >
        Cases
      </NavLink>
      <NavLink
        to="/people"
        className={({ isActive }) =>
          isActive ? 'nav-link_active' : 'nav-link'
        }
      >
        People
      </NavLink>
    </nav>
  );
}
