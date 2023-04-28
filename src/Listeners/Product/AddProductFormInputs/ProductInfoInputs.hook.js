import { useRef } from "react";
import notify from "../../../utils/notifcation";
import AdminAddProductHook from "../AdminAddProduct.hook";

export const ProductInfoInputsHook = () => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const quantityRef = useRef("");
  const priceRef = useRef("");

  const nameValue = nameRef.current.value;
  const descriptionValue = descriptionRef.current.value;
  const quantityValue = quantityRef.current.value;
  const priceValue = priceRef.current.value;

  // Form Validation
  if (isSubmitted) {
    if (nameValue !== "") {
      isNameAllRight = true;
      formData.append("title", nameValue);
    }
    if (descriptionValue !== "") {
      isDescAllRight = true;
      formData.append("description", descriptionValue);
    }
    if (quantityValue !== "") {
      isQuantAllRight = true;
      formData.append("quantity", quantityValue);
    }
    if (priceValue !== "") {
      isPriceAllRight = true;
      formData.append("price", priceValue);
    }
  }

  return {
    nameRef,
    descriptionRef,
    quantityRef,
    priceRef,
    nameValue,
    descriptionValue,
    quantityValue,
    priceValue,
  };
};
