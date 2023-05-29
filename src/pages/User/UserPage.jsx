//? User Page

import { Outlet } from "react-router-dom";
import { UserDashboard } from "../../components/User";

export default function UserPage() {
  return (
    <div className="bg-slate-200">
      <div className="container grid min-h-[calc(100vh-65px)] grid-cols-12 gap-4 py-4">
        <UserDashboard />
        <main className="col-span-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
