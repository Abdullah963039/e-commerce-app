// components
import { ToastContainer } from "react-toastify";
import { Calendar } from "primereact/calendar";
// icons
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { LoadingIcon } from "../Utility";
// hooks
import { AdminAddCoponHook } from "../../Listeners/Copons";

const INPUT_STYLES =
  "w-full rounded-lg border border-slate-200 h-full p-2 text-center text-sm shadow-sm outline-none placeholder:text-xs placeholder:text-slate-400 sm:p-2 sm:text-base sm:placeholder:text-base  focus:border-slate-400";

export default function AdminAddCopon() {
  const {
    expiredIn,
    selectExpiredDate,
    nameRef,
    discountRef,
    createNewCopon,
    loading,
  } = AdminAddCoponHook();
  return (
    <>
      <form
        onSubmit={createNewCopon}
        className="flex max-w-[600px] flex-col gap-2"
      >
        {/* Copon Name */}
        <label className="h-12">
          <input
            type="text"
            ref={nameRef}
            placeholder="اسم الكوبون"
            className={INPUT_STYLES}
          />
        </label>

        {/* Copon Expired in */}
        <Calendar
          value={expiredIn}
          onChange={selectExpiredDate}
          minDate={new Date()}
          dateFormat="yy/mm/dd"
          placeholder="تاريخ الانتهاء"
          inputClassName={INPUT_STYLES}
          nextIcon={<AiOutlineLeft />}
          prevIcon={<AiOutlineRight />}
        />

        {/* Copon Discount */}
        <label>
          <input
            type="number"
            ref={discountRef}
            placeholder="نسبة الخصم"
            className={INPUT_STYLES}
          />
        </label>

        <button
          className={`btn w-fit self-end bg-slate-800 px-4 py-2 text-white`}
        >
          {loading ? <LoadingIcon /> : "انشاء كوبون"}
        </button>
      </form>

      <ToastContainer rtl />
    </>
  );
}
