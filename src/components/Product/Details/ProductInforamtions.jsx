import { BiCartAdd } from "react-icons/bi";

export default function ProductInforamtions() {
  return (
    <div className="flex h-full flex-col justify-evenly gap-4">
      <div>
        <span className="text-slate-600">Categoty</span>
        <p className="px-2">description</p>
        <span className="text-yellow-600">rate</span>
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
        <p className="break-words px-2 text-xl">
          سامسونجسامسونجسامسونجسامسونجسامسونجسامسونجسامسونجسامسونجسامسونجسامسونجسامسونجسامسونجسامسونجسامسونجسامسونجسامسونجسامسونجسامسونجسامسونجسامسونج
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <button className="btn flex cursor-default gap-2 bg-white px-6 py-3 font-bold">
          <del>before</del>
          <span>current</span>
        </button>
        <button className="btn icon flex gap-2 border-sky-500 bg-sky-500 px-6 py-3 text-sm text-white hover:bg-sky-600">
          <BiCartAdd className="text-xl" />
          اضف للعربة
        </button>
      </div>
    </div>
  );
}
