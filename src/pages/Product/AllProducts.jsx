import ProductsPageContentHook from "../../Listeners/Product/ProductsPageContent.hook";
import ProductsPageContent from "../../components/Product/ProductsPageContent";
import Pagination from "../../components/Utility/Pagination";

export default function AllProducts() {
  const {
    allProducts: { paginationResult },
    handlePagination,
  } = ProductsPageContentHook();

  return (
    <>
      <ProductsPageContent />
      <Pagination
        totalPages={paginationResult?.numberOfPages}
        onClick={handlePagination}
      />
    </>
  );
}
