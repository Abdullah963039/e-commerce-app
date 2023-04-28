import { MdDriveFolderUpload } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import AdminAddProductHook from "../../Listeners/Product/AdminAddProduct.hook";
import { ToastContainer } from "react-toastify";
import {
  BrandSelect,
  MainCategorySelect,
  SubCategorySelect,
} from "./AddProductFormInputs/SelectBox";
import ProductColorsSelect from "./AddProductFormInputs/ProductColorsSelect";
import AddImageCover from "./AddProductFormInputs/AddImageCover";
import AddProductImages from "./AddProductFormInputs/AddProductImages";
import {
  ProductDescription,
  ProductPrice,
  ProductQuantity,
  ProductTitle,
} from "./AddProductFormInputs/ProductInfoInputs";

export default function AdminAddProduct() {
  const {
    sendData, //> Handle Submit Method
    formRef,
  } = AdminAddProductHook();

  return (
    <>
      <form
        ref={formRef}
        onSubmit={sendData}
        id="newProduct"
        className="flex max-w-[600px] flex-col gap-2"
      >
        {/* Add Product Image Cover */}

        <AddImageCover />

        {/* Product Images */}
        <AddProductImages />

        {/* Product Name */}
        <ProductTitle />

        {/* Product Description */}
        <ProductDescription />

        {/* Product Quantity */}
        <ProductQuantity />

        {/* Product Price */}
        <ProductPrice />

        {/* Product Category */}
        {/* <>
          <select
            name="category"
            title="التصنيف الرئيسي"
            className="w-full rounded-md border border-slate-300 bg-white p-2 outline-none"
            onChange={selectCategory}
          >
            <option value="" defaultChecked>
              التصنيف الرئيسي
            </option>
            {categories?.length > 0
              ? categories?.map((category) => (
                  <option value={category["_id"]} key={category["_id"]}>
                    {category["name"]}
                  </option>
                ))
              : "لا يوجد تصنيفات رئيسية"}
          </select>
        </> */}
        <MainCategorySelect />

        {/* Product Sub Category */}
        <SubCategorySelect />

        {/* Product Brand */}
        <BrandSelect />
        {/* <>
          <select
            name="brand"
            className="w-full rounded-md border border-slate-300 bg-white p-2 outline-none"
          >
            <option value="" defaultChecked>
              الماركة{" "}
            </option>
            {brands?.length > 0
              ? brands.map((brand) => (
                  <option value={brand["_id"]} key={brand["_id"]}>
                    {brand["name"]}
                  </option>
                ))
              : "لا يوجد ماركات"}
          </select>
        </> */}

        {/* Product Colors */}
        <ProductColorsSelect />

        {/* Send Form Data Button */}
        <button
          type="submit"
          className="btn w-fit self-end bg-slate-800 px-4 py-2 text-white"
        >
          حفظ التعديلات
        </button>
      </form>
      <ToastContainer rtl />
    </>
  );
}
