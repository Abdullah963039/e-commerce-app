// hooks
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "../../hooks/useStorage";
import { useDebounce } from "../../hooks/useDebounce";
import { useStore } from "../../hooks";
import { ProductsPageContentHook } from "../Product";
// utils
import { notify } from "../../utils";

export const HeaderHook = () => {
  const [keyword, setKeyword] = useSessionStorage("keyword", ""); // Search by keyword
  const { makeSearch } = ProductsPageContentHook(); // Doing search functionality

  const { user, logout, ordersCount } = useStore(); // use global store

  const navigator = useNavigate(); // Navigator

  const onChangeKeyword = (e) => setKeyword(e.target.value);

  useDebounce(() => makeSearch(), 1000, [keyword]); // Debouncing inputed keyword after change 1s

  const logoutUser = () => {
    logout();

    notify("done", "تم تسجيل الخروج بنجاح"); // notify user if is logged out

    setTimeout(() => {
      navigator("/login"); // navigate to login page after success 1s
    }, 1000);
  };

  return {
    keyword,
    onChangeKeyword,
    logoutUser,
    user,
    ordersCount,
  };
};
