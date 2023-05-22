// hooks
import { useRef } from "react";
import { useStore } from "../../hooks/useStore";
import { useNavigate } from "react-router-dom";
// utils
import notify from "../../utils/notifcation";
import { getSession } from "../../utils/getValueFromStorage";

// regex
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,18}$/;
const upperRegex = /[A-Z]+/;
const lowerRegex = /[a-z]+/;
const numberRegex = /\d+/;

export default function ResetPasswordHook() {
  // get user email from session storage
  const userEmail = getSession("email");
  // Navigator
  const navigator = useNavigate();

  // Global Store
  const { loading } = useStore(); // todo Implement Logining User ...

  // Referance for inputs
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();
  // Referance for error tooltip
  const passwordTooltipRef = useRef();
  const confirmPasswordTooltipRef = useRef();

  const writeEmail = (e) => setEmail(e.target.value);
  const writePassword = (e) => setNewPassword(e.target.value);

  async function handleResetPassword(e) {
    e.preventDefault();

    const result = cheakPasswords(
      newPasswordRef,
      confirmPasswordRef,
      passwordTooltipRef,
      confirmPasswordTooltipRef
    );

    return;
  }

  return {
    newPasswordRef,
    confirmPasswordRef,
    passwordTooltipRef,
    confirmPasswordTooltipRef,
    handleResetPassword,
    loading,
  };
}
function cheakPasswords(
  newPasswordRef,
  confirmPasswordRef,
  passwordTooltipRef,
  confirmPasswordTooltipRef
) {
  const { value: newPassword } = newPasswordRef.current;
  const { value: confirmPassword } = confirmPasswordRef.current;

  if (newPassword == "") {
    passwordTooltipRef.current.style.opacity = "1";
    passwordTooltipRef.current.innerText = "ادخل كلمة المرور من فضلك";
    setTimeout(() => {
      passwordTooltipRef.current.style.opacity = "0";
    }, 3000);
  }

  if (!passwordRegex.test(newPassword)) {
    if (newPassword === "") {
      passwordTooltipRef.current.style.opacity = "1";
      passwordTooltipRef.current.innerText = "ادخل كلمةالمرور من فضلك";
      setTimeout(() => {
        passwordTooltipRef.current.style.opacity = "0";
      }, 3500);
      return false;
    }
    if (newPassword.length < 6) {
      passwordTooltipRef.current.style.opacity = "1";
      passwordTooltipRef.current.innerText = "كلمة المرور قصيرة جدا";
      setTimeout(() => {
        passwordTooltipRef.current.style.opacity = "0";
      }, 3500);
      return false;
    }
    if (newPassword.length > 18) {
      passwordTooltipRef.current.style.opacity = "1";
      passwordTooltipRef.current.innerText = "كلمة المرور طويلة جدا";
      setTimeout(() => {
        passwordTooltipRef.current.style.opacity = "0";
      }, 3500);
      return false;
    }
    if (!upperRegex.test(newPassword)) {
      passwordTooltipRef.current.style.opacity = "1";
      passwordTooltipRef.current.innerText = "كلمة المرور يجب ان تحوي حرف كبير";
      setTimeout(() => {
        passwordTooltipRef.current.style.opacity = "0";
      }, 3500);
      return false;
    }
    if (!lowerRegex.test(newPassword)) {
      notify("error");
      passwordTooltipRef.current.style.opacity = "1";
      passwordTooltipRef.current.innerText = "كلمة المرور يجب ان تحوي حرف صغير";
      setTimeout(() => {
        passwordTooltipRef.current.style.opacity = "0";
      }, 3500);
      return false;
    }
    if (!numberRegex.test(newPassword)) {
      passwordTooltipRef.current.style.opacity = "1";
      passwordTooltipRef.current.innerText = "كلمة المرور يجب ان تحوي رقم";
      setTimeout(() => {
        passwordTooltipRef.current.style.opacity = "0";
      }, 3000);
      return false;
    }
  }

  if (confirmPassword === "") {
    confirmPasswordTooltipRef.current.style.opacity = "1";
    confirmPasswordTooltipRef.current.innerText =
      "ادخل تأكيد كلمة المرور من فضلك";
    setTimeout(() => {
      confirmPasswordTooltipRef.current.style.opacity = "0";
    }, 3000);
    return false;
  }

  if (newPassword !== confirmPassword) {
    confirmPasswordTooltipRef.current.style.opacity = "1";
    confirmPasswordTooltipRef.current.innerText = "كلمة المرور غير متطابقة";
    setTimeout(() => {
      confirmPasswordTooltipRef.current.style.opacity = "0";
    }, 3000);
    return false;
  }
}
