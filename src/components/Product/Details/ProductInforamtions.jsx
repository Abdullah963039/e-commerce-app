// icons
import { BiCartAdd } from "react-icons/bi";
// utlis
import { currencyFormatter } from "../../../utils";
import { ProductInforamtionsHook } from "../../../Listeners/Product";

export default function ProductInforamtions({ product }) {
  if (!product) return;

  const {
    title,
    description,
    quantity,
    price,
    availableColors,
    categoryName,
    brandName,
    ratingsQuantity,
  } = product;

  const { isIncluded, clickOnColor, onAddToCart } = ProductInforamtionsHook();

  return (
    <div className="flex h-full flex-col justify-evenly gap-4">
      <div className="flex items-center justify-between">
        <span className="text-slate-600">{categoryName}</span>
        <p className="text-xl font-bold">{title}</p>
        <div className="flex items-center gap-4">
          <span className="text-slate-600">عدد المقيّمين</span>
          <span className="text-yellow-600">{ratingsQuantity}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-slate-600">الماركة</span>
        <b>{brandName}</b>
      </div>
      <div className="flex items-center gap-2">
        <span className=" text-slate-600">الالوان المتاحة</span>
        <div className="flex items-center gap-2">
          {availableColors?.map((hex, index) => (
            <span
              key={index}
              onClick={() => clickOnColor(hex)}
              className={`circle cursor-pointer ${
                isIncluded(hex) ? "ring-2 ring-slate-500" : ""
              }`}
              style={{ backgroundColor: hex, borderColor: hex }}
            ></span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-slate-600">الكمية المتاحة</span>
        <b>{quantity}</b>
      </div>
      <div>
        <span className="ml-4 text-slate-600">الوصف</span>
        <p className="whitespace-break-spaces px-2 text-xl">{description}</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <button className="btn flex cursor-default gap-2 bg-white px-6 py-3 font-bold">
          {/* Price After Discount */}
          {/* <del className="text-slate-500">5000</del> */}
          {/* Real Price */}
          <span>{currencyFormatter(price)}</span>
        </button>
        <button
          onClick={onAddToCart}
          className="btn icon flex gap-2 border-slate-700 bg-slate-700 px-6 py-3 text-sm text-white hover:bg-slate-900"
        >
          <BiCartAdd className="text-xl" />
          اضف للعربة
        </button>
      </div>
    </div>
  );
}
