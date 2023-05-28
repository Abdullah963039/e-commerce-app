// hooks
import { useState, useRef } from "react";
import { useStore } from "../../hooks/useStore";
import { isEmailValid, isPhoneValid } from "../../utils/validators";
import notify from "../../utils/notifcation";

export default function UserProfileHook() {
  const [editProfileModal, setEditProfileModal] = useState(false);
  const openModal = (_) => setEditProfileModal(true);
  const closeModal = (_) => setEditProfileModal(false);

  const { user, updateProfile, loading } = useStore(); // Global store

  // Refs
  const nameRef = useRef(),
    emailRef = useRef(),
    phoneRef = useRef();

  //   handle edit profile
  async function handleEditProfile(e) {
    e.preventDefault();
    let refs = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    const formData = prepareFormData(refs);

    if (formData == null) return;

    const res = await updateProfile(formData);

    if (res.status === "success") {
      notify("done", "تم تعديل البيانات بنجاح");
      closeModal();
    }
  }

  return {
    user,
    editProfileModal,
    openModal,
    closeModal,
    refs: { nameRef, emailRef, phoneRef },
    handleEditProfile,
    loading,
  };
}

// helper
function prepareFormData({ name, email, phone }) {
  let data = {};

  const { valid: emailValid } = isEmailValid(email);
  const { valid: phoneValid } = isPhoneValid(phone);

  if (name !== "" && name.length > 3) data.name = name;
  if (emailValid) data.email = email;
  if (phoneValid) data.phone = phone;

  let ar = Array.from(Object.keys(data));

  return ar.length > 0 ? data : null;

  // if data is empty return undefined
}
