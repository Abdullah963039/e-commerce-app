import { RiAdminLine, RiUserLine } from "react-icons/ri"; // user icons
import { FiLogOut } from "react-icons/fi"; // user icons
import { BsGear } from "react-icons/bs"; // user icons
import { Link } from "react-router-dom";

export default function DropdownMenu({ name = "us", role = "user", onLogout }) {
  let online = navigator.onLine;
  return (
    <>
      <div className=" relative">
        <button className="btn icon peer px-3 py-1 text-xs hover:bg-slate-200 hover:text-slate-900 sm:text-base">
          {role === "user" ? (
            <RiUserLine className={online ? "text-teal-600" : "text-red-500"} />
          ) : (
            <RiAdminLine
              className={online ? "text-teal-600" : "text-red-500"}
            />
          )}
          {name}
        </button>
        <ul className="absolute left-0 top-full z-40 hidden w-fit min-w-max justify-start overflow-hidden rounded-md bg-white text-xs text-slate-600 shadow-md  delay-1000 duration-150 hover:flex  peer-hover:flex xs:flex-col md:text-base">
          {role === "user" ? (
            <Link to={"/user"} title="الصفحة الشخصية">
              <li className="flex items-center gap-2 p-2 duration-150 hover:bg-slate-600 hover:text-slate-50 xs:pl-4">
                <RiUserLine />
                <span className="hidden xs:inline">الصفحة الشخصية</span>
              </li>
            </Link>
          ) : (
            <Link to={"/admin"} title="لوحة التحكم">
              <li className="flex items-center gap-2 p-2 duration-150 hover:bg-slate-600 hover:text-slate-50 xs:pl-4">
                <BsGear />
                <span className="hidden xs:inline">لوحة التحكم</span>
              </li>
            </Link>
          )}

          <li
            onClick={onLogout}
            className="flex cursor-pointer items-center gap-2 p-2 duration-150 hover:bg-slate-600 hover:text-slate-50 xs:pl-4"
            title="تسجيل خروج"
          >
            <FiLogOut />
            <span className="hidden xs:inline">تسجيل خروج</span>
          </li>
        </ul>
      </div>
    </>
  );
}
