import { currencyFormatter } from "../../../utils";

export default function OrderProductInfo({ product }) {
  const src = import.meta.env.VITE_BASE_URL + "/products/";

  return (
    <>
      <div className="grid grid-cols-12 p-2">
        {/* Product Image */}
        <div className="col-span-12 place-self-center sm:col-span-3">
          <img
            src={src + product.product.imageCover}
            alt={product.product.title}
            className="max-h-[150px] object-cover"
          />
        </div>
        {/* Product Name */}
        <div className="col-span-12 flex flex-col justify-between gap-2 py-2 sm:col-span-9">
          <div className="flex items-center gap-2 text-slate-500">
            <span className="basis-1/3 text-center">اسم المنتج</span>
            <span className="font-bold text-black">
              {product.product.title}
            </span>
          </div>

          {/* Needed Color */}
          <div className="flex items-center gap-2 text-slate-500">
            <span className="basis-1/3 text-center">اللون المطلوب</span>
            <span
              className="block aspect-square w-6 rounded-full border border-slate-400"
              style={{ background: product.color }}
            ></span>
          </div>

          {/* Needed Quantity */}
          <div className="flex items-center gap-2 text-slate-500">
            <span className="basis-1/3 text-center">الكمية</span>
            <span className="font-bold text-black">{product.count}</span>
          </div>
          {/* Product Price */}
          <div className="flex items-center gap-2 text-slate-500">
            <span className="basis-1/3 text-center">سعر المنتج</span>
            <span className="font-bold text-black">
              {currencyFormatter(product.price)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
