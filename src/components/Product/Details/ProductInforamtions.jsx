import { BiCartAdd } from "react-icons/bi";

export default function ProductInforamtions() {
  return (
    <div className="flex h-full flex-col justify-evenly gap-4">
      <div>
        <span className="text-slate-600">الكترونيات</span>
        <p className="px-2">ايفون ايفون ايفون ايفون ايفون </p>
        <span className="text-yellow-600">4.5</span>
      </div>
      <div>
        <span className="ml-4 text-slate-600">الماركة</span>
        <b>سامسونج</b>
      </div>
      <div className="flex items-center gap-2">
        <span className="circle bg-sky-400"></span>
        <span className="circle bg-red-400"></span>
        <span className="circle bg-indigo-600"></span>
        <span className="circle bg-emerald-500"></span>
      </div>
      <div>
        <span className="ml-4 text-slate-600">المواصفات</span>
        <p className="whitespace-break-spaces px-2 text-xl">
          سامسونجسامسونجسامسونجسامسونجسامسونجسامسونج
          سامسونجسامسونجسامسونجسامسونجسامسونجسامسونجسامسونجسامسون
          جسامسونجسامسونجسامسونجسامسونجسامسونجسامسونج
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <button className="btn flex cursor-default gap-2 bg-white px-6 py-3 font-bold">
          <del className="text-slate-500">5000</del>
          <span>4000</span>
        </button>
        <button className="btn icon flex gap-2 border-slate-700 bg-slate-700 px-6 py-3 text-sm text-white hover:bg-slate-900">
          <BiCartAdd className="text-xl" />
          اضف للعربة
        </button>
      </div>
    </div>
  );
}
