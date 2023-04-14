import { Link } from "react-router-dom";
import img from "../../assets/imgs/mobile.png";
import { BsTrash } from "react-icons/bs";

export default function AdminOrderItem() {
  return (
    <Link to="/admin/orders/651">
      <div className="grid w-full grid-cols-12 rounded-lg bg-white p-2">
        {/* Item Image */}
        <div className="col-span-3 place-self-center">
          <img src={img} alt="das" className="max-h-[150px] object-cover" />
        </div>
        {/* Item Info */}
        <div className="col-span-7 flex flex-col justify-between gap-2 py-2">
          <span className="text-sm text-slate-500">طلب رقم #200</span>
          <p className="whitespace-break-spaces indent-2 text-slate-800">
            ايفون
          </p>
          <p className="flex items-center gap-2 text-slate-500">
            الماركة:{" "}
            <span className="text-base font-bold text-slate-900">آبل</span>
            <span className="circle mx-2 inline-block bg-sky-600"></span>
          </p>
          <label htmlFor="quantity" className="text-slate-500">
            الكمية:{" "}
            <input
              type="number"
              className="max-w-[50px] text-slate-900 outline-none"
              name="quantity"
              id="quantity"
              min={1}
            />
          </label>
        </div>
        {/* Delete & Item Price */}
        <div className="col-span-2 flex flex-col items-end justify-between p-2">
          <div className="flex cursor-pointer items-center gap-2 duration-150 hover:text-red-500">
            <BsTrash />
            ازالة
          </div>
          <span className="text-xl font-bold">200 جنيه</span>
        </div>
      </div>
    </Link>
  );
}
