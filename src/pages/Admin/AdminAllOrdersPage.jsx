//? Admin Manage All Orders

import { UserOrdersHook } from "../../Listeners/Orders";
import { AdminAllOrdersContainer } from "../../components/Admin";
import { Pagination } from "../../components/Utility";

export default function AdminAllOrdersPage() {
  const { getPageNumber, numberOfPages, orders } = UserOrdersHook();
  return (
    <div>
      <h3 className="mb-3 text-xl font-bold">ادارة جميع الطلبات</h3>
      <AdminAllOrdersContainer orders={orders} />

      {numberOfPages > 1 && (
        <Pagination totalPages={numberOfPages} onClick={getPageNumber} />
      )}
    </div>
  );
}
