import { UserOrdersHook } from "../../Listeners/Orders";
import { Pagination } from "../Utility";
import { UserOrdersContiner } from "./";

export default function UserManageOrders() {
  const { numberOfPages, orders, getPageNumber } = UserOrdersHook();

  return (
    <>
      {orders.length > 0 && (
        <h2 className="mb-4 py-2 text-2xl font-bold">
          عدد الطلبات : <span className="text-3xl">{orders.length}</span>
        </h2>
      )}

      {orders.length === 0 ? (
        <h1 className="my-8 text-center text-3xl">لا يوجد طلبات لعرضها</h1>
      ) : (
        orders.map((order) => (
          <div key={order["_id"]}>
            <UserOrdersContiner order={order} />
          </div>
        ))
      )}
      {numberOfPages > 1 && (
        <Pagination totalPages={numberOfPages} onClick={getPageNumber} />
      )}
    </>
  );
}
