import { useEffect } from "react";
import { useStore } from "../../hooks/useStore";

export default function ProductsPageContentHook() {
  const { allProducts, getAllProducts, getAllProductsByPage, loading } =
    useStore();

  useEffect(() => {
    getAllProducts(20);
  }, []);

  const handlePagination = async (pageNumber) =>
    await getAllProductsByPage(20, pageNumber);

  return { allProducts, loading, handlePagination };
}
// Product Count to => ProductsPageContent Compontent
