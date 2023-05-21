// hooks
import { useSessionStorage } from "../../hooks/useStorage";
import { useDebounce } from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import ProductsPageContentHook from "../Product/ProductsPageContent.hook";
// global store
import { useStore } from "../../hooks/useStore";
// utils
import notify from "../../utils/notifcation";

export const HeaderHook = () => {
  const [keyword, setKeyword] = useSessionStorage("keyword", ""); // Search by keyword
  const { makeSearch } = ProductsPageContentHook(); // Doing search functionality

  const { user, logout } = useStore(); // use global store

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

  return { keyword, onChangeKeyword, logoutUser, user };
};
