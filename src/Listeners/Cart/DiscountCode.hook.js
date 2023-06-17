// hooks
import { useState, useRef } from "react";
import { useStore } from "../../hooks";
import { notify } from "../../utils";
import { CartsContainerHook } from "./";

export default function DiscountCodeHook() {
  const [clearCartModal, setClearCartModal] = useState(false); // Clear Cart Modal Controller

  const openClearCartModal = (_) => setClearCartModal(true);
  const closeClearCartModal = (_) => setClearCartModal(false);

  const {
    cartPrice,
    cartPriceAfterDiscount,
    clearUserCart,
    applyCouponToCart,
    appliedCoponName,
  } = useStore(); // Global store

  const { rerenderPage } = CartsContainerHook(); // Rerendering carts container after clearing cart

  // Clear cart handler
  async function clearCart() {
    const res = await clearUserCart();

    if (res.status === 204) {
      notify("done", "تم حذف العربة بنجاح");
      rerenderPage();
      closeClearCartModal();
    } else {
      notify("error", "حدث خطأ ما في حذف العربة");
    }
  }

  // Reference to copon name input
  const coponRef = useRef();

  // Apply copon to cart handler
  async function applyCopon() {
    const { value: coponName } = coponRef.current;

    if (coponName.trim() === "") {
      notify("error", "ادخل اسم الكوبون من فضلك");
      return;
    }

    const res = await applyCouponToCart(coponName);

    if (res.status === 400) {
      notify("error", "اسم الكوبون غير صالح أو قد انتهت صلاحيته");
      coponRef.current.value = "";
    }
    if (res.status === 200) notify("done", "تم تطبيق الكوبون بنجاح");

    console.log(res);
  }

  return {
    clearLogic: {
      clearCartModal,
      openClearCartModal,
      closeClearCartModal,
      clearCart,
    },
    cartPrice,
    cartPriceAfterDiscount,
    coponRef,
    applyCopon,
    appliedCoponName,
  };
}
