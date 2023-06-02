//? Single Cart Item

// icons
import { BsTrash } from "react-icons/bs";
// utils
import { currencyFormatter } from "../../utils";
import { ConfirmMessage } from "../Utility";
// hooks
import { CartItemHook } from "../../Listeners/Cart";

const src = import.meta.env.VITE_BASE_URL + "/products/";

export default function CartItem({ order }) {
  if (order == null || order == undefined) return null;

  const { color, count, price, product, _id } = order;
  const { brand, category, imageCover, title } = product;

  const {
    deleteLogic: { deleteModal, openModal, closeModal, deleteOrder },
    updateLogic: { quantity, changeQuantity, updateOrder },
  } = CartItemHook();

  return (
    <>
      <ConfirmMessage
        controller={deleteModal}
        closeModal={closeModal}
        itemId={_id}
        deleteItem={deleteOrder}
        modalMessage={`هل أنت متأكد من حذف الطلب --${title}-- ؟`}
      />
      <div className="grid w-full select-none grid-cols-12 gap-4 rounded-lg bg-white p-4 sm:p-2">
        {/* Item Image */}
        <div className=" col-span-12 place-self-center sm:col-span-3">
          <img
            src={src + imageCover}
            alt="das"
            className="max-h-[150px] object-cover"
          />
        </div>
        {/* Item Info */}
        <div className="col-span-12 flex flex-col justify-between gap-2 px-4 py-2 sm:col-span-6 sm:px-0">
          <div className="flex items-center gap-2">
            <p className="text-slate-500">صنف المنتج :</p>

            <p className="whitespace-break-spaces indent-2 text-slate-800">
              {category.name}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-slate-500">اسم المنتج :</p>

            <p className="whitespace-break-spaces indent-2 text-slate-800">
              {title}
            </p>
          </div>
          <p className="text-slate-500">
            الماركة:{" "}
            <span className="mx-4 inline-block text-base font-bold text-slate-900">
              {brand.name}
            </span>
          </p>
          <div className="flex gap-2">
            <p className="text-slate-500">لون المنتج :</p>
            <span
              className="circle !cursor-auto border !border-slate-400 !opacity-100"
              style={{
                backgroundColor: color,
              }}
            ></span>
          </div>
          <label htmlFor="quantity" className="text-slate-500">
            الكمية:{" "}
            <input
              type="number"
              inputMode="numeric"
              className="max-w-[50px] text-slate-900 outline-none"
              min={1}
              // defaultValue={count}
              value={quantity == null ? count : quantity}
              onChange={changeQuantity}
            />
          </label>
        </div>
        {/* Delete & Item Price */}
        <div className="col-span-12 flex items-end justify-between p-2 sm:col-span-3 sm:flex-col">
          <div
            className="flex cursor-pointer items-center gap-2 duration-150 hover:text-red-500"
            onClick={openModal}
          >
            <BsTrash />
            ازالة
          </div>
          <span className="text-sm font-semibold">
            {currencyFormatter(price)}
          </span>
        </div>
        {count != quantity && quantity != null && (
          <button
            onClick={() => updateOrder(_id)}
            className="col-span-12 rounded-lg bg-slate-700 p-2 text-center text-white focus-within:ring focus-within:ring-slate-400 hover:bg-slate-800 active:ring active:ring-slate-500 sm:col-span-4 sm:col-start-10"
          >
            حفظ التغييرات
          </button>
        )}
      </div>
    </>
  );
}
