// components
import { ToastContainer } from "react-toastify";
import { Loading, Pagination } from "../../components/Utility";
import { AdminProductCard } from "../../components/Admin";
// hooks
import { AdminAllProductsHook } from "../../Listeners/Product";

export default function AdminAllProducts() {
  const {
    loading,
    allProducts: { data: products, paginationResult },
    paginationController,
  } = AdminAllProductsHook();
  return (
    <>
      {loading && <Loading />}
      {products && (
        <>
          <h3 className="mb-3 text-xl font-bold">ادارة جميع المنتجات</h3>
          <div>
            <div className="my-4 grid grid-cols-12 items-stretch gap-4">
              {products.map((product, index) => (
                <AdminProductCard key={index} product={product} />
              ))}
            </div>
          </div>
          <Pagination
            totalPages={paginationResult?.["numberOfPages"]}
            onClick={paginationController}
          />
        </>
      )}
      <ToastContainer rtl />
    </>
  );
}
