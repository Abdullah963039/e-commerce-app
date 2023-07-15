// components
import { SingleAddress } from "../";
import { Link } from "react-router-dom";
// hooks
import { UserAddressesHook } from "../../../Listeners/Addresses";

export default function UserAddresses() {
  const { allAddresses } = UserAddressesHook();
  return (
    <div className="flex flex-col items-center gap-2">
      {allAddresses?.length > 0 ? (
        allAddresses?.map((address) => (
          <SingleAddress key={address["_id"]} address={address} />
        ))
      ) : (
        <>
          <div className="my-12 text-center text-2xl font-semibold">
            لا يوجد عناوين لعرضها
          </div>
        </>
      )}
      <button className="btn my-4 bg-slate-900 px-4 py-2 text-white hover:bg-slate-950">
        <Link to="add-address">إضافة عنوان جديد</Link>
      </button>
    </div>
  );
}
