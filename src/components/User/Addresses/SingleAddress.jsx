import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function SingleAddress() {
  return (
    <>
      <div className="flex w-full items-start justify-between rounded-lg bg-white p-2">
        {/* Address Details */}
        <div className="flex basis-5/6 flex-col justify-between gap-4">
          {/* Address Alias */}
          <div className="mx-2 text-2xl font-bold">المنزل</div>
          {/* Address Description */}
          <p className="text-slate-700">سوريا طرطوس</p>
          {/* Phone Number */}
          <p>
            رقم الهاتف: <span className="text-slate-700">3653651</span>
          </p>
        </div>
        {/* Address Controllers */}
        <div className="flex basis-1/6 items-center justify-between">
          <Link to="edit">
            <div className="flex cursor-pointer items-center gap-1 hover:text-yellow-500">
              <AiFillEdit className="" /> تعديل
            </div>
          </Link>
          <div className="flex cursor-pointer items-center gap-1 hover:text-red-500">
            <AiFillDelete className="" /> إزالة
          </div>
        </div>
      </div>
    </>
  );
}
