import AdminOrderItem from "./AdminOrderItem";

export default function AdminAllOrdersContainer({ orders }) {
  return (
    <div className="mb-4 flex flex-col gap-4">
      {orders.length > 0 ? (
        orders.map((order) => <AdminOrderItem key={order.id} order={order} />)
      ) : (
        <h2 className="my-8 text-center text-3xl">لا يوجد طلبات لعرضها ... </h2>
      )}
    </div>
  );
}
