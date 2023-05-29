// hooks
import { useRef, useEffect } from "react";
import { useStore } from "../../hooks";
import { useParams } from "react-router-dom";
// utils
import { notify } from "../../utils";

export default function UserEditAddressHook() {
  const { editAddress, loading, getSpecificUserAddress } = useStore(); // Global store
  const { addressId } = useParams(); // Get address id form url

  const aliasRef = useRef(),
    detailsRef = useRef(),
    phoneRef = useRef();

  //? Get address data
  useEffect(() => {
    getAddressHandler();

    return () => {
      // clear data
      aliasRef.current.value = "";
      detailsRef.current.value = "";
      phoneRef.current.value = "";
    };
  }, [addressId]);

  // get address handler
  async function getAddressHandler() {
    try {
      const res = await getSpecificUserAddress(addressId);

      aliasRef.current.value = res.data.alias;
      detailsRef.current.value = res.data.details;
      phoneRef.current.value = res.data.phone;
    } catch (error) {
      notify("error", "حدث خطأ ما ");
    }
  }

  // form handler
  async function handleUpadteAddress(e) {
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

    const res = await editAddress(addressId, {
      alias,
      details,
      phone,
    });

    console.log(res); //!

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
    handleUpadteAddress,
    loading,
  };
}
