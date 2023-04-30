import ProductsCategories from "../../components/Product/ProductsCategories";
import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div className="overflow-hidden bg-slate-200">
      <ProductsCategories />
      <Outlet />
    </div>
  );
}
