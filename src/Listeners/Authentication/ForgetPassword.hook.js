// hooks
import { useRef } from "react";
import { useStore } from "../../hooks/useStore";
import { useNavigate } from "react-router-dom";
// utils
import notify from "../../utils/notifcation";

export const ForgetPasswordHook = () => {
  const { forgetPassword, loading } = useStore();

  const navigator = useNavigate();

  const emailRef = useRef(""),
    emailTooltipRef = useRef("");

  const sendResetCode = async (e) => {
    e.preventDefault();
    const emailValue = emailRef.current.value;

    if (emailValue == "") {
      emailTooltipRef.current.style.opacity = "1";
      emailTooltipRef.current.innerText = "ادخل البريد الالكتروني من فضلك";
      setTimeout(() => {
        emailTooltipRef.current.style.opacity = "0";
        emailTooltipRef.current.innerText = "";
      }, 3500);

      return;
    }

    const res = await forgetPassword(emailValue);

    if (res.status === 404) {
      notify(
        "error",
        `لا يوجد مستخدم بهذا البريد الالكتروني الرجاء التأكد من البريد والمحاولة مرة اخرى`
      );
    }
    if (res.status === 500) {
      notify("error", "حدث خطأ في ارسال كود الاسترجاع، الرجاء المحاولة لاحقا!");
    }
    if (res.status === 200) {
      notify("done", "تم ارسال الكود بنجاح");
      setTimeout(() => {
        navigator("/verify-code");
      }, 1000);
    }
    // todo: Handle Reset Code ..
    console.log(res);
  };

  return {
    emailRef,
    loading,
    emailTooltipRef,
    sendResetCode,
  };
};

/**
 * passwordTooltipRef.current.style.opacity = "1";
        passwordTooltipRef.current.innerText = "ادخل كلمةالمرور من فضلك";
        setTimeout(() => {
          passwordTooltipRef.current.style.opacity = "0";
        }, 3500);
 */
