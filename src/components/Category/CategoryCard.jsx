import { Link } from "react-router-dom";
import { addToSession as handleClickOnCategory } from "../../utils";

export default function CategoryCard({ category }) {
  return (
    <Link
      to="/products"
      onClick={() => handleClickOnCategory("categories", category["_id"])}
      className="relative block flex-1 basis-1/2 p-2 sm:basis-1/3 md:basis-1/6"
    >
      <div className="flex w-full flex-col justify-evenly gap-3 text-center">
        <div className="align-items-center mx-auto flex h-[100px] w-[100px] justify-center rounded-[50%] bg-gradient-to-b from-slate-300 to-slate-100 object-cover p-4">
          <img
            src={category["image"]}
            alt={category["slug"]}
            className="w-16"
          />
        </div>
        <h4 className="text-center">{category["name"]}</h4>
      </div>
    </Link>
  );
}
