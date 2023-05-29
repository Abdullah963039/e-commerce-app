//? Admin All Products Page

import { Outlet } from "react-router-dom";
import { AdminDashboard } from "../../components/Admin";

export default function AdminPage() {
  return (
    <div className="bg-slate-200">
      <div className="container grid min-h-[calc(100vh-65px)] grid-cols-12 gap-4 py-4">
        <AdminDashboard />
        <main className="col-span-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
