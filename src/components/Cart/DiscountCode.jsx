//? Add Or Use Copon Code From ..

import { Link } from "react-router-dom";
import { DiscountCodeHook } from "../../Listeners/Cart";
import { ConfirmMessage } from "../Utility";
import { currencyFormatter } from "../../utils";

export default function DiscountCode() {
  const {
    clearLogic: {
      clearCartModal,
      openClearCartModal,
      closeClearCartModal,
      clearCart,
    },
    cartPrice,
    cartPriceAfterDiscount,
    applyCopon,
    coponRef,
    appliedCoponName,
    handleNavigateToPayment,
  } = DiscountCodeHook();

  return (
    <>
      <ConfirmMessage
        controller={clearCartModal}
        closeModal={closeClearCartModal}
        modalMessage="هل انت متأكد من حذف العربة ؟"
        deleteItem={clearCart}
      />
      <div className="flex flex-col gap-3 py-3">
        <div className="relative flex w-full overflow-hidden rounded-lg ring-1 ring-slate-500 focus-within:ring-2 focus-within:ring-slate-600">
          <input
            ref={coponRef}
            type="text"
            className="w-full basis-4/5 px-3 text-center outline-none placeholder:text-xs xs:placeholder:text-base"
            placeholder="كود الخصم"
          />
          <button
            onClick={applyCopon}
            className="btn basis-1/5 !rounded-none !rounded-e-md border-slate-700 bg-slate-700 p-2 text-white hover:bg-slate-800"
          >
            تطبيق
          </button>
        </div>
        {appliedCoponName !== "" && (
          <>
            <div className=" select-none rounded-lg py-2 text-center text-sm ring-1 ring-slate-300 selection:bg-slate-800 selection:text-white sm:text-base">
              <p className="text-sm text-slate-600">الكوبون المطبق</p>
              <p className="select-text font-bold">{appliedCoponName}</p>
            </div>
          </>
        )}
        <div className="flex select-none items-center justify-center gap-4 rounded-lg py-3 text-sm font-semibold ring-1 ring-slate-300">
          {cartPriceAfterDiscount === 0 ? (
            <span>{currencyFormatter(cartPrice)}</span>
          ) : (
            <>
              <del>{currencyFormatter(cartPrice)}</del>
              <span>{currencyFormatter(cartPriceAfterDiscount)}</span>
            </>
          )}
        </div>
        <button
          onClick={handleNavigateToPayment}
          className="rounded-lg bg-slate-700 py-3 text-center font-bold text-white hover:bg-slate-800 disabled:opacity-50 disabled:hover:bg-slate-700"
        >
          اتمام الشراء
        </button>
        <button
          onClick={openClearCartModal}
          className="rounded-lg bg-slate-700 py-3 text-center font-bold text-white hover:bg-slate-800"
        >
          مسح العربة
        </button>
      </div>
    </>
  );
}
