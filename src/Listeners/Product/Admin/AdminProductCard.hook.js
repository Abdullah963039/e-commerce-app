import { useState } from "react";
import { useStore } from "../../../hooks/useStore";
import notify from "../../../utils/notifcation";
import { AdminAllProductsHook } from "./AdminAllProducts.hook";

export function AdminProductCardHook() {
  const { rerenderComponent } = AdminAllProductsHook();
  const [deleteModal, setDeleteModal] = useState(false);

  const { deleteProduct } = useStore();

  const showModal = () => setDeleteModal(true);
  // To show the delete modal
  const closeModal = () => setDeleteModal(false); // To hide the delete modal
  const deleteItem = async (productId) => {
    setDeleteModal(false);
    const response = await deleteProduct(productId);

    if (response.status === 204) {
      notify("done", "تم حذف المنتج بنجاح");
    } else notify("error");
    rerenderComponent();
  };
  return {
    deleteModal,
    showModal,
    closeModal,
    deleteItem,
  };
}
