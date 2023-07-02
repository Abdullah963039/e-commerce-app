import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { UserOrderList } from "../";
import { currencyFormatter, dateFormatter } from "../../../utils";

export default function UserOrdersContiner({ order }) {
  return (
    <>
      <div className="my-4 rounded-lg bg-white p-2 shadow-md shadow-slate-300">
        {/* Order Id & Date*/}
        <div className="flex items-center gap-2">
          <h3 className="border-b border-slate-100 py-2 text-xl font-bold">
            طلب رقم No#{order?.id}
          </h3>

          <span className="text-sm text-slate-700">
            ({dateFormatter(order?.createdAt)})
          </span>
        </div>
        {/* Order List */}
        <div>
          <UserOrderList products={order?.cartItems} />
        </div>
        {/* Order Status */}
        <div className="flex flex-col gap-4 p-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          {/* Status */}
          <div className="flex gap-2">
            <div className="flex text-slate-600">
              التسليم :
              {order?.isDelivered ? (
                <div className="flex items-center px-2 text-green-500">
                  <BsCheckCircle />
                  تم
                </div>
              ) : (
                <div className="flex items-center px-2 text-slate-700">
                  <AiOutlineCloseCircle />
                  لم يتم
                </div>
              )}
            </div>
            <div className="flex text-slate-600">
              الدفع :
              {order?.isPaid ? (
                <div className="flex items-center px-2 text-green-500">
                  <BsCheckCircle />
                  تم
                </div>
              ) : (
                <div className="flex items-center px-2 text-red-700">
                  <AiOutlineCloseCircle />
                  لم يتم
                </div>
              )}
            </div>
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
