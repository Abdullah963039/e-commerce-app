// hooks
import { UserEditAddressHook } from "../../../Listeners/Addresses";
// icons
import { LoadingIcon } from "../../Utility";

export default function UserEditAddress() {
  const { aliasRef, detailsRef, handleUpadteAddress, loading, phoneRef } =
    UserEditAddressHook();
  return (
    <>
      <form
        onSubmit={handleUpadteAddress}
        className="flex max-w-[600px] flex-col gap-2"
      >
        <input
          ref={aliasRef}
          type="text"
          placeholder="اسم العنوان الجديد"
          className="w-full rounded-md border border-slate-300 bg-transparent bg-white p-2 outline-none placeholder:text-slate-600"
        />
        <textarea
          ref={detailsRef}
          rows="3"
          placeholder="العنوان بالتفصيل"
          className="min-h-[50px] w-full rounded-md border border-slate-300 bg-transparent bg-white p-2 outline-none placeholder:text-slate-600"
        ></textarea>
        <input
          ref={phoneRef}
          type="number"
          placeholder="رقم الهاتف"
          className="w-full rounded-md border border-slate-300 bg-transparent bg-white p-2 !text-right outline-none placeholder:text-slate-600"
        />
        <button
          type="submit"
          className="btn w-fit self-end bg-slate-800 px-4 py-2 text-white hover:bg-slate-900"
        >
          {loading ? <LoadingIcon /> : "حفظ التغييرات"}
        </button>
      </form>
    </>
  );
}
