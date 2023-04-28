import { MdDriveFolderUpload } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import { AddProductImagesHook } from "../../../Listeners/Product/AddProductFormInputs/AddProductImages.hook";

export default function AddProductImages() {
  const { productImages, selectMultipleImages, deleteProductImage } =
    AddProductImagesHook();
  return (
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
  );
}
