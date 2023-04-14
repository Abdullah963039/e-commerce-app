import React from "react";
import CartItem from "../../components/Cart/CartItem";
import AdminUserDetails from "../../components/Admin/AdminUserDetails";

export default function AdminOrderDetailsPage() {
  return (
    <div>
      <h3 className="mb-3 text-xl font-bold">تفاصيل الطلب رقم #65116 </h3>
      <div className="mb-4 flex flex-col gap-2">
        <CartItem />
        <CartItem />
      </div>
      <>
        <AdminUserDetails />
      </>
    </div>
  );
}
