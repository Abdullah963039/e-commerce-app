// hooks
import { UserAddAddressHook } from "../../../Listeners/Addresses";
// icons
import { LoadingIcon } from "../../Utility";

export default function UserAddAddress() {
  const { aliasRef, detailsRef, phoneRef, handleCreateAddress, loading } =
    UserAddAddressHook();
  return (
    <>
      <form
        onSubmit={handleCreateAddress}
        className="flex max-w-[600px] flex-col gap-2"
      >
        <input
          ref={aliasRef}
          type="text"
          placeholder="تسمية العنوان مثلا (المنزل، العمل ...)"
          className="w-full rounded-md border border-slate-300 bg-transparent bg-white p-2 outline-none placeholder:text-slate-600"
        />
        <textarea
          ref={detailsRef}
          rows="5"
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
          {loading ? <LoadingIcon /> : "اضافة عنوان"}
        </button>
      </form>
    </>
  );
}
