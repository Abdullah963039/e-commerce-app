// hooks
import { useState, useRef, useCallback } from "react";
import { useStore } from "../../hooks/useStore";
// utils
import notify from "../../utils/notifcation";

export function AdminAddCoponHook() {
  const [expiredIn, setExpiredIn] = useState(null); // State to save expired date of copon
  const selectExpiredDate = (e) => setExpiredIn(e.value); // setState

  const nameRef = useRef(), // Referance to copon name
    discountRef = useRef(); // Referance to copon discount

  const { loading, createCopon } = useStore(); // Global Store

  // Clear inputs function
  const clearData = useCallback(() => {
    nameRef.current.value = "";
    setExpiredIn(null);
    discountRef.current.value = "";
  }, [createCopon]);

  //? onSubmit
  async function createNewCopon(e) {
    e.preventDefault();

    // Destruct values from references
    const [nameValue, discountValue] = [
      nameRef.current.value,
      discountRef.current.value,
    ];

    // Copon name is not empty
    if (nameValue === "") {
      notify("error", "من فضلك أكتب اسم الكوبون");
      return;
    }
    // Copon Datetime is not available
    if (expiredIn == null) {
      notify("error", "ادخل تاريخ انتهاء الصلاحية من فضلك");
      return;
    }
    // Copon discount is not empty
    if (discountValue === "") {
      notify("error", "من فضلك أكتب قيمة الحسم");
      return;
    }
    // Copon discount range [0-100]
    if (discountValue <= 0 || discountValue > 100) {
      notify("error", "قيمة الحسم بين 1% و 100%");
      return;
    }

    // const expire = toDate(expiredIn); // Convert UTC date to mm/dd/yyyy format

    const res = await createCopon(nameValue, expiredIn, discountValue);

    if (res.status === 201) {
      notify("done", "تم إنشاء الكوبون بنجاح");
      clearData();
    }

    if (res.status === 400) {
      notify("error", "هذا الكوبون موجود مسبقا .. اختر اسم اخر من فضلك");
      return;
    }

    if (res.status === 401) {
      notify("error", "أنت غير مسجل ..  قم بتسجيل دخول");
      return;
    }

    if (res.status === 403) {
      notify("error", "الصلاحية للادمن فقط .. لا يمكنك القيام بهذا الامر");
      return;
    }

    // todo handle notifications ...
  }

  return {
    expiredIn,
    selectExpiredDate,
    nameRef,
    discountRef,
    createNewCopon,
    loading,
  };
}
// helper
export function toDate(date) {
  let dd = date.getDate();
  let mm = date.getMonth();
  let yy = date.getFullYear();

  dd = dd < 10 ? "0" + dd : dd;
  mm = mm < 10 ? "0" + mm : mm;

  return `${mm}/${dd}/${yy}`;
}
