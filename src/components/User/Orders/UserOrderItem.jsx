import { Link } from "react-router-dom";
import { currencyFormatter } from "../../../utils";

export default function UserOrderItem({ orderItem }) {
  const { product } = orderItem;

  const src = import.meta.env.VITE_BASE_URL + "/products/";

  return (
    <div className="grid w-full grid-cols-12 gap-4 border-b border-slate-100 bg-white p-2">
      {/* Item Image */}
      <div className="col-span-12 place-self-center sm:col-span-4">
        <img
          src={src + product.imageCover}
          alt={product.title}
          className="max-h-[150px] object-cover"
        />
      </div>
      {/* Item Info */}
      <div className="col-span-12 flex flex-col justify-between gap-2 py-2 sm:col-span-5">
        <p className="whitespace-break-spaces text-slate-500">
          اسم المنتج :<span className="text-black">{product.title}</span>
        </p>
        {product.ratingsAverage && (
          <p className="text-slate-500 ">
            التقييم:{" "}
            <span className="text-base font-bold text-slate-900">
              {product.ratingsAverage}
            </span>
          </p>
        )}
        <div className="flex gap-2 text-slate-500">
          اللون المطلوب:
          <span
            className="aspect-square w-6 rounded-full ring-1 ring-slate-100"
            style={{ background: orderItem?.color }}
          ></span>
        </div>
        <p className="text-slate-500">
          الكمية:{" "}
          <span className="font-bold text-black">{orderItem.count}</span>
        </p>
        <p className="text-slate-500">
          السعر:{" "}
          <span className="font-bold text-black">
            {currencyFormatter(orderItem.price)}
          </span>
        </p>
      </div>
      <div className="col-span-12 flex flex-col justify-end sm:col-span-3">
        <Link
          to={`/products/${product["_id"]}`}
          className="block w-full rounded-lg bg-slate-600 p-2 text-center text-white duration-150 focus-within:ring-2 focus-within:ring-slate-800 hover:bg-slate-700"
        >
          تفاصيل المنتج
        </Link>
      </div>
    </div>
  );
}
