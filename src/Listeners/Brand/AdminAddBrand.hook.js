import React, { useRef, useState } from "react";
import { useStore } from "../../hooks/useStore";
import notify from "../../utils/notifcation";

export default function AdminAddBrandHook() {
  const { loading, createNewBrand } = useStore();

  const [image, setImage] = useState("");
  const formRef = useRef();
  const nameRef = useRef("");

  // > Clear Data Function
  const clearData = () => {
    nameRef.current.value = "";
    setImage("");
  };

  const onSelectFile = (e) => {
    if (e.target.files[0] === undefined) return;
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //> Prevent Defaul Behavior

    if (!navigator.onLine) {
      notify("offline");
      return;
    }

    if (image === "" || nameRef.current.value === "") {
      if (image === "") notify("error", "من فضلك اختر صورة");
      if (nameRef.current.value === "")
        notify("error", "من فضلك اكتب اسم الماركة");
      return; //> Exit This Block .. <=> Don't Do any thing after this
    }

    const formData = new FormData(formRef.current); //> Create FormData Instance To Send Image To Database..

    const response = await createNewBrand(formData); //> Send Data To Database

    if (response.status === 400) notify("error", "هذه الماركة موجودة مسبقا");
    if (response.status === 201) {
      notify("done");
      clearData();
    }
  };

  return {
    loading,
    image,
    formRef,
    nameRef,
    clearData,
    handleSubmit,
    onSelectFile,
  };
}
