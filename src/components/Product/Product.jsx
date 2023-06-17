// components
import { Link } from "react-router-dom";
// icons
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// utils
import { currencyFormatter } from "../../utils/formatter";
// hooks
import { ProductHook } from "../../Listeners/Product";

const PRODUCT_CARD =
  "basis-full overflow-hidden rounded-lg border-[1px] border-solid border-sky-100 bg-white shadow-sm sm:basis-[calc(50%-1rem)] md:basis-[calc(25%-1rem)]";

export default function Product({ className, product }) {
  const { user, loading, isFavorite, removeFromFavorites, addToFavorites } =
    ProductHook(product["_id"]);

  const productImageCover = product.imageCover.startsWith("http")
    ? product.imageCover
    : `http://localhost:8000/products/${product.imageCover}`;

  return (
    <div className={`${PRODUCT_CARD} ${className}`}>
      <div className="flex h-full flex-col gap-2">
        <div className="relative grow basis-3/4 bg-slate-50 p-4 ">
          <Link
            to={`/products/${product["_id"]}`}
            className="flex h-full items-center justify-center"
          >
            <img
              src={productImageCover}
              alt={product["title"]}
              className="aspect-square object-contain"
              title={product["title"]}
            />
          </Link>
          {user == null || user.role == "admin" ? null : isFavorite ? (
            <button disabled={loading}>
              <AiFillHeart
                title="ازالة من المفضلة"
                aria-label="ازالة من المفضلة"
                onClick={removeFromFavorites}
                className="absolute left-2 top-2 cursor-pointer text-2xl text-red-300 duration-150 hover:text-red-500"
              />
            </button>
          ) : (
            <button disabled={loading}>
              <AiOutlineHeart
                title="اضف الى المفضلة"
                aria-label="اضف الى المفضلة"
                onClick={addToFavorites}
                className="absolute left-2 top-2 cursor-pointer text-2xl text-slate-300 duration-150 hover:text-red-500"
              />
            </button>
          )}
        </div>
        <div className="flex shrink basis-1/4 flex-col justify-end gap-4">
          <p className="whitespace-break-spaces p-2 text-slate-500">
            {product["title"]}
          </p>
          <div className="mt-2 flex items-center justify-between justify-self-end px-3 pb-4">
            <div className="flex items-center gap-1 font-bold text-yellow-400">
              <AiFillStar />
              {product["ratingsAverage"] || 0}
            </div>
            <div className="text-sm font-bold xl:text-base">
              {currencyFormatter(product["price"])}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
