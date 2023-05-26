// components
import { ToastContainer } from "react-toastify";
import { Calendar } from "primereact/calendar";
// icons
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { LoadingIcon } from "../../components/Utility/Loading";
// hooks
import AdminEditCoponPageHook from "../../Listeners/Copons/AdminEditCoponPage.hook";

const INPUT_STYLES =
  "w-full rounded-lg border border-slate-200 h-full p-2 text-center text-sm shadow-sm outline-none placeholder:text-xs placeholder:text-slate-400 sm:p-2 sm:text-base sm:placeholder:text-base  focus:border-slate-400";

export default function AdminEditCoponPage() {
  const {
    loading,
    expiredIn,
    name,
    discount,
    selectExpiredDate,
    updateCopon,
    onChangeName,
    onChangeDiscount,
  } = AdminEditCoponPageHook();
  return (
    <>
      <h3 className="mb-3 text-xl font-bold">تعديل بيانات الكوبون</h3>
      {/* Update copon form */}
      <>
        <form
          onSubmit={updateCopon}
          className="flex max-w-[600px] flex-col gap-2"
        >
          {/* Copon Name */}
          <label className="h-12">
            <input
              value={name || ""}
              onChange={onChangeName}
              type="text"
              placeholder="اسم الكوبون"
              className={INPUT_STYLES}
            />
          </label>

          {/* Copon Expired in */}
          <Calendar
            value={new Date(expiredIn)}
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
              value={discount || ""}
              onChange={onChangeDiscount}
              type="number"
              placeholder="نسبة الخصم"
              className={INPUT_STYLES}
            />
          </label>

          <button
            className={`btn mt-6 w-fit self-end bg-slate-800 px-4 py-2 text-white`}
          >
            {loading ? <LoadingIcon /> : "انشاء كوبون"}
          </button>
        </form>

        <ToastContainer rtl />
      </>
    </>
  );
}
