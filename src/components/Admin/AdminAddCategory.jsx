// components
import { ToastContainer } from "react-toastify";
import { MdDriveFolderUpload } from "react-icons/md";
import { LoadingIcon } from "../../components/Utility/Loading";
// hook
import { AdminAddCategoryHook } from "../../Listeners/Category/AdminAddCategory.hook";

export default function AdminAddCategory() {
  const {
    image,
    formRef,
    nameRef,
    loading,
    clearData,
    handleSubmit,
    onSelectFile,
  } = AdminAddCategoryHook(); //? All Component Logics

  return (
    <>
      <form
        className="flex max-w-[600px] flex-col gap-2"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className="flex w-full items-center gap-4">
          <label className="block basis-1/2 cursor-pointer text-slate-400">
            <span className="text-slate-500">صورة التصنيف</span>
            <input type="file" hidden onChange={onSelectFile} name="image" />
            {
              //> Admin hasn't select image yet ..
              image === "" ? (
                <>
                  <MdDriveFolderUpload className="text-9xl duration-150 hover:text-slate-700" />
                </>
              ) : (
                <>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="image"
                    className="w-32"
                    loading="lazy"
                  />
                </>
              )
            }
          </label>
        </div>
        <label>
          <input
            type="text"
            placeholder="اسم التصنيف"
            name="name"
            ref={nameRef}
            className="mb-2 w-full rounded-md border border-slate-300 p-2 outline-none"
          />
        </label>
        <div className="flex flex-wrap items-center justify-end gap-2">
          {image !== "" && (
            <button
              onClick={clearData}
              type="button"
              className="btn my-4 w-fit bg-slate-800 px-4 py-2 text-white"
            >
              مسح
            </button>
          )}
          <button
            type="submit"
            className={`btn ${
              loading && `icon`
            } w-fit bg-slate-800 px-4 py-2 text-white`}
          >
            حفظ التعديلات
            {loading && <LoadingIcon className="mr-2" />}
          </button>
        </div>
      </form>

      <ToastContainer rtl />
    </>
  );
}
