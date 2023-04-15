import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import img from "../../../assets/imgs/prod1.png";

export default function UserFavoriteItem() {
  return (
    <>
      <div className="col-span-12 overflow-hidden rounded-lg bg-white shadow-md sm:col-span-6 md:col-span-4 lg:col-span-3">
        <div className="flex h-full flex-col gap-2">
          <div className="relative basis-1/2 bg-slate-50 p-4 ">
            {/* Set ID Product */}
            <Link to="/products/123">
              <img
                src={img}
                alt="sadfa0"
                loading="lazy"
                className="m-auto w-[250px]"
              />
            </Link>
            <AiFillHeart className="absolute bottom-4 left-4 cursor-pointer text-xl text-red-500" />
          </div>
          <div className="flex basis-1/2 flex-col justify-between">
            <p className="whitespace-break-spaces p-2 text-slate-500">
              describe describedescribed escribede scribedescr ibedesc
              ribedescribedescrib
            </p>
            <div className="mt-2 flex items-center justify-between justify-self-end px-3 pb-4">
              <div className="flex items-center gap-1 font-bold text-yellow-400">
                <AiFillStar />
                4.5
              </div>
              <div className="font-bold">200 جنيه</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
