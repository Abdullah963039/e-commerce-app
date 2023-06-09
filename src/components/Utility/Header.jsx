// icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiUserLine } from "react-icons/ri";

// logo
import logo from "../../assets/imgs/logo.png";
// components
import { Link } from "react-router-dom";
import { DropdownMenu } from "./";
// hooks
import { HeaderHook } from "../../Listeners/Search";

export default function Header() {
  const { keyword, onChangeKeyword, logoutUser, user, ordersCount } =
    HeaderHook();

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
            />
          )}
          {user?.["role"] === "user" ? (
            <>
              <Link to="/cart">
                <button className="btn icon relative px-3 py-1 text-xs hover:bg-slate-200 hover:text-slate-900 sm:text-base">
                  <AiOutlineShoppingCart />
                  العربة
                  <Badge count={ordersCount} />
                </button>
              </Link>
            </>
          ) : (
            <>
              <button
                disabled
                className="btn icon relative px-3 py-1 text-xs hover:bg-slate-200 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-transparent disabled:hover:text-white sm:text-base"
              >
                <AiOutlineShoppingCart />
                العربة
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function Badge({ count = 0 }) {
  if (count == 0 || count == null || count == undefined) return <></>;

  return (
    <>
      {count > 99 ? (
        <span className="absolute -left-6 -top-4 flex h-4 w-fit translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-red-500 px-1 text-xs text-slate-200 ">
          99+
        </span>
      ) : (
        <span className="absolute -left-4 -top-4 flex aspect-square w-4 translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-red-500 text-xs text-slate-200 ">
          {count}
        </span>
      )}
    </>
  );
}
