export default function UserAddAddress() {
  return (
    <>
      <form className="flex max-w-[600px] flex-col gap-2">
        <input
          type="text"
          name="address-name"
          required
          placeholder="تسمية العنوان مثلا (المنزل، العمل ...)"
          className="w-full rounded-md border border-slate-300 bg-transparent bg-white p-2 outline-none placeholder:text-slate-600"
        />
        <textarea
          name="address-details"
          rows="5"
          required
          placeholder="العنوان بالتفصيل"
          className="min-h-[50px] w-full rounded-md border border-slate-300 bg-transparent bg-white p-2 outline-none placeholder:text-slate-600"
        ></textarea>
        <input
          type="tel"
          name="phone-number"
          placeholder="رقم الهاتف"
          required
          className="w-full rounded-md border border-slate-300 bg-transparent bg-white p-2 outline-none placeholder:text-slate-600"
        />
        <button
          type="submit"
          className="btn w-fit self-end bg-slate-800 px-4 py-2 text-white"
        >
          اضافة عنوان
        </button>
      </form>
    </>
  );
}
