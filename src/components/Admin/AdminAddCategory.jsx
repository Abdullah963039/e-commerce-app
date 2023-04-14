import { MdDriveFolderUpload } from "react-icons/md";

export default function AdminAddCategory() {
  return (
    <form className="flex max-w-[600px] flex-col gap-2">
      <div className="w-fit ">
        <label className="cursor-pointer text-slate-400">
          <span className="text-slate-500">صورة التصنيف</span>
          <input type="file" hidden />
          <MdDriveFolderUpload className="text-9xl" />
        </label>
      </div>
      <input
        type="text"
        placeholder="اسم التصنيف"
        className="w-full rounded-md border border-slate-300 p-2 outline-none"
      />
      <button
        type="submit"
        className="btn w-fit self-end bg-slate-800 px-4 py-2 text-white"
      >
        حفظ التعديلات
      </button>
    </form>
  );
}
