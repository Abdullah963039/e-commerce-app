// icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiAdminLine, RiUserLine } from "react-icons/ri"; // user icons
import { FiLogOut } from "react-icons/fi";
// logo
import logo from "../../assets/imgs/logo.png";
// components
import { Link } from "react-router-dom";
// hooks
import { HeaderHook } from "../../Listeners/Search/Header.hook";
import DropdownMenu from "./DropdownMenu";

export default function Header() {
  const { onChangeKeyword, keyword, user, logoutUser, isOnline } = HeaderHook();

  return (
    <header className="bg-gradient-to-bl from-slate-900 to-slate-700">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-fit max-w-[60px]" />
          </Link>
        </div>
        {location.pathname === "/products" && (
          <div>
            <input
              type="text"
              placeholder={"ابحث هنا"}
              className="search w-full max-w-xs rounded-md py-1 text-center text-white outline-none placeholder:text-sm placeholder:text-slate-50 focus-within:text-slate-900 focus-within:placeholder:text-slate-800"
              value={keyword}
              onChange={onChangeKeyword}
            />
          </div>
        )}
        <div className="mr-2 flex gap-1 justify-self-start text-white sm:gap-2 md:gap-4 ">
          {user == null ? (
            <>
              <Link to="/login">
                <button className="btn icon px-3 py-1 text-xs hover:bg-slate-200 hover:text-slate-900 sm:text-base">
                  <RiUserLine />
                  دخول
                </button>
              </Link>
            </>
          ) : (
            <DropdownMenu
              name={user["name"]}
              role={user["role"]}
              onLogout={logoutUser}
              online={isOnline}
            />
          )}
          <Link to="/cart">
            <button className="btn icon px-3 py-1 text-xs hover:bg-slate-200 hover:text-slate-900 sm:text-base">
              <AiOutlineShoppingCart />
              العربة
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
