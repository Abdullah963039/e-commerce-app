// hooks
import { useState } from "react";
import ProductsPageContentHook from "../Product/ProductsPageContent.hook";
import { useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export const HeaderHook = () => {
  const { getProduct } = ProductsPageContentHook();
  const [keyword, setKeyword] = useState("");

  // useDebounce(() => dispatch({type: ACTIONS.SET_KEYWORD, payload: keyword}), 1000, [keyword]);

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
    localStorage.setItem("keyword", e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 1000);
  }, [keyword]);

  return { onChangeKeyword };
};
