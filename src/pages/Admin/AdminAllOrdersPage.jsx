//? Admin Manage All Orders

import { AdminOrderItem } from "../../components/Admin";
import { Pagination } from "../../components/Utility";

export default function AdminAllOrdersPage() {
  return (
    <div>
      <h3 className="mb-3 text-xl font-bold">ادارة جميع الطلبات</h3>
      <div className="mb-4 flex flex-col gap-4">
        <AdminOrderItem />
        <AdminOrderItem />
        <AdminOrderItem />
        <AdminOrderItem />
      </div>

      <Pagination />
    </div>
  );
}
