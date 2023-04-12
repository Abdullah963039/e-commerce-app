import Pagination from "../../components/Utility/Pagination";
import ProductsPageContent from "../../components/Product/ProductsPageContent";
import ProductsCategories from "../../components/Product/ProductsCategories";
import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div className="overflow-hidden bg-slate-100">
      <ProductsCategories />
      <Outlet />
    </div>
  );
}
