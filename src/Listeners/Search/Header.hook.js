// hooks
import { useSessionStorage } from "../../hooks/useStorage";
import { useDebounce } from "../../hooks/useDebounce";
import ProductsPageContentHook from "../Product/ProductsPageContent.hook";

export const HeaderHook = () => {
  const { makeSearch } = ProductsPageContentHook();

  const [keyword, setKeyword] = useSessionStorage("keyword", "");

  const onChangeKeyword = (e) => {
    if (location.pathname === "/products") setKeyword(e.target.value);
  };

  useDebounce(() => makeSearch(), 1000, [keyword]);

  return { keyword, onChangeKeyword };
};
