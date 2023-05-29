// components
import ProductGallary from "./ProductGallary";
import ProductInforamtions from "./ProductInforamtions";
// hooks
import { ProductDetailsHook } from "../../../Listeners/Product";

export default function ProductDetails() {
  const { loading, product, productImages } = ProductDetailsHook();
  return (
    <>
      {/* Product Information */}
      <div className="grid grid-cols-12 gap-8 py-4">
        {/* Product Gallary */}
        <div className="col-span-12 h-full rounded-[1.5rem] border-[1px] border-solid bg-white p-2 sm:col-span-4">
          <ProductGallary images={productImages} />
        </div>
        {/* Product Description */}
        <div className="col-span-12 p-4 sm:col-span-8  2xl:text-xl">
          <ProductInforamtions product={product} />
        </div>
      </div>
    </>
  );
}
