// hooks
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../hooks/useStore";
// utils
import notify from "../../utils/notifcation";

export function AdminAddCategoryHook() {
  const { loading, createNewCategory } = useStore();

  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const nameRef = useRef("");
  const formRef = useRef();

  // > Clear Data Function
  const clearData = () => {
    nameRef.current.value = "";
    setImage("");
  };

  //? Set Icon To Image That Admin Has Been Selected ..
  const onSelectFile = (e) => {
    if (e.target.files[0] === undefined) return;
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //> Prevent Defaul Behavior

    if (image === "" || nameRef.current.value === "") {
      if (image === "") notify("error", "من فضلك اختر صورة");
      if (nameRef.current.value === "")
        notify("error", "من فضلك اكتب اسم التصنيف");
      return; //> Exit This Block .. <=> Don't Do any thing after this
    }

    const formData = new FormData(formRef.current); //> Create FormData Instance To Send Image To Database..

    const response = await createNewCategory(formData); //> Send Data To Database

    if (response.status === 400) notify("error", "هذا التنصيف موجود مسبقا");
    if (response.status === 403) {
      notify("error", "أنت ممنوع من هذا الامر");
      navigate("/");
    }
    if (response.status === 201) {
      notify("done");
      clearData();
    }
  };

  return {
    image,
    nameRef,
    formRef,
    loading,
    onSelectFile,
    handleSubmit,
    clearData,
  };
}
