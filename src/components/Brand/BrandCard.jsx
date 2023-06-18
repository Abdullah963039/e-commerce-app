import { Link } from "react-router-dom";
import { addToSession as handleClickOnBrand } from "../../utils";

const BRAND_STYLE =
  "basis-[calc(50%-0.5rem)] rounded-lg border-[1px] border-solid border-sky-100 bg-white p-2 shadow-sm md:basis-[calc(33.333333%-1rem)] lg:basis-[calc(16.666667%-1rem)]";

export default function BrandCard({ brand }) {
  return (
    <Link
      to="/products"
      onClick={() => handleClickOnBrand("brands", brand["_id"])}
      className={BRAND_STYLE}
    >
      <div className="flex h-full items-center justify-center overflow-hidden">
        <img
          src={brand.image}
          alt={brand.slug}
          className="m-auto aspect-square w-24 object-contain"
          title={brand.name}
        />
      </div>
    </Link>
  );
}
