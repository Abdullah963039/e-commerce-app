import { AdminUserDetails, OrderProductInfo } from "../../components/Admin";
import { AdminUserDetailsHook } from "../../Listeners/Orders";
import { currencyFormatter, dateFormatter } from "../../utils";

export default function AdminOrderDetailsPage() {
  const { order } = AdminUserDetailsHook();

  if (order === null) return null;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="mb-3 text-2xl font-bold">الطلب رقم #{order.id} </h1>
      <div className="mb-4 flex flex-col divide-y rounded-lg bg-white p-4 shadow-md">
        {/* Order Items */}
        <h2 className="mb-3 text-xl font-bold">المنتجات المطلوبة : </h2>
        {order.cartItems.map((item) => (
          <OrderProductInfo key={item["_id"]} product={item} />
        ))}
      </div>

      {/* More Details */}
      <div className="mb-2 divide-y rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-3 text-xl font-bold">تفاصيل الطلب</h2>
        <div className="flex flex-col gap-2 p-2">
          {/* Order Total Price */}
          <p className="flex items-center gap-2 text-slate-600">
            <span className="basis-1/4 text-center">اجمالي تكلفة الطلب</span>
            <span className="font-bold text-slate-900">
              {currencyFormatter(order.totalOrderPrice)}
            </span>
          </p>
          {/* Order Payment Method */}
          <p className="flex items-center gap-2 text-slate-600">
            <span className="basis-1/4 text-center">طريقة الدفع</span>
            <span className="font-bold text-slate-900">
              {order.paymentMethodType === "cash" ? "كاش" : "فيزا"}
            </span>
          </p>
          {/* Order Shipping Price */}
          <p className="flex items-center gap-2 text-slate-600">
            <span className="basis-1/4 text-center">تكلفة التوصيل</span>
            <span className="font-bold text-slate-900">
              {order.shippingPrice == 0
                ? "مجانا"
                : currencyFormatter(order.shippingPrice)}
            </span>
          </p>
          {/* Order Tax Price */}
          <p className="flex items-center gap-2 text-slate-600">
            <span className="basis-1/4 text-center">ضريبة الدفع</span>
            <span className="font-bold text-slate-900">
              {order.taxPrice == 0
                ? "لا يوجد ضريبة"
                : currencyFormatter(order.taxPrice)}
            </span>
          </p>
          {/* Order Address */}
          {order.shippingAddress != null && (
            <>
              <p className="flex items-center gap-2 text-slate-600">
                <span className="basis-1/4 text-center">العنوان</span>
                <span className="font-bold text-slate-900">
                  {order.shippingAddress.details}
                </span>
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <span className="basis-1/4 text-center">الرقم</span>
                <span className="font-bold text-slate-900">
                  {order.shippingAddress.phone}
                </span>
              </p>
            </>
          )}
          {/* Order Craeted At Date */}
          <p className="flex items-center gap-2 text-slate-600">
            <span className="basis-1/4 text-center">تاريخ الطلب</span>
            <span className="font-bold text-slate-900">
              {dateFormatter(order.createdAt)}
            </span>
          </p>
        </div>
      </div>

      {/* User Details */}
      <>
        <AdminUserDetails
          user={order.user}
          isDelivered={order.isDelivered}
          isPaid={order.isPaid}
        />
      </>
    </div>
  );
}
