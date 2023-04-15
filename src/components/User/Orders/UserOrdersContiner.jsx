import React from "react";
import UserOrderList from "./UserOrderList";

export default function UserOrdersContiner() {
  return (
    <>
      <div className="my-4 rounded-lg bg-white p-2">
        {/* Order Id */}
        <div className="mb-2 text-xl font-bold">طلب رقم No#203651</div>
        {/* Order List */}
        <div>
          <UserOrderList />
        </div>
        {/* Order Status */}
        <div className="flex items-center justify-between p-2">
          {/* Status */}
          <p>
            الحالة<span className="text-slate-700">قيد التنفيذ</span>
          </p>
          {/* Order Price */}
          <p className="font-bold">200 جنيه</p>
        </div>
      </div>
    </>
  );
}
