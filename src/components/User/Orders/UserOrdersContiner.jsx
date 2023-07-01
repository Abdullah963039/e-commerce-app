import { BsCheckCircle, BsClock } from "react-icons/bs";
import { UserOrderList } from "../";
import { currencyFormatter } from "../../../utils";

export default function UserOrdersContiner({ order }) {
  return (
    <>
      <div className="my-4 rounded-lg bg-white p-2 shadow-md shadow-slate-300">
        {/* Order Id */}
        <div className="border-b border-slate-100 py-2 text-xl font-bold">
          طلب رقم No#{order?.id}
        </div>
        {/* Order List */}
        <div>
          <UserOrderList products={order?.cartItems} />
        </div>
        {/* Order Status */}
        <div className="flex flex-col gap-4 p-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          {/* Status */}
          <div className="flex text-slate-600">
            الحالة :
            {order?.isDelivered ? (
              <div className="flex items-center gap-1 px-2 text-green-500">
                <BsCheckCircle />
                تم التسليم
              </div>
            ) : (
              <div className="flex items-center gap-1 px-2 text-slate-700">
                <BsClock />
                لم يتم التسليم
              </div>
            )}
          </div>
          {/* Order Price */}
          <p className="text-slate-600">
            إجمالي السعر :
            <span className="px-2 font-bold text-black">
              {currencyFormatter(order?.totalOrderPrice)}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
