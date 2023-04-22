import { MdDriveFolderUpload } from "react-icons/md";
import MultiSelectForm from "./MultiSelectBox/MultiSelectForm";

//! PRODUCT COLORS MUST BE REQUIRED

export default function AdminAddProduct() {
  const subCategories = [
    "تصنيف فرعي 1",
    "تصنيف فرعي 2",
    "تصنيف فرعي 3",
    "تصنيف فرعي 4",
    "تصنيف فرعي 5",
  ];

  return (
    <form className="flex max-w-[600px] flex-col gap-2">
      <div className="w-fit ">
        {/* Add Product Image */}
        <label className="cursor-pointer text-slate-400">
          <span className="text-slate-500">صورة المنتج</span>
          <input type="file" required name="productImage" hidden />
          <MdDriveFolderUpload className="text-9xl duration-150 hover:text-slate-700" />
        </label>
      </div>
      {/* Product Name */}
      <input
        type="text"
        placeholder="اسم المنتج"
        name="productName"
        required
        className="w-full rounded-md border border-slate-300 p-2 outline-none"
      />
      {/* Product Description */}
      <textarea
        name="productDescription"
        rows="3"
        className="min-h-[50px] w-full resize-y rounded-md border border-slate-300 p-2 outline-none"
        placeholder="وصف المنتج"
        required
      ></textarea>
      {/* Product Price Before Discount */}
      <input
        type="number"
        placeholder="السعر قبل الخصم"
        name="productPrice"
        className="w-full rounded-md border border-slate-300 p-2 outline-none"
      />
      {/* Product Price */}
      <input
        type="number"
        placeholder="سعر المنتج"
        required
        name="productDiscountedPrice"
        className="w-full rounded-md border border-slate-300 p-2 outline-none"
      />
      {/* Product Category */}
      <select
        name="mainCategory"
        required
        className="w-full rounded-md border border-slate-300  bg-white p-2"
      >
        <option value="">التصنيف الرئيسي</option>
        <option value="">التصنيف الرئيسي</option>
        <option value="">التصنيف الرئيسي</option>
        <option value="">التصنيف الرئيسي</option>
      </select>
      {/* Product Sub Category */}
      <MultiSelectForm subCategories={subCategories} />
      {/* Product Brand */}
      <select
        name="mainBrand"
        required
        className="w-full rounded-md border border-slate-300  bg-white p-2"
      >
        <option value="">الماركة</option>
        <option value="">الماركة</option>
        <option value="">الماركة</option>
        <option value="">الماركة</option>
      </select>

      {/* Product Colors */}
      <div>
        <h2 className="my-2 text-slate-700">الالوان المتاحة للمنتج</h2>
        <div className="flex gap-2">
          <label className="circle block bg-red-700">
            <input
              type="checkbox"
              hidden
              name="productColor"
              className="w-full"
            />
          </label>
          <label className="circle block bg-sky-700">
            <input
              type="checkbox"
              hidden
              name="productColor"
              className="w-full"
            />
          </label>
          <label className="circle block bg-indigo-700">
            <input
              type="checkbox"
              hidden
              name="productColor"
              className="w-full"
            />
          </label>
          <label className="circle flex items-center justify-center border border-slate-300">
            <input type="color" hidden name="productColor" className="w-full" />
            +
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="btn w-fit self-end bg-slate-800 px-4 py-2 text-white"
      >
        حفظ التعديلات
      </button>
    </form>
  );
}
