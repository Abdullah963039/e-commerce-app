//? Sidebar Of Admin

// hooks
import { NavLink } from "react-router-dom";

export default function AdminDashboard() {
  const NAVLINK_STYLE =
    "w-full border-b border-slate-300 py-4 duration-150 hover:bg-slate-700 hover:text-slate-50 navlink";

  return (
    <aside className="relative col-span-2 overflow-clip rounded-lg ">
      <nav className="sticky top-8">
        <ul className="flex flex-col items-center overflow-hidden rounded-lg bg-white text-center">
          <NavLink to="/admin/orders" className={NAVLINK_STYLE}>
            <li title="ادارة الطلبات">ادارة الطلبات</li>
          </NavLink>
          <NavLink to="/admin" end className={NAVLINK_STYLE}>
            <li title="ادارة المنتجات">ادارة المنتجات</li>
          </NavLink>
          <NavLink to="/admin/add-brand" className={NAVLINK_STYLE}>
            <li title="اضف ماركة">اضف ماركة</li>
          </NavLink>
          <NavLink to="/admin/add-category" className={NAVLINK_STYLE}>
            <li title="اضف تصنيف">اضف تصنيف</li>
          </NavLink>
          <NavLink to="/admin/add-sub-category" className={NAVLINK_STYLE}>
            <li title="اضف تصنيف فرعي">اضف تصنيف فرعي</li>
          </NavLink>
          <NavLink to="/admin/add-product" className={NAVLINK_STYLE}>
            <li title="اضف منتج">اضف منتج</li>
          </NavLink>
        </ul>
      </nav>
    </aside>
  );
}
