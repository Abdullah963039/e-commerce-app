import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import { HeaderHook } from "../../Listeners/Search/Header.hook";

export default function Header() {
  const { onChangeKeyword, keyword } = HeaderHook();

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
          <Link to="/login">
            <button className="btn icon px-3 py-1 text-xs hover:bg-slate-200 hover:text-slate-900 sm:text-base">
              <AiOutlineUser />
              دخول
            </button>
          </Link>
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
