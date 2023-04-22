import { useEffect, useRef } from "react";
import { useStore } from "../../hooks/useStore";
import notify from "../../utils/notifcation";
import { ToastContainer } from "react-toastify";

export default function AdminAddSubCategory() {
  const { getAllCategories, allCategories, createNewSubCategory } = useStore();
  const { data: categories } = allCategories;

  // ! Must handle post request

  const formRef = useRef();
  const nameRef = useRef("");

  useEffect(() => {
    getAllCategories();
  }, []);

  function onSelect(e) {
    console.log(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nameRef.current.value === "") {
      notify("error", " من فضلك اكتب اسم التصنيف الفرعي");
      return; //> Exit This Block .. <=> Don't Do any thing after this
    }

    const formData = new FormData(formRef.current);
    for (const item of formData) {
      console.log(`{
    "${item[0]}" : "${typeof item[1]}"
  }`);
    }
    // console.log(formData);

    const response = await createNewSubCategory(formData);

    console.log(response.data);

    // if (response.status === 400) notify("error", "هذا التنصيف موجود مسبقا");
    // if (response.status === 201) notify("done");
  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex max-w-[600px] flex-col gap-2"
      >
        <input
          type="text"
          name="name"
          placeholder="اسم التصنيف الفرعي"
          ref={nameRef}
          className="w-full rounded-md border border-slate-300 bg-white p-2 outline-none placeholder:text-slate-600"
        />
        <select
          name="category"
          onChange={onSelect}
          className="w-full rounded-md border border-slate-400  bg-white p-1"
          title="التنصيف الرئيسي"
        >
          <option disabled>التصنيف الرئيسي</option>
          {categories?.map((category, index) => (
            <option key={index} value={category["_id"]}>
              {category["name"]}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="btn w-fit self-end bg-slate-800 px-4 py-2 text-white"
        >
          حفظ التعديلات
        </button>
      </form>
      <ToastContainer />
    </>
  );
}
