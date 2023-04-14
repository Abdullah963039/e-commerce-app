import { AiFillDelete, AiFillEdit, AiFillStar } from "react-icons/ai";
import img from "../../assets/imgs/labtop.png";

export default function AdminProductCard() {
  return (
    <div className="col-span-12 h-fit rounded-lg bg-white p-2 sm:col-span-6 md:col-span-4">
      {/* Product Control */}
      <div className="mb-2 flex items-center justify-between">
        <div className="group flex cursor-pointer items-center gap-1">
          <AiFillDelete className="text-slate-500 group-hover:text-red-500" />
          <span className="text-slate-500 group-hover:text-red-500">إزالة</span>
        </div>
        <div className="group flex cursor-pointer items-center gap-1">
          <AiFillEdit className="text-slate-500 group-hover:text-yellow-500" />
          <span className="text-slate-500 group-hover:text-yellow-500">
            تعديل
          </span>
        </div>
      </div>
      {/* Product Image */}
      <div className="flex w-full items-center justify-center p-2">
        <img src={img} alt="asd" className="object-cover" />
      </div>
      {/* Product Mini Description */}
      <div className="py-3 text-slate-700">Description</div>
      {/* Rate & Price */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-yellow-500">
          <AiFillStar /> 4.5
        </div>
        <span className="font-bold">price</span>
      </div>
    </div>
  );
}
