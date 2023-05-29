// hooks
import { useState } from "react";
import { useStore } from "../../hooks";
// utils
import { notify } from "../../utils";

export default function AddressHook() {
  const [showModal, setShowModal] = useState(false);

  const openModal = (_) => setShowModal(true);
  const closeModal = (_) => setShowModal(false);

  const { deleteAddress } = useStore();

  async function handleDeleteAddress(addressId) {
    const res = await deleteAddress(addressId);

    if (res.status === 200) {
      notify("done", "تم حذف العنوان بنجاح");
      closeModal();
    }
    console.log(res);
  }

  return {
    showModal,
    openModal,
    closeModal,
    handleDeleteAddress,
  };
}
