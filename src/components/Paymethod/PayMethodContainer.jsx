//? Pay Method Content Container

import { SubTitle } from "../Utility";
import { PaymentForm } from "./";

export default function PaymethodContainer() {
  return (
    <div className="min-h-[calc(100vh-65px)] py-6">
      <SubTitle title="اختر طريقة الدفع" />
      <div className="container">
        <PaymentForm />
      </div>
    </div>
  );
}
