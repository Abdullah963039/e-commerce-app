//? Cart Containter > Contains All Cart Items ..

import { BiSad } from "react-icons/bi";
import { CartsContainerHook } from "../../Listeners/Cart";
import { CartItem } from "./";

export default function CartsContainer() {
  const { cartOrders } = CartsContainerHook();
  return (
    <>
      {cartOrders != null ? (
        <div className="flex flex-col items-start justify-between gap-4">
          {cartOrders?.map((order) => (
            <CartItem key={order["_id"]} order={order} />
          ))}
        </div>
      ) : (
        <div className="my-12 flex select-none flex-col items-center justify-center gap-6 text-slate-800">
          <p className="text-3xl ">لا يوجد منتجات في عربة التسوق</p>
          <span className="block text-center text-4xl ">
            <BiSad />
          </span>
        </div>
      )}
    </>
  );
}
