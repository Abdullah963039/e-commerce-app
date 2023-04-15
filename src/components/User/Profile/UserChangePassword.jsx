//? User: Change Password Page

export default function UserChangePassword() {
  return (
    <>
      <div className="mt-8 flex w-1/2 flex-col gap-3">
        <h1 className="text-xl font-bold">تغيير كلمة المرور</h1>
        <input
          type="password"
          required
          placeholder="كلمة المرور القديمة"
          className="w-full rounded-md border border-slate-300 p-2 outline-none placeholder:text-slate-500"
        />
        <input
          type="password"
          required
          placeholder="كلمة المرور الجديدة"
          className="w-full rounded-md border border-slate-300 p-2 outline-none placeholder:text-slate-500"
        />
        <button className="btn self-end bg-slate-900 px-4 py-2 text-white hover:bg-slate-950">
          حفظ التغييرات
        </button>
      </div>
    </>
  );
}
