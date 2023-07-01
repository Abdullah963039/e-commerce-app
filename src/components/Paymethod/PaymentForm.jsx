// components
import { Dropdown } from "primereact/dropdown";

// utils
import { currencyFormatter } from "../../utils";
// hooks
import { PaymentFormHook } from "../../Listeners/Payments";

export default function PaymentForm() {
  const {
    handlePaymentFormSubmit,
    handleSelectPaymethod,
    cartPrice,
    cartPriceAfterDiscount,
    allAddresses: addresses,
    shippingAddress,
    selectAddress,
  } = PaymentFormHook();
  return (
    <>
      <form
        onSubmit={handlePaymentFormSubmit}
        className="flex flex-col divide-y rounded-md bg-white shadow-md"
      >
        {/* Select Pay Method */}
        <div className="flex flex-col divide-y">
          <label className="flex items-center gap-2 px-2 py-4">
            <input
              type="radio"
              value="pay with card"
              onClick={handleSelectPaymethod}
            />
            الدفع عن طريق بطاقة ائتمانية
          </label>
          <label className="flex items-center gap-2 px-2 py-4 ">
            <input
              type="radio"
              value="pay when recive"
              onClick={handleSelectPaymethod}
            />
            الدفع عند الاستلام
          </label>
        </div>
        {/* Select Address To Deliver */}
        <div className="flex items-center py-4">
          <Dropdown
            disabled={addresses.length == 0}
            value={shippingAddress}
            onChange={selectAddress}
            options={addresses}
            optionLabel="alias"
            placeholder="عنوان التوصيل"
            className="w-96 !border-none px-2 !shadow-none ring-1 ring-slate-400 focus-within:ring-2 focus-within:ring-slate-600 xs:mx-4"
          />
        </div>
        <div className="flex items-center justify-end gap-4 p-2">
          <button
            disabled
            className="btn flex cursor-none gap-2 bg-white px-6 py-3 font-bold"
          >
            {currencyFormatter(
              cartPriceAfterDiscount !== 0 ? cartPriceAfterDiscount : cartPrice
            )}
          </button>
          <button
            type="submit"
            className="btn border-slate-700 bg-slate-700 px-6 py-3 text-sm text-white hover:bg-slate-800"
          >
            اتمام الشراء
          </button>
        </div>
      </form>
    </>
  );
}
