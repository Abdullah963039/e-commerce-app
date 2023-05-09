// hooks
import { useEffect } from "react";
import { useStore } from "../../hooks/useStore";

export default function ProductsPageContentHook() {
  const {
    allProducts,
    getAllProducts,
    getAllProductsByPage,
    getAllProductsBySearch,
    loading,
  } = useStore();

  const getProduct = async () => {
    let keyword, sort, categories, brands, priceFrom, priceTo;

    if (localStorage.getItem("keyword"))
      keyword = localStorage.getItem("keyword");
    else keyword = "";
    if (localStorage.getItem("sort")) sort = localStorage.getItem("sort");
    else sort = "";
    if (localStorage.getItem("categories"))
      categories = localStorage.getItem("categories");
    else categories = "";
    if (localStorage.getItem("brands")) brands = localStorage.getItem("brands");
    else brands = "";
    if (localStorage.getItem("priceFrom"))
      priceFrom = localStorage.getItem("priceFrom");
    else priceFrom = "";
    if (localStorage.getItem("priceTo"))
      priceTo = localStorage.getItem("priceTo");
    else priceTo = "";

    console.log(
      `keyword=${keyword}&sort=${sort}&${categories}&${brands}${
        priceFrom != "" ? `&price[gt]=${priceFrom}` : ""
      }${priceTo != "" ? `&price[lte]=${priceTo}` : ""}`
    );

    await getAllProductsBySearch(
      `keyword=${keyword}&sort=${sort}&${categories}&${brands}${
        priceFrom != "" ? `&price[gt]=${priceFrom}` : ""
      }${priceTo != "" ? `&price[lte]=${priceTo}` : ""}`
    );
  };

  // useEffect(() => {
  //   getAllProducts(20);
  // }, []);

  const handlePagination = async (pageNumber) => {
    let keyword, sort, categories, brands;
    if (localStorage.getItem("keyword"))
      keyword = localStorage.getItem("keyword");
    else keyword = "";
    if (localStorage.getItem("keyword")) sort = localStorage.getItem("sort");
    else sort = "";
    if (localStorage.getItem("categories"))
      categories = localStorage.getItem("categories");
    else categories = "";
    if (localStorage.getItem("brands")) brands = localStorage.getItem("brands");
    else brands = "";
    if (localStorage.getItem("priceForm"))
      priceForm = localStorage.getItem("priceForm");
    else priceForm = "";
    if (localStorage.getItem("priceTo"))
      priceTo = localStorage.getItem("priceTo");
    else priceTo = "";

    await getAllProductsBySearch(
      `keyword=${keyword}&page=${pageNumber}&sort=${sort}&${categories}&${brands}&price[gt]=${priceForm}&price[lte]=${priceTo}`
    );
  };

  return { allProducts, loading, handlePagination, getProduct };
}
