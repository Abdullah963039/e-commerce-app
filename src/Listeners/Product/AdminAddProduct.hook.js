import { useRef } from "react";
import { useStore } from "../../hooks/useStore";
import { ProductColorsSelectHook } from "./AddProductFormInputs/ProductColorsSelect.hook";

export default function AdminAddProductHook() {
  async function sendData(e) {
    e.preventDefault();
  }
  return { formRef, sendData };
}
