// components
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// icons
import { TbClick } from "react-icons/tb";
import { LoadingIcon } from "../../components/Utility/Loading";
// hooks
import { RegisterHook } from "../../Listeners/Authentication/Register.hook";

const STYLES = {
  INPUT:
    "w-full rounded-lg border border-slate-200 p-1 text-center text-sm shadow-sm outline-none placeholder:text-xs placeholder:text-slate-400 sm:p-2 sm:text-base sm:placeholder:text-base focus:border-slate-400",
  TOOLTIP:
    "absolute bottom-[calc(100%_+_5px)] left-1/2 z-10 -translate-x-1/2 select-none rounded-lg border border-red-200 bg-red-200 px-4 text-center text-xs text-red-500 opacity-0 shadow duration-300 after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-red-200 sm:text-sm",
};

export const Register = () => {
  const {
    state,
    changeName,
    changePhone,
    changeEmail,
    changePassword,
    changeConfirmPassword,
    handleRegister,
    nameTooltipRef,
    phoneTooltipRef,
    emailTooltipRef,
    passwordTooltipRef,
    passwordConfirmTooltipRef,
    loading,
  } = RegisterHook();

  return (
    <>
      <div className="bg-slate-200">
        <div className="container flex min-h-[calc(100vh-(65px+56px))] flex-col items-center justify-center py-4">
          <div className="flex max-w-[500px] flex-col gap-4 rounded-2xl border border-solid border-slate-100 bg-white shadow-sm shadow-slate-400">
            <h2 className="mt-4 text-center text-xl text-slate-700 sm:text-2xl">
              حساب جديد
            </h2>
            <form
              onSubmit={handleRegister}
              className="flex flex-col gap-2 px-4 py-6 sm:gap-4"
            >
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
                <div className="relative basis-full sm:basis-1/2">
                  <input
                    type="text"
                    placeholder="الاسم"
                    value={state["name"]}
                    onChange={changeName}
                    className={STYLES.INPUT}
                  />
                  <span ref={nameTooltipRef} className={STYLES.TOOLTIP}></span>
                </div>
                <div className="relative basis-full sm:basis-1/2">
                  <input
                    type="tel"
                    placeholder="الهاتف"
                    dir="ltr"
                    value={state["phone"]}
                    onChange={changePhone}
                    className={STYLES.INPUT}
                  />
                  <span ref={phoneTooltipRef} className={STYLES.TOOLTIP}></span>
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="البريد الالكتروني"
                  dir="ltr"
                  value={state["email"]}
                  onChange={changeEmail}
                  className={STYLES.INPUT}
                />
                <span ref={emailTooltipRef} className={STYLES.TOOLTIP}></span>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="كلمة المرور"
                  dir="ltr"
                  value={state["password"]}
                  onChange={changePassword}
                  onPaste={(e) => e.preventDefault()}
                  className={STYLES.INPUT}
                />
                <span
                  ref={passwordTooltipRef}
                  className={STYLES.TOOLTIP}
                ></span>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="تأكيد كلمة المرور"
                  dir="ltr"
                  value={state["passwordConfirm"]}
                  onChange={changeConfirmPassword}
                  onPaste={(e) => e.preventDefault()}
                  className={STYLES.INPUT}
                />
                <span
                  ref={passwordConfirmTooltipRef}
                  className={STYLES.TOOLTIP}
                ></span>
              </div>

              <button
                className={`btn ${
                  loading && "icon"
                } my-2 w-full justify-center border-slate-400 bg-slate-700 py-2 text-center  text-xs text-slate-100 hover:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 sm:text-base xl:px-6`}
              >
                انشاء حساب
                {loading && <LoadingIcon className="mr-2" />}
              </button>

              <p className="m-0 flex justify-center gap-2 text-center text-xs text-slate-500 sm:text-sm">
                لديك حساب بالفعل؟
                <Link to="/login">
                  <span className="flex items-center justify-center gap-2 text-slate-900">
                    اضغط هنا
                    <TbClick />
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer rtl />
    </>
  );
};
