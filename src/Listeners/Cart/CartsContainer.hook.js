// hooks
import { useEffect, useState } from "react";
import { useStore } from "../../hooks";

export default function CartsContainerHook() {
  const [reFetch, setReFetch] = useState(false);
  const rerenderPage = () => setReFetch(!reFetch);

  const { getLoggedUserCart, cartOrders } = useStore(); // Global Store

  useEffect(() => {
    getLoggedUserCart();
  }, [reFetch]);

  return { cartOrders, rerenderPage };
}
