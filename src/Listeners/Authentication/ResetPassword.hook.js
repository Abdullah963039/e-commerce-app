// hooks
import { useRef, useState } from "react";
import { useStore } from "../../hooks/useStore";
import { useNavigate } from "react-router-dom";
// utils
import notify from "../../utils/notifcation";

export default function ResetPasswordHook() {
  const [email, setEmail] = useState(""); // Store email value
  const [newPassword, setNewPassword] = useState(""); // Store password value

  // Navigator
  const navigator = useNavigate();

  // Global Store
  const { loading } = useStore(); // todo Implement Logining User ...

  // Referance for error tooltip
  const emailTooltipRef = useRef();
  const passwordTooltipRef = useRef();

  const writeEmail = (e) => setEmail(e.target.value);
  const writePassword = (e) => setNewPassword(e.target.value);

  async function handleResetPassword(e) {
    e.preventDefault();

    if (!email || !newPassword) {
      notify("error", "يرجى إكمال البيانات");
      return;
    }
  }

  return {
    email,
    newPassword,
    writeEmail,
    writePassword,
    handleResetPassword,
    emailTooltipRef,
    passwordTooltipRef,
    loading,
  };
}
