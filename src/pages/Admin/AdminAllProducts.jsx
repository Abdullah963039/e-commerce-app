//? Admin > All Product Page

import AdminProductCard from "../../components/Admin/AdminProductCard";

export default function AdminAllProducts() {
  return (
    <>
      <h3 className="mb-3 text-xl font-bold">ادارة جميع المنتجات</h3>
      <div className="grid grid-cols-12 gap-4">
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
      </div>
    </>
  );
}
