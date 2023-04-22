import { MdDriveFolderUpload } from "react-icons/md";
import notify from "../../utils/notifcation";
import { ToastContainer } from "react-toastify";
import { LoadingIcon } from "../../components/Utility/Loading";
import { useRef, useState } from "react";
import { useStore } from "../../hooks/useStore";

export default function AdminAddBrand() {
  const { loading, createNewBrand } = useStore();

  const [image, setImage] = useState("");
  const formRef = useRef();
  const nameRef = useRef("");

  // > Clear Data Function
  const clearData = () => {
    nameRef.current.value = "";
    setImage("");
  };

  const onSelectFile = (e) => {
    if (e.target.files[0] === undefined) return;
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //> Prevent Defaul Behavior

    if (image === "" || nameRef.current.value === "") {
      if (image === "") notify("error", "من فضلك اختر صورة");
      if (nameRef.current.value === "")
        notify("error", "من فضلك اكتب اسم الماركة");
      return; //> Exit This Block .. <=> Don't Do any thing after this
    }

    const formData = new FormData(formRef.current); //> Create FormData Instance To Send Image To Database..

    const response = await createNewBrand(formData); //> Send Data To Database

    if (response.status === 400) notify("error", "هذه الماركة موجودة مسبقا");
    if (response.status === 201) {
      notify("done");
      clearData();
    }
  };

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
      <ToastContainer />
    </>
  );
}
