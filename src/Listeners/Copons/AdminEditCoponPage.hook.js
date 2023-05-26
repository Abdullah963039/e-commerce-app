// hooks

import { useParams } from "react-router-dom";
import { useStore } from "../../hooks/useStore";
import { useState, useEffect, useRef } from "react";
// utils
import { dateFormatter } from "../../utils/formatter";
import notify from "../../utils/notifcation";
import { toDate } from "./AdminAddCopon.hook";

export default function AdminEditCoponPageHook() {
  const { coponId } = useParams(); // get coponId from url

  const [expiredIn, setExpiredIn] = useState(null);
  const [name, setName] = useState(null);
  const [discount, setDiscount] = useState(null);

  const { loading, getSpecificCopon, editCopon } = useStore(); // Global store

  //? Use Effect to get copon data
  useEffect(() => {
    const getCopon = async () => {
      try {
        const res = await getSpecificCopon(coponId);
        const copon = res.data;

        setName(copon.name);
        setDiscount(copon.discount);
        setExpiredIn(copon.expire);
      } catch (error) {
        console.log(error);
        notify("error", "حدث خطأ ما");
      }
    };

    getCopon();

    return () => {
      setName(null);
      setDiscount(null);
      setExpiredIn(null);
    };
  }, [coponId]);

  const selectExpiredDate = (e) => setExpiredIn(e.value);
  const onChangeName = (e) => setName(e.target.value);
  const onChangeDiscount = (e) => setDiscount(e.target.value);

  async function updateCopon(e) {
    e.preventDefault();
    // Copon name is not empty
    if (name === "") {
      notify("error", "من فضلك أكتب اسم الكوبون");
      return;
    }
    // Copon Datetime is not available
    if (expiredIn == null) {
      notify("error", "ادخل تاريخ انتهاء الصلاحية من فضلك");
      return;
    }
    // Copon discount is not empty
    if (discount === "") {
      notify("error", "من فضلك أكتب قيمة الحسم");
      return;
    }
    // Copon discount range [0-100]
    if (discount <= 0 || discount > 100) {
      notify("error", "قيمة الحسم بين 1% و 100%");
      return;
    }

    const formData = {
      name,
      expire: expiredIn,
      discount,
    };

    const res = await editCopon(coponId, formData);

    if (res.status === 200) {
      notify("done", "تم تعديل الكوبون بنجاح");
      return;
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
  }

  return {
    loading,
    expiredIn,
    name,
    discount,
    selectExpiredDate,
    updateCopon,
    onChangeName,
    onChangeDiscount,
  };
}
