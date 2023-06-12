// hooks
import { UserChangePasswordHook } from "../../../Listeners/User";

export default function UserChangePassword() {
  const {
    currentPasswordRef,
    passwordRef,
    passwordConfirmRef,
    handleUpdatePassword,
  } = UserChangePasswordHook();
  return (
    <>
      <form
        onSubmit={handleUpdatePassword}
        className="mt-8 flex flex-col gap-3 sm:w-4/5 md:w-3/4 lg:w-1/2"
      >
        <h1 className="text-xl font-bold">تغيير كلمة المرور</h1>
        <input
          type="password"
          ref={currentPasswordRef}
          placeholder="كلمة المرور القديمة"
          className="w-full rounded-md p-2 outline-none ring-1 ring-slate-300 placeholder:text-slate-500 focus-within:ring-2 focus-within:ring-slate-400"
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="كلمة المرور الجديدة"
          className="w-full rounded-md p-2 outline-none ring-1 ring-slate-300 placeholder:text-slate-500 focus-within:ring-2 focus-within:ring-slate-400"
        />
        <input
          type="password"
          ref={passwordConfirmRef}
          placeholder="تأكيد كلمة المرور الجديدة"
          className="w-full rounded-md p-2 outline-none ring-1 ring-slate-300 placeholder:text-slate-500 focus-within:ring-2 focus-within:ring-slate-400"
        />
        <button className="btn self-end bg-slate-900 px-4 py-2 text-white hover:bg-slate-950">
          حفظ التغييرات
        </button>
      </form>
    </>
  );
}
