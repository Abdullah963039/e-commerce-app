import { AiFillEdit } from "react-icons/ai";

export default function UserProfile() {
  return (
    <>
      <div className="flex w-full items-start justify-between rounded-lg bg-white p-2">
        {/* User Details */}
        <div className="flex basis-5/6 flex-col justify-between gap-4">
          {/* User Name */}
          <p>
            الاسم: <span className="text-slate-700">علي علي</span>
          </p>
          {/* Phone Number */}
          <p>
            رقم الهاتف: <span className="text-slate-700">3653651</span>
          </p>
          {/* User Email */}
          <p>
            البريد الالكتروني: <span className="text-slate-700">a@a.com</span>
          </p>
        </div>
        {/* Address Controllers */}
        <div className="flex basis-1/6 items-center justify-end">
          <div className="flex cursor-pointer items-center gap-1 hover:text-yellow-500">
            <AiFillEdit className="" /> تعديل
          </div>
        </div>
      </div>
    </>
  );
}
