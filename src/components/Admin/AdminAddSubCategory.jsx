import React from "react";

export default function AdminAddSubCategory() {
  return (
    <form className="flex max-w-[600px] flex-col gap-2">
      <input
        type="text"
        placeholder="اسم التصنيف الفرعي"
        className="w-full rounded-md border border-slate-300 bg-transparent p-2 outline-none placeholder:text-slate-600"
      />
      <select
        name="subCategory"
        className="w-full rounded-md border border-slate-400  bg-white p-2"
      >
        <option value="asfas">first cat</option>
        <option value="asfas">sec cat</option>
        <option value="asfas">thrd cat</option>
        <option value="asfas">frth cat</option>
      </select>
      <button
        type="submit"
        className="btn w-fit self-end bg-slate-800 px-4 py-2 text-white"
      >
        حفظ التعديلات
      </button>
    </form>
  );
}
