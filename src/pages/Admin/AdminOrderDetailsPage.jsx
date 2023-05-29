import { CartItem } from "../../components/Cart";
import { AdminUserDetails } from "../../components/Admin";

export default function AdminOrderDetailsPage() {
  return (
    <div>
      <h3 className="mb-3 text-xl font-bold">تفاصيل الطلب رقم #65116 </h3>
      <div className="mb-4 flex flex-col gap-2">
        <CartItem />
        <CartItem />
      </div>
      <>
        <AdminUserDetails />
      </>
    </div>
  );
}
