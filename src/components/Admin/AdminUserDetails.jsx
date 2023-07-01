import { Dropdown } from "primereact/dropdown";

const OPTIONS = [
  {
    name: "قيد التنفيذ",
    value: "wait",
  },
  {
    name: "تم الانتهاء",
    value: "done",
  },
  {
    name: "الغاء",
    value: "cancel",
  },
];

export default function AdminUserDetails({ user, isDelivered, isPaid }) {
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
      <div className="my-2 flex justify-evenly gap-4">
        <Dropdown
          options={OPTIONS}
          optionLabel="name"
          className="w-3/5 !border-none py-0 !outline-none ring-1 ring-slate-200 focus-within:ring-slate-600 hover:ring-slate-600"
          placeholder="حالة الطلب"
        />
        <button className="basis-1/5 rounded-lg bg-slate-800 px-6 text-white hover:bg-slate-900">
          حفظ
        </button>
      </div>
    </>
  );
}
