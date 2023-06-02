// hooks
import { useEffect, useState } from "react";
import { useStore } from "../../hooks";

export default function CartsContainerHook() {
  const [reFetch, setReFetch] = useState(false);
  const rerenderPage = () => setReFetch(!reFetch);

  // Note :  Implement Rerendering after delete or update any order

  const { getLoggedUserCart, cartOrders } = useStore(); // Global Store

  useEffect(() => {
    getLoggedUserCart();
  }, [reFetch]);

  return { cartOrders, rerenderPage };
}
