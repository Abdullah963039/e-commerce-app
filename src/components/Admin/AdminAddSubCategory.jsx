import { ToastContainer } from "react-toastify";
import AdminAddSubCategoryHook from "../../Listeners/SubCategory/AdminAddSubCategory.hook";

export default function AdminAddSubCategory() {
  const { categories, nameRef, handleSubmit, onSelect } =
    AdminAddSubCategoryHook();

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-[600px] flex-col gap-2"
      >
        <input
          type="text"
          placeholder="اسم التصنيف الفرعي"
          ref={nameRef}
          className="w-full rounded-md border border-slate-300 bg-white p-2 outline-none placeholder:text-slate-600"
        />
        <select
          onChange={onSelect}
          className="w-full rounded-md border border-slate-400  bg-white p-1"
          title="التنصيف الرئيسي"
        >
          <option defaultChecked value="">
            التصنيف الرئيسي
          </option>
          {categories?.map((category, index) => {
            return (
              <option key={index} value={category["_id"]}>
                {category["name"]}
              </option>
            );
          })}
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
