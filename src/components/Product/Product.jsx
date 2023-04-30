import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { currencyFormatter } from "../../utils/formatter";

const PRODUCT_CARD =
  "basis-full overflow-hidden rounded-lg border-[1px] border-solid border-sky-100 bg-white shadow-sm sm:basis-[calc(50%-1rem)] md:basis-[calc(25%-1rem)]";

export default function Product({ className, product }) {
  return (
    <div className={`${PRODUCT_CARD} ${className}`}>
      <div className="flex h-full flex-col gap-2">
        <div className="relative grow basis-3/4 bg-slate-50 p-4 ">
          {/* Set ID Product */}
          <Link
            to={`/products/${product["_id"]}`}
            className="flex h-full items-center justify-center"
          >
            <img
              src={product["imageCover"]}
              alt={product["title"]}
              className="max-h-full max-w-full object-contain"
              title={product["title"]}
            />
          </Link>
          <AiOutlineHeart
            title="اضف للمفضلة"
            className="absolute left-2 top-2 cursor-pointer text-2xl text-slate-300 duration-150 hover:text-red-500"
          />
        </div>
        <div className="flex shrink basis-1/4 flex-col justify-end gap-4">
          <p className="whitespace-break-spaces p-2 text-slate-500">
            {product["description"]}
          </p>
          <div className="mt-2 flex items-center justify-between justify-self-end px-3 pb-4">
            <div className="flex items-center gap-1 font-bold text-yellow-400">
              <AiFillStar />
              {product["ratingsQuantity"]}
            </div>
            <div className="font-bold">
              {currencyFormatter(product["price"])}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
