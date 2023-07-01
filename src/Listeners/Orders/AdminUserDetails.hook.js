import { useParams } from "react-router-dom";
import { useStore } from "../../hooks";
import { useEffect, useState } from "react";

export default function AdminUserDetailsHook() {
  const { orderId } = useParams();

  const [order, setOrder] = useState(null);

  const { getSpecificOrder } = useStore();

  useEffect(() => {
    getOrderDetails();

    return () => setOrder(null);
  }, [orderId]);

  async function getOrderDetails() {
    const res = await getSpecificOrder(orderId);

    setOrder(res);
  }

  return { order };
}
