import { useState } from "react";
import { useStore } from "../../hooks";
import { useParams } from "react-router-dom";
import { notify } from "../../utils";

const PAID_OPTIONS = [
  {
    title: "تم الدفع",
    value: true,
  },
  {
    title: "لم يتم الدفع",
    value: false,
  },
];
const DELIVER_OPTIONS = [
  {
    title: "تم التوصيل",
    value: true,
  },
  {
    title: "قيد التنفيذ",
    value: false,
  },
];

export default function AdminUserDetailsHook({ isDelivered, isPaid }) {
  // Get Order Id
  const { orderId } = useParams();

  // Global Store
  const { updateOrderToDeliver, updateOrderToPaid, loading } = useStore();

  const [orderPay, setOrderPay] = useState(isPaid || false); // Order isPaid State
  const [orderDeliver, setOrderDeliver] = useState(isDelivered || false); // Order isDelivered State

  //   onChangeState
  const handleChangePayStatus = (e) => setOrderPay(e.value);
  const handleChangeDeliveredStatus = (e) => setOrderDeliver(e.value);

  //? Call API
  async function handleUpdateOrderToPaid() {
    if (isPaid == orderPay) return;

    const res = await updateOrderToPaid(orderId);

    if (res.status == 200) {
      notify("done", "تم تغيير حالة الطلب بنجاح");
      return;
    }

    notify("error");
  }

  async function handleUpdateOrderToDeliver() {
    if (isDelivered == orderDeliver) return;

    const res = await updateOrderToDeliver(orderId);

    if (res.status == 200) {
      notify("done", "تم تغيير حالة الطلب بنجاح");
      return;
    }

    notify("error");
  }

  return {
    loading,
    PAID_OPTIONS,
    DELIVER_OPTIONS,
    orderPay,
    orderDeliver,
    handleChangePayStatus,
    handleChangeDeliveredStatus,
    handleUpdateOrderToPaid,
    handleUpdateOrderToDeliver,
  };
}
