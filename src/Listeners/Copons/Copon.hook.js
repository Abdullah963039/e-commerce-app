// hooks
import { useState } from "react";
import { useStore } from "../../hooks/useStore";
import { CoponsContainerHook } from "./CoponsContainer.hook";
// utils
import notify from "../../utils/notifcation";

export function CoponHook() {
  const { rerenderComponent: rerenderDate } = CoponsContainerHook();
  const [showModal, setShowModal] = useState(false);

  const openModal = (_) => setShowModal(true);
  const closeModal = (_) => setShowModal(false);

  const { deleteCopon } = useStore(); // Global store

  async function handleDeleteCopon(coponId) {
    const res = await deleteCopon(coponId);

    if (res.status === 404) notify("error", "تم حذف الكوبون بالفعل");
    if (res.status === 204) {
      notify("done", "تم حذف الكوبون  بنجاح");
      rerenderDate();
    }
    closeModal();
  }
  return { showModal, openModal, closeModal, handleDeleteCopon };
}
