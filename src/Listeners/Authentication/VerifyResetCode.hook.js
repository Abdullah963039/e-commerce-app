// hooks
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../hooks/useStore";
// utils
import notify from "../../utils/notifcation";

export function VerifyResetCodeHook() {
  const resetCodeRef = useRef(""),
    resetCodeTooltipRef = useRef("");

  const navigator = useNavigate();

  const { loading } = useStore();

  const handleSendResetCode = (e) => {
    e.preventDefault();
    const codeValue = resetCodeRef.current.value;

    if (codeValue == "") {
      resetCodeTooltipRef.current.style.opacity = "1";
      resetCodeTooltipRef.current.innerText = "ادخل الكود من فضلك";
      setTimeout(() => {
        resetCodeTooltipRef.current.style.opacity = "0";
      }, 3500);
      return;
    }
  };
  return {
    resetCodeRef,
    resetCodeTooltipRef,
    handleSendResetCode,
    loading,
  };
}
