import { useState, useRef, useEffect } from "react";

import { useStore } from "../../hooks/useStore";
import notify from "../../utils/notifcation";

export default function AdminAddSubCategoryHook() {
  const [catId, setCatId] = useState(""); //> Store Selected Category Id

  const { getAllCategories, allCategories, createNewSubCategory } = useStore();
  const { data: categories } = allCategories;

  const nameRef = useRef(""); //> Referance To Sub Categoty Input

  useEffect(() => {
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

    if (response.status === 201) {
      notify("done");
      nameRef.current.value = "";
    }
  };

  return { categories, nameRef, handleSubmit, onSelect };
}
