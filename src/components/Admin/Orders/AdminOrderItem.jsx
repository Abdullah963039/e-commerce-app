// components
import { Link } from "react-router-dom";
// icons
import { TbListDetails, TbBrandCashapp } from "react-icons/tb";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdCheckCircleOutline, MdHighlightOff } from "react-icons/md";
// utils
import { currencyFormatter, dateFormatter } from "../../../utils";

export default function AdminOrderItem({ order }) {
  return (
    <>
      <div className="flex w-full flex-col gap-2 rounded-lg bg-white p-2">
        <h1 className="col-span-12 text-lg font-bold">طلب رقم #{order.id}</h1>
        {/* Item Info */}
        <div className="flex flex-col divide-y rounded-md border shadow-sm">
          {/* Username */}
          <div className="flex items-center gap-2 p-2">
            <p className="basis-1/4 border-l text-center text-slate-600">
              اسم العميل
            </p>
            <p className="flex items-center gap-1 font-bold">
              <FaUser className="text-slate-700" /> {order.user.name}
            </p>
          </div>

          {/* Cart Items Quantity */}
          <div className="flex items-center gap-2 p-2">
            <p className="basis-1/4 border-l text-center text-slate-600">
              عدد المنتجات
            </p>
            <p className="font-bold">{order.cartItems.length}</p>
          </div>

          {/* Delivered Status */}
          <div className="flex items-center gap-2 p-2">
            <p className="basis-1/4 border-l text-center text-slate-600">
              حالة التوصيل
            </p>
            <p className="font-bold">
              {order.isDelivered ? (
                <span className="flex items-center gap-1 text-green-600">
                  <MdCheckCircleOutline />
                  تم التوصيل
                </span>
              ) : (
                <span className="flex items-center gap-1 text-slate-600">
                  <MdHighlightOff />
                  لم يتم التوصيل
                </span>
              )}
            </p>
          </div>

          {/* Payment Method */}
          <div className="flex items-center gap-2 p-2">
            <p className="basis-1/4 border-l text-center text-slate-600">
              طريقة الدفع
            </p>
            <p className="font-bold">
              {order.paymentMethodType == "cash" ? (
                <span className="flex items-center gap-1 text-yellow-600">
                  <TbBrandCashapp />
                  كاش
                </span>
              ) : (
                <span className="flex items-center gap-1 text-blue-600">
                  <BsFillCreditCardFill />
                  بطاقة ائتمانية
                </span>
              )}
            </p>
          </div>

          {/* Paid Status */}
          <div className="flex items-center gap-2 p-2">
            <p className="basis-1/4 border-l text-center text-slate-600">
              حالة الدفع
            </p>
            <p className="font-bold">
              {order.isPaid ? (
                <span className="flex items-center gap-1 text-green-600">
                  <MdCheckCircleOutline />
                  تم الدفع
                </span>
              ) : (
                <span className="flex items-center gap-1 text-slate-600">
                  <MdHighlightOff />
                  لم يتم الدفع
                </span>
              )}
            </p>
          </div>

          {/* Total Order Price */}
          <div className="flex items-center gap-2 p-2">
            <p className="basis-1/4 border-l text-center text-slate-600">
              سعر الطلب
            </p>
            <p className="font-bold">
              {currencyFormatter(order.totalOrderPrice)}
            </p>
          </div>
        </div>
        {/* Order Details */}
        <div className="flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-2 text-slate-700">
            <AiOutlineCalendar className="text-lg" />
            {dateFormatter(order.createdAt)}
          </div>
          <Link
            to={order["_id"]}
            className="flex cursor-pointer items-center gap-2 rounded-lg p-1 focus-within:text-teal-600 focus-within:ring-1 focus-within:ring-teal-600 hover:text-teal-600"
          >
            <TbListDetails />
            المزيد من التفاصيل
          </Link>
        </div>
      </div>
    </>
  );
}
