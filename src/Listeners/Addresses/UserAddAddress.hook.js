// hooks
import { useRef } from "react";
import { useStore } from "../../hooks";
// utils
import { notify } from "../../utils";

export default function UserAddAddressHook() {
  const aliasRef = useRef(),
    detailsRef = useRef(),
    phoneRef = useRef();

  const { createNewAddress, loading } = useStore();

  async function handleCreateAddress(e) {
    e.preventDefault();

    const [alias, details, phone] = [
      aliasRef.current.value,
      detailsRef.current.value,
      phoneRef.current.value,
    ];

    // Address Name Validation
    if (alias == "") {
      notify("error", "اكتب اسم العنوان من فضلك");
      return;
    }
    // Address Details Validation
    if (details == "") {
      notify("error", "اكتب تفاصيل العنوان من فضلك");
      return;
    }
    // Phone Number Validation
    if (phone == "") {
      notify("error", "اكتب رقم الهاتف من فضلك");
      return;
    }
    if (phone.length != 11) {
      notify("error", "الرقم يجب أن يكون مصري .. 11 رقم");
      return;
    }

    const res = await createNewAddress({
      alias,
      details,
      phone,
    });

    if (res.status === 200) {
      notify("done", "تم انشاء العنوان بنجاح");
      aliasRef.current.value = "";
      detailsRef.current.value = "";
      phoneRef.current.value = "";
    } else if (res.status === 400) {
      notify("error", "اسم العنوان موجود مسبقا");
      alias = "";
    } else {
      notify("error");
    }
  }

  return {
    aliasRef,
    detailsRef,
    phoneRef,
    handleCreateAddress,
    loading,
  };
}
