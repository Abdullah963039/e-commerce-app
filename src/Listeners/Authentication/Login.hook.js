// hooks
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../hooks";
// utils
import { notify } from "../../utils";

export default function LoginHook() {
  const [email, setEmail] = useState(""); // Store email value
  const [password, setPassword] = useState(""); // Store password value

  // Navigator
  const navigator = useNavigate();

  // Global Store
  const { login, loading } = useStore();

  // Referance for error tooltip
  const emailTooltipRef = useRef();
  const passwordTooltipRef = useRef();

  const writeEmail = (e) => setEmail(e.target.value);
  const writePassword = (e) => setPassword(e.target.value);

  async function handleLoginSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      notify("error", "يرجى إكمال البيانات");
      return;
    }
    const res = await login(email, password);

    if (res.status === 200) {
      notify("done", "تم تسجيل الدخول بنجاح");

      setTimeout(() => {
        navigator("/"); // redirect to home page after 1.5s
      }, 1500);
    } else {
      notify("error", "هناك خطأ في البريد أو كلمة السر");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }

  return {
    email,
    password,
    writeEmail,
    writePassword,
    handleLoginSubmit,
    emailTooltipRef,
    passwordTooltipRef,
    loading,
  };
}
