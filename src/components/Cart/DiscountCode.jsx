//? Add Or Use Copon Code From ..

export default function DiscountCode() {
  return (
    <div className="flex flex-col gap-3 py-3">
      <div className="relative flex w-full">
        <input
          type="text"
          className="w-[80%] border-[1px] border-l-0 border-sky-400 px-3 text-center caret-sky-500 outline-none placeholder:text-xs"
          placeholder="كود الخصم"
        />
        <button className="btn w-[20%] rounded-none border-sky-400 bg-sky-400 p-2 text-white">
          تطبيق
        </button>
      </div>
      <div className="border-[1px] border-slate-300 py-3 text-center font-semibold">
        2132 جنيه
      </div>
      <button className="bg-sky-400 py-3 text-center font-bold text-white">
        اتمام الشراء
      </button>
    </div>
  );
}
