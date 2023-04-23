import { MdDriveFolderUpload } from "react-icons/md";
import { LoadingIcon } from "../../components/Utility/Loading";
import { ToastContainer } from "react-toastify";
import AdminAddBrandHook from "../../Listeners/Brand/AdminAddBrand.hook";

export default function AdminAddBrand() {
  const {
    loading,
    image,
    formRef,
    nameRef,
    clearData,
    handleSubmit,
    onSelectFile,
  } = AdminAddBrandHook();

  return (
    <>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="flex max-w-[600px] flex-col gap-2"
      >
        <div className="w-fit ">
          <label className="cursor-pointer text-slate-400">
            <span className="text-slate-500">صورة الماركة</span>
            <input type="file" hidden name="image" onChange={onSelectFile} />
            {image === "" ? (
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
            )}
          </label>
        </div>
        <input
          type="text"
          name="name"
          ref={nameRef}
          placeholder="اسم الماركة"
          className="w-full rounded-md border border-slate-300 p-2 outline-none"
        />
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
