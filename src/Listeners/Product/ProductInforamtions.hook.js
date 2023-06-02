import { useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../hooks";
import { notify } from "../../utils";

export default function ProductInforamtionsHook() {
  const { productId } = useParams();
  const [selectedColor, setSelectedColor] = useState("");

  const { addProductToCart, getLoggedUserCart } = useStore(); // Global store

  function clickOnColor(hex) {
    if (selectedColor == hex) setSelectedColor("");

    setSelectedColor(hex);
  }

  async function onAddToCart() {
    // todo: create rerender state in Header.hook.js to update badge in cart button

    if (selectedColor == "") {
      notify("error", "اختر لون واحد للمنتج على الاقل");
      return;
    }

    const data = {
      productId,
      color: selectedColor,
    };
    const postRes = await addProductToCart(data);

    if (postRes.status === 200) {
      notify("done", "تم اضافة المنتج للعربة بنجاح");
      setSelectedColor("");
    } else {
      notify("error");
    }

    const getRes = await getLoggedUserCart();
  }

  return { clickOnColor, selectedColor, onAddToCart };
}
