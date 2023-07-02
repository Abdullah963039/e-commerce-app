// components
import { Dropdown } from "primereact/dropdown";
import { AdminUserDetailsHook } from "../../../Listeners/Orders";
import { LoadingIcon } from "../../Utility";
// icons
import { BsTruck, BsCashCoin } from "react-icons/bs";

const dropdownClassName = (condition) => {
  return ` w-4/5 !border-none text-center !outline-none ring-1 ${
    condition
      ? "ring-emerald-600 focus-within:ring-emerald-700"
      : "ring-slate-200 focus-within:ring-slate-600 hover:ring-slate-600"
  }`;
};

export default function AdminUserDetails({ user, isDelivered, isPaid }) {
  const {
    orderDeliver,
    orderPay,
    DELIVER_OPTIONS,
    PAID_OPTIONS,
    handleChangeDeliveredStatus,
    handleChangePayStatus,
    handleUpdateOrderToDeliver,
    handleUpdateOrderToPaid,
    loading,
  } = AdminUserDetailsHook({
    isDelivered,
    isPaid,
  });

  return (
    <>
      <div className="flex w-full flex-col divide-y rounded-lg bg-white p-4 shadow-md">
        <h3 className="mb-3 text-xl font-bold">تفاصيل العميل</h3>
        {/* User Informations */}
        <div className="flex flex-col gap-2 p-2">
          {/* Username */}
          <p className="flex items-center gap-2 text-slate-600">
            <span className="basis-1/4 text-center">الاسم</span>{" "}
            <span className="font-bold text-slate-900">{user.name}</span>
          </p>
          {/* User Phone Number */}
          <p className="flex items-center gap-2 text-slate-600">
            <span className="basis-1/4 text-center">رقم الهاتف</span>
            <span className="font-bold text-slate-900">{user.phone}</span>
          </p>
          {/* User Email */}
          <p className="flex items-center gap-2 text-slate-600">
            <span className="basis-1/4 text-center">البريد الالكتروني</span>
            <span className="font-bold text-slate-900">{user.email}</span>
          </p>
        </div>
      </div>

      {/* Order Status */}
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        {/* Delivered Status */}
        <div className="my-2 flex justify-evenly gap-4 sm:basis-1/2">
          <Dropdown
            dir="ltr"
            value={orderDeliver}
            disabled={isDelivered == true}
            tooltip="حالة التوصيل"
            options={DELIVER_OPTIONS}
            onChange={handleChangeDeliveredStatus}
            optionLabel="title"
            optionValue="value"
            dropdownIcon={
              <BsTruck className={isDelivered && "text-xl text-emerald-700"} />
            }
            className={dropdownClassName(isDelivered)}
          />
          {orderDeliver !== isDelivered && (
            <button
              onClick={handleUpdateOrderToDeliver}
              className="basis-1/5 rounded-lg bg-slate-800 px-6 text-white hover:bg-slate-900"
            >
              حفظ
            </button>
          )}
        </div>

        {/* Paid Status */}
        <div className="my-2 flex justify-evenly gap-4 sm:basis-1/2">
          <Dropdown
            dir="ltr"
            value={orderPay}
            disabled={isPaid == true}
            tooltip="حالة الدفع"
            options={PAID_OPTIONS}
            onChange={handleChangePayStatus}
            optionLabel="title"
            optionValue="value"
            dropdownIcon={
              <BsCashCoin className={isPaid && "text-xl text-emerald-700"} />
            }
            className={dropdownClassName(isPaid)}
          />
          {orderPay != isPaid && (
            <button
              onClick={handleUpdateOrderToPaid}
              className="basis-1/5 rounded-lg bg-slate-800 px-6 text-white hover:bg-slate-900"
            >
              {loading ? <LoadingIcon /> : "حفظ"}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
