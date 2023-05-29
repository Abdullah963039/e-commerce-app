import { useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../hooks";
import { notify } from "../../utils";

export default function ProductInforamtionsHook() {
  const { productId } = useParams();
  const [selectedColors, setSelectedColors] = useState([]);

  const { addProductToCart } = useStore(); // Global store

  function clickOnColor(hex) {
    if (selectedColors.includes(hex)) {
      setSelectedColors([...selectedColors.filter((clr) => clr !== hex)]);
    } else {
      setSelectedColors((prevClrs) => [...prevClrs, hex]);
    }
  }

  async function onAddToCart() {
    // todo: create rerender state in Header.hook.js to update badge in cart button

    const data = {
      productId,
      color: JSON.stringify(selectedColors),
    };

    const res = await addProductToCart(data);

    if (res.status === 200) {
      notify("done", "تم اضافة المنتج للعربة بنجاح");
    }
  }

  function isIncluded(ele) {
    // Find Element In Array .. Returns boolean
    return Boolean(selectedColors.find((clr) => clr == ele));
  }
  return { isIncluded, clickOnColor, onAddToCart };
}
