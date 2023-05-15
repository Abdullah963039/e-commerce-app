// hooks
import { useSessionStorage } from "../../hooks/useStorage";
import { useDebounce } from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import ProductsPageContentHook from "../Product/ProductsPageContent.hook";
// global store
import { useStore } from "../../hooks/useStore";
// utils
import notify from "../../utils/notifcation";
import { getLocal } from "../../utils/getValueFromStorage";
import { useEffect } from "react";

export const HeaderHook = () => {
  const userId = getLocal("user"); // Get user id from localStorage

  const [keyword, setKeyword] = useSessionStorage("keyword", ""); // Search by keyword
  const { makeSearch } = ProductsPageContentHook(); // Doing search functionality

  const { getLoggedUser, user, loading } = useStore();

  const navigator = useNavigate(); // Navigator

  const onChangeKeyword = (e) => setKeyword(e.target.value);

  useDebounce(() => makeSearch(), 1000, [keyword]); // Debouncing inputed keyword after change 1s

  useEffect(() => {
    if (userId != null) getLoggedUser(userId);
  }, [loading]);

  const logoutUser = () => {
    localStorage.removeItem("user"); // Remove the user from localStorage
    localStorage.removeItem("token"); // Remove the user from localStorage

    notify("done", "تم تسجيل الخروج بنجاح"); // notify user if is logged out

    setTimeout(() => {
      navigator("/login"); // navigate to login page after success 1s
    }, 1000);
  };

  // console.log(user);

  return { keyword, onChangeKeyword, logoutUser, user };
};
