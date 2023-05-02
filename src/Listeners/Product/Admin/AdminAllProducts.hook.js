import { useEffect } from "react";
import { useStore } from "../../../hooks/useStore";
import { useState } from "react";

export const AdminAllProductsHook = () => {
  const [rerender, setRerender] = useState(false); // state for make rerender when deleting products
  const { allProducts, getAllProducts, getAllProductsByPage, loading } =
    useStore();

  useEffect(() => {
    getAllProducts(20);
  }, [rerender]); // to get all products depending on rerender

  const rerenderComponent = () => setRerender(!rerender); // rerender component handler

  const paginationController = (pageNumber) =>
    getAllProductsByPage(20, pageNumber); // get all products by page number

  return {
    paginationController,
    allProducts,
    loading,
    rerenderComponent,
  };
};
