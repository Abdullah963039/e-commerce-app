// icons
import ResetPasswordHook from "../../Listeners/Authentication/ResetPassword.hook";
import { LoadingIcon } from "../../components/Utility/Loading";
// hooks

const STYLE = {
  INPUT:
    "w-full rounded-lg border border-slate-200 p-1 text-center text-sm shadow-sm outline-none placeholder:text-xs placeholder:text-slate-400 sm:p-2 sm:text-base sm:placeholder:text-base  focus:border-slate-400",
  TOOLTIP:
    "absolute bottom-[calc(100%_+_5px)] left-1/2 z-10 -translate-x-1/2 select-none rounded-lg border border-red-200 bg-red-200 px-4 text-center text-xs text-red-500 opacity-0 shadow duration-300 after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-red-200 sm:text-sm",
};

export default function ResetPassword() {
  const {
    newPasswordRef,
    confirmPasswordRef,
    passwordTooltipRef,
    confirmPasswordTooltipRef,
    handleResetPassword,
    loading,
  } = ResetPasswordHook();
  return (
    <>
      <div className="bg-slate-200">
        <div className="container flex min-h-[calc(100vh-(65px+56px))] flex-col items-center justify-center">
          <div className="flex max-w-[500px] flex-col gap-4 rounded-2xl border-[1px] border-solid border-slate-100 bg-white shadow-sm shadow-slate-400">
            <h2 className="mt-4 text-center text-2xl text-slate-700">
              تغيير كلمة المرور
            </h2>
            <form
              onSubmit={handleResetPassword}
              className="flex flex-col gap-2 px-4 py-6 sm:gap-4"
            >
              <div className="relative" aria-label="ادخل البريد الالكتروني">
                <input
                  type="password"
                  ref={newPasswordRef}
                  placeholder="كلمة المرور الجديدة"
                  dir="ltr"
                  className={STYLE.INPUT}
                />
                <span ref={passwordTooltipRef} className={STYLE.TOOLTIP}></span>
              </div>
              <div className="relative" aria-label="ادخل كلمة السر">
                <input
                  type="password"
                  ref={confirmPasswordRef}
                  placeholder="تأكيد كلمة المرور الجديدة"
                  dir="ltr"
                  onPaste={(e) => e.preventDefault()}
                  className={STYLE.INPUT}
                />
                <span
                  ref={confirmPasswordTooltipRef}
                  className={STYLE.TOOLTIP}
                ></span>
              </div>

              <button
                aria-label="اضغط هنا لتسجيل الدخول"
                disabled={loading}
                className={`btn ${
                  loading && "icon"
                } my-2 w-full justify-center border-slate-400 bg-slate-700 py-2 text-center  text-xs text-slate-100 hover:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 sm:text-base xl:px-6`}
              >
                {loading ? <LoadingIcon className="mr-2" /> : "تغيير كلمة السر"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
