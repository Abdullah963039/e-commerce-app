import { Link } from "react-router-dom";
import { TbClick } from "react-icons/tb";

export const Register = () => {
  return (
    <div className="bg-slate-200">
      <div className="container flex h-[calc(100vh-(65px+56px))] flex-col items-center justify-center py-4">
        <div className="flex max-w-[500px] flex-col gap-4 rounded-2xl border-[1px] border-solid border-slate-100 bg-white shadow-sm shadow-slate-400">
          <h2 className="mt-4 text-center text-2xl text-slate-700">
            حساب جديد
          </h2>
          <form action="" className="flex flex-col gap-4 px-4 py-6">
            <input
              type="text"
              placeholder="الاسم"
              required
              dir="ltr"
              className="w-full rounded-lg border-[1px] border-slate-200 p-2 text-center shadow-sm outline-none placeholder:text-slate-400"
            />
            <input
              type="email"
              placeholder="البريد الالكتروني"
              required
              dir="ltr"
              className="w-full rounded-lg border-[1px] border-slate-200 p-2 text-center shadow-sm outline-none placeholder:text-slate-400"
            />
            <input
              type="password"
              placeholder="كلمة المرور"
              required
              dir="ltr"
              className="w-full rounded-lg border-[1px] border-slate-200 p-2 text-center shadow-sm outline-none placeholder:text-slate-400"
            />
            <button className="btn my-4 w-full border-slate-400 bg-slate-700 py-2 text-xs text-slate-100  hover:bg-slate-800 sm:text-base xl:px-6">
              انشاء حساب
            </button>
            <p className="m-0 text-center text-sm text-slate-500">
              لديك حساب بالفعل؟
              <Link to="/login">
                <span className="mx-0 mt-2 flex items-center justify-center gap-2 text-slate-900">
                  اضغط هنا
                  <TbClick />
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
