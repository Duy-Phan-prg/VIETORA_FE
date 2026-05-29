import { Outlet } from 'react-router-dom';

/** Auth layout — minimal shell for login / register pages */
export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Outlet />
    </div>
  );
}
