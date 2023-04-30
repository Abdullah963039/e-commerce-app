import { LoadingIcon } from "../Utility/Loading";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
// Styles
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
// Icons
import { MdDriveFolderUpload } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import AdminAddProductHook from "../../Listeners/Product/AdminAddProduct.hook";
// Notification
import { ToastContainer } from "react-toastify";

export default function AdminAddProduct() {
  const {
    sendData,
    loading,
    imageCoverLogic: { imageCover, selectImageCover, deleteImageCover },
    productImagesLogic: {
      productImages,
      selectMultipleImages,
      deleteProductImage,
    },
    nameRef,
    descriptionRef,
    quantityRef,
    priceRef,
    soldPriceRef,
    subCategoriesLogic: { budges, subCategories, addSubCategory },
    MainCategoryLogic: { categories, mainCategory, selectMainCategory },
    brandsLogic: { brands, selectedBrand, selectNewBrand },
    colorsLogic: { colors, addColor, deleteColor, availColors },
  } = AdminAddProductHook();

  return (
    <>
      <form
        onSubmit={sendData}
        id="newProduct"
        className="flex max-w-[600px] flex-col gap-2"
      >
        {/* Add Product Image Cover */}

        <>
          <div className="mb-4 flex w-fit">
            <input
              type="file"
              id="imageCover"
              name="imageCover"
              hidden
              onChange={selectImageCover}
            />
            <label
              htmlFor="imageCover"
              className="cursor-pointer select-none text-slate-400"
            >
              <span className="text-slate-500">صورة غلاف المنتج</span>
              {imageCover === "" ? (
                <MdDriveFolderUpload className="text-9xl duration-150 hover:text-slate-700" />
              ) : (
                <>
                  <img
                    src={URL.createObjectURL(imageCover)}
                    alt="Product Cover"
                    className="my-2 w-36"
                  />
                </>
              )}
            </label>
            {
              //>Delete Image Cover
              imageCover && (
                <>
                  <button
                    onClick={deleteImageCover}
                    type="button"
                    className="btn icon mx-4 w-fit self-end bg-slate-800 px-2 py-1 text-white hover:text-red-500"
                  >
                    <AiOutlineClose />
                    مسح
                  </button>
                </>
              )
            }
          </div>
        </>

        {/* Product Images */}
        <>
          <div className="flex flex-wrap items-center gap-2">
            {productImages.length < 4 && (
              <>
                <label className="cursor-pointer select-none self-start text-slate-400">
                  <input
                    type="file"
                    multiple
                    hidden
                    onChange={selectMultipleImages}
                  />
                  <span className="text-slate-500">صور المنتج</span>
                  <MdDriveFolderUpload className="text-9xl duration-150 hover:text-slate-700" />
                </label>
              </>
            )}
            {productImages.length > 0 && (
              <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative col-span-1 flex w-fit items-center rounded-md bg-slate-100 p-2"
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Product Image"
                      className="w-32"
                    />
                    <AiOutlineClose
                      className="absolute left-1 top-1 cursor-pointer self-start hover:text-red-500"
                      onClick={() => deleteProductImage(image)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </>

        {/* Product Name */}
        <>
          <input
            type="text"
            placeholder="اسم المنتج"
            title="اسم المنتج"
            name="title"
            ref={nameRef}
            className="w-full rounded-md border border-slate-300 p-2 outline-none"
          />
        </>

        {/* Product Description */}
        <>
          <textarea
            name="description"
            rows="3"
            className="min-h-[50px] w-full resize-y rounded-md border border-slate-300 p-2 outline-none"
            placeholder="وصف المنتج"
            title="وصف المنتج"
            ref={descriptionRef}
          ></textarea>
        </>

        {/* Product Quantity */}
        <>
          <input
            ref={quantityRef}
            name="quantity"
            type="number"
            min={1}
            placeholder="الكمية المتاحة"
            title="الكمية المتاحة"
            className="w-full rounded-md border border-slate-300 p-2 outline-none invalid:outline-2 invalid:outline-red-500"
          />
        </>

        {/* Product Price */}
        <>
          <input
            name="price"
            ref={priceRef}
            min={0}
            type="number"
            placeholder="سعر المنتج"
            title="سعر المنتج"
            className="w-full rounded-md border border-slate-300 p-2 outline-none"
          />
        </>

        {/* Sold Price */}
        {/* <>
          <input
            name="priceAfter"
            ref={soldPriceRef}
            min={0}
            type="number"
            placeholder="السعر بعد الخصم"
            title="السعر بعد الخصم"
            className="w-full rounded-md border border-slate-300 p-2 outline-none"
          />
        </> */}

        {/* Product Category */}

        <>
          <Dropdown
            value={mainCategory}
            onChange={selectMainCategory}
            options={categories}
            optionLabel="name"
            optionValue="_id"
            placeholder="التصنيف الرئيسي"
            className="w-full"
          />
        </>

        {/* Product Sub Category */}
        <>
          <MultiSelect
            options={subCategories}
            display="chip"
            onChange={addSubCategory}
            optionLabel="name"
            value={budges}
            optionValue="_id"
            placeholder="اضف تصنيف فرعي"
            maxSelectedLabels={3}
            showSelectAll={false}
            className="w-full"
          />
        </>

        {/* Product Brand */}
        <>
          <Dropdown
            value={selectedBrand}
            onChange={selectNewBrand}
            options={brands}
            optionLabel="name"
            optionValue="_id"
            placeholder="الماركة"
            className="w-full"
          />
        </>

        {/* Product Colors */}
        <>
          <div>
            <h2 className="my-2 text-slate-700">الالوان المتاحة للمنتج</h2>
            <div className="flex items-center gap-2">
              {
                //> Selected Colors
                availColors.map((hex, index) => (
                  <span
                    key={index}
                    className="circle cursor-pointer"
                    onClick={() => deleteColor(hex)}
                    style={{ backgroundColor: hex }}
                    title="اضغط للحذف"
                  ></span>
                ))
              }
              <div className="relative select-none">
                <input
                  type="checkbox"
                  id="colors"
                  hidden
                  className="peer/color"
                />
                <label
                  htmlFor="colors"
                  className="circle flex items-center justify-center bg-slate-100 text-2xl duration-150 peer-checked/color:rotate-45 peer-checked/color:font-bold"
                >
                  +
                </label>
                <div className="absolute right-full top-0 mx-2 hidden max-h-32 w-64 overflow-y-auto rounded-lg bg-white p-2 peer-checked/color:block">
                  {colors.map(({ name, hex }, index) => (
                    <option
                      key={index}
                      value={hex}
                      hidden={availColors.includes(hex)}
                      onClick={() => addColor(hex)}
                      className="w-full cursor-pointer p-2 py-1 text-sm hover:bg-slate-200 disabled:cursor-not-allowed disabled:line-through"
                    >
                      {name}
                    </option>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>

        {/* Send Form Data Button */}
        <button
          type="submit"
          className={`btn ${
            loading && `icon`
          } w-fit self-end bg-slate-800 px-4 py-2 text-white`}
        >
          حفظ التعديلات
          {loading && <LoadingIcon className="mr-2" />}
        </button>
      </form>
      <ToastContainer rtl />
    </>
  );
}
