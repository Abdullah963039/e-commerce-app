import React from "react";
import { NavLink } from "react-router-dom";

export default function UserDashboard() {
  const NAVLINK_STYLE =
    "w-full border-b border-slate-300 py-4 duration-150 hover:bg-slate-700 hover:text-slate-50 navlink";

  return (
    <aside className="relative col-span-2 overflow-clip rounded-lg">
      <nav className="sticky top-0">
        <ul className="flex flex-col items-center overflow-hidden rounded-lg bg-white text-center">
          <NavLink to="/user/orders" className={NAVLINK_STYLE}>
            <li title="ادارة الطلبات">ادارة الطلبات</li>
          </NavLink>
          <NavLink to="/user/favorites" className={NAVLINK_STYLE}>
            <li title="قائمة المفضلة">قائمة المفضلة</li>
          </NavLink>
          <NavLink to="/user/address" className={NAVLINK_STYLE}>
            <li title="العناوين الشخصية">العناوين الشخصية</li>
          </NavLink>
          <NavLink to="/user" end className={NAVLINK_STYLE}>
            <li title="الملف الشخصي">الملف الشخصي</li>
          </NavLink>
        </ul>
      </nav>
    </aside>
  );
}
