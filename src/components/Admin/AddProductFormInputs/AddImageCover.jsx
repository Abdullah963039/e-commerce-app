import { MdDriveFolderUpload } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { AddImageCoverHook } from "../../../Listeners/Product/AddProductFormInputs/AddImageCover.hook";
export default function AddImageCover() {
  const { imageCover, selectImageCover, deleteImageCover } =
    AddImageCoverHook();

  return (
    <>
      <div className="mb-4 flex w-fit">
        <input type="file" id="imageCover" hidden onChange={selectImageCover} />
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
  );
}
