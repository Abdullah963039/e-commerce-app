//? Add Or Use Copon Code From ..

import { Link } from "react-router-dom";

export default function DiscountCode() {
  return (
    <div className="flex flex-col gap-3 py-3">
      <div className="relative flex w-full">
        <input
          type="text"
          className="w-[80%] border-[1px] border-l-0 border-slate-500 px-3 text-center outline-none placeholder:text-xs"
          placeholder="كود الخصم"
        />
        <button className="btn w-[20%] rounded-none border-slate-700 bg-slate-700 p-2 text-white">
          تطبيق
        </button>
      </div>
      <div className="border-[1px] border-slate-300 py-3 text-center font-semibold">
        2132 جنيه
      </div>
      <button className="bg-slate-700 py-3 text-center font-bold text-white">
        <Link to="/paymethod">اتمام الشراء</Link>
      </button>
    </div>
  );
}
