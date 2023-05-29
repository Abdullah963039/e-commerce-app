// hooks
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../hooks";
// utils
import { notify } from "../../utils";

export default function VerifyResetCodeHook() {
  const resetCodeRef = useRef(""),
    resetCodeTooltipRef = useRef("");

  const navigator = useNavigate();

  const { loading, verifyResetCode } = useStore();

  const handleSendResetCode = async (e) => {
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

    const res = await verifyResetCode(codeValue);

    if (res.status === 400) notify("error", "الكود غير صحيح أو غير صالح");
    if (res.status === 200) {
      notify("done", "كود التحقق صحيح");
      navigator("/reset-password");
    }
  };
  return {
    resetCodeRef,
    resetCodeTooltipRef,
    handleSendResetCode,
    loading,
  };
}
