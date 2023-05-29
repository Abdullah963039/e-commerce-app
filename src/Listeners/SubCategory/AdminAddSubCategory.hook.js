// hooks
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../hooks";
// utils
import { notify } from "../../utils";

export default function AdminAddSubCategoryHook() {
  const [catId, setCatId] = useState(""); //> Store Selected Category Id

  const navigate = useNavigate();

  const { getAllCategories, allCategories, createNewSubCategory } = useStore();
  const { data: categories } = allCategories;

  const nameRef = useRef(""); //> Referance To Sub Categoty Input

  useEffect(() => {
    if (!navigator.onLine) {
      //? Check Network
      notify("offline");
      return;
    }

    getAllCategories();
  }, []);

  //> Get Category Id From Select Box
  const onSelect = (e) => setCatId(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nameRef.current.value === "") {
      notify("error", " من فضلك اكتب اسم التصنيف الفرعي");
    }
    if (catId === "") {
      notify("error", " من فضلك اختر التصنيف الرئيسي");
    }
    if (nameRef.current.value === "" || catId === "") return;

    const response = await createNewSubCategory({
      name: nameRef.current.value,
      category: catId,
    });

    if (response.status === 400) notify("error", "هذا التنصيف موجود مسبقا");
    if (response.status === 403) {
      notify("error", "أنت ممنوع من هذا الامر");
      navigate("/");
    }

    if (response.status === 201) {
      notify("done");
      nameRef.current.value = "";
    }
  };

  return { categories, nameRef, handleSubmit, onSelect };
}
