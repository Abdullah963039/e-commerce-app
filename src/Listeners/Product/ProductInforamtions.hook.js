import { useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../hooks";
import { notify } from "../../utils";

export default function ProductInforamtionsHook() {
  const { productId } = useParams();
  const [selectedColor, setSelectedColor] = useState("");

  const { addProductToCart, getLoggedUserCart, user } = useStore(); // Global store

  function clickOnColor(hex) {
    if (selectedColor == hex) setSelectedColor("");

    setSelectedColor(hex);
  }

  async function onAddToCart() {
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
      const getRes = await getLoggedUserCart();
    } else {
      notify("error");
    }
  }

  return { clickOnColor, selectedColor, onAddToCart, role: user?.role };
}
