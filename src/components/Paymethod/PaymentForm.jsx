export default function PaymentForm() {
  return (
    <>
      <form className="flex flex-col gap-4 rounded-md bg-white shadow-md">
        <label className="flex items-center gap-2 px-2 py-4">
          <input type="radio" name="payment" value="pay with card" required />
          الدفع عن طريق بطاقة ائتمانية
        </label>
        <label className="flex items-center gap-2 px-2 py-4 ">
          <input type="radio" name="payment" value="pay whene recive" />
          الدفع عند الاستلام
        </label>
        <div className="my-2 flex items-center justify-end gap-4 px-2">
          <button
            disabled
            className="btn flex cursor-default gap-2 bg-white px-6 py-3 font-bold"
          >
            2000 جنيه
          </button>
          <button
            type="submit"
            className="btn border-slate-700 bg-slate-700 px-6 py-3 text-sm text-white hover:bg-slate-800"
          >
            اتمام الشراء
          </button>
        </div>
      </form>
    </>
  );
}
