import { AiFillDelete, AiFillEdit, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

import ConfirmMessage from "./ConfirmMessage";
import { currencyFormatter } from "../../utils/formatter";
import { AdminProductCardHook } from "../../Listeners/Product/Admin/AdminProductCard.hook.js";

export default function AdminProductCard({ product }) {
  const { deleteModal, showModal, closeModal, deleteItem } =
    AdminProductCardHook();

  return (
    <>
      <ConfirmMessage
        controller={deleteModal}
        closeModal={closeModal}
        productName={product["title"]}
        productId={product["_id"]}
        deleteItem={deleteItem}
      />

      <div className="col-span-12 h-fit rounded-lg bg-white p-2 sm:col-span-6 md:col-span-4 lg:col-span-3">
        {/* Product Control */}
        <div className="mb-2 flex items-center justify-between">
          <div
            className="group flex cursor-pointer items-center gap-1"
            onClick={showModal}
          >
            <AiFillDelete className="text-slate-500 group-hover:text-red-500" />

            <span className="text-slate-500 group-hover:text-red-500">
              إزالة
            </span>
          </div>
          <Link to={`edit-product/${product["_id"]}`}>
            <div className="group flex cursor-pointer items-center gap-1">
              <AiFillEdit className="text-slate-500 group-hover:text-yellow-500" />
              <span className="text-slate-500 group-hover:text-yellow-500">
                تعديل
              </span>
            </div>
          </Link>
        </div>
        {/* Product Image */}
        <div className="flex w-full items-center justify-center p-2">
          <Link to={`/products/${product["_id"]}`}>
            <img
              src={product["imageCover"]}
              alt="asd"
              loading="lazy"
              className="aspect-square object-contain"
            />
          </Link>
        </div>
        {/* Product Mini Description */}
        <div className="py-3 text-slate-700">{product["title"]}</div>
        {/* Rate & Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-yellow-500">
            <AiFillStar /> {product["ratingsQuantity"]}
          </div>
          <span className="font-bold">
            {currencyFormatter(product["price"])}
          </span>
        </div>
      </div>
    </>
  );
}
