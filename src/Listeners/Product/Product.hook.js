// hooks
import { useEffect, useState } from "react";
import { useStore } from "../../hooks";
import { notify } from "../../utils";

export default function ProductHook(productId) {
  const { user, addToWishlist, removeFromWishlist, loading } = useStore(); // get user's wishlist from global store

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const prodcutExist = user?.wishlist.some((id) => id === productId);

    if (prodcutExist) setIsFavorite(true);
  }, []);

  async function removeFromFavorites() {
    const res = await removeFromWishlist(productId);

    if (res.status === 200) {
      notify("done", "تم ازالة المنتج الى المفضلة بنجاح");
      setIsFavorite(false);
    }
  }

  async function addToFavorites() {
    const res = await addToWishlist(productId);
    if (res.status === 200) {
      notify("done", "تم اضافة المنتج من المفضلة بنجاح");
      setIsFavorite(true);
    }
  }

  return { isFavorite, removeFromFavorites, addToFavorites, user, loading };
}

// helper function
function isFromFavorite(wishlist = [], id = "") {
  return Boolean(wishlist.find((i) => i === id));
}
