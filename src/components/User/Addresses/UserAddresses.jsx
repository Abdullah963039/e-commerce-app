//? User Addresses
import SingleAddress from "./SingleAddress";
import { Link } from "react-router-dom";

export default function UserAddresses() {
  return (
    <div className="flex flex-col items-center gap-2">
      <SingleAddress />
      <SingleAddress />
      <SingleAddress />
      <button className="btn my-4 bg-slate-900 px-4 py-2 text-white hover:bg-slate-950">
        <Link to="add-address">إضافة عنوان جديد</Link>
      </button>
    </div>
  );
}
