export default function AdminUserDetails() {
  return (
    <div className="flex w-full flex-col gap-2 rounded-lg bg-white p-2">
      <h3 className="mb-3 text-xl font-bold">تفاصيل العميل</h3>
      {/* User Informations */}
      <div className="flex flex-col gap-2 px-2">
        <p>
          الاسم: <span className="text-slate-500">علي علي</span>
        </p>
        <p>
          رقم الهاتف: <span className="text-slate-500">0651651620</span>
        </p>
        <p>
          البريد الالكتروني:{" "}
          <span className="text-slate-500">UserName@User.com</span>
        </p>
      </div>
      {/* Total Orders Price */}
      <div className="border-y border-slate-200 p-2 text-center">65165</div>
      {/* Order Status */}
      <div className="flex items-center justify-center gap-4 py-2">
        <select
          name="orderStatus"
          className="w-[400px] border border-slate-300 bg-slate-100 py-2 text-center font-semibold text-slate-700 outline-none"
        >
          <option value="status">حالة الطلب</option>
          <option value="pending">قيد التنفيذ</option>
          <option value="done">تم الانتهاء</option>
          <option value="cancel">إلغاء</option>
        </select>
        <button className="btn bg-slate-800 px-4 py-1 text-white">حفظ</button>
      </div>
    </div>
  );
}
