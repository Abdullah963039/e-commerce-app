// hooks
import { useState } from "react";
import { useStore } from "../../hooks";
import { notify } from "../../utils";
import { CartsContainerHook } from "./";

//todo : implement update quantity & create state for rerender order items
export default function CartItemHook() {
  const { removeSpecificCartItem, updateCartProductQuantity } = useStore(); // Global store
  const { rerenderPage } = CartsContainerHook();

  const [deleteModal, setDeleteModal] = useState(false);

  const openModal = (_) => setDeleteModal(true);
  const closeModal = (_) => setDeleteModal(false);

  const [quantity, setQuantity] = useState(null);

  const changeQuantity = (e) => setQuantity(e.target.value);

  async function updateOrder(orderId) {
    if (!orderId) return;

    if (quantity == null || quantity == "" || quantity == 0) {
      notify("error", "ادخل الكمية من فضلك");
      return;
    }

    const res = await updateCartProductQuantity(orderId, quantity);

    if (res.status === 200) {
      rerenderPage();
      notify("done", "تم تعديل الكمية بنجاح");
    }
    if (res.status === 400) {
      notify("error");
    }
  }

  async function deleteOrder(orderId) {
    if (!orderId) return;

    const res = await removeSpecificCartItem(orderId);

    if (res.status == 200) {
      rerenderPage();
      closeModal();
      notify("done", "تم حذف الطلب بنجاح");
    } else {
      notify("error", "هناك مشكلة في حذف الطلب");
    }
  }

  return {
    updateLogic: { quantity, changeQuantity, updateOrder },
    deleteLogic: { deleteModal, openModal, closeModal, deleteOrder },
  };
}
