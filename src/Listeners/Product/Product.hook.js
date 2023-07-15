// hooks
import { useEffect, useState } from "react";
import { useStore } from "../../hooks";
import { notify } from "../../utils";

export default function ProductHook(product) {
  const { user, addToWishlist, removeFromWishlist, loading, wishlistProducts } =
    useStore(); // get user's wishlist from global store

  const [isFavorite, setIsFavorite] = useState(() =>
    wishlistProducts.some((prod) => prod["_id"] === product?.["_id"])
  );

  useEffect(() => {
    const isProdcutExistInWishlist = wishlistProducts?.some(
      (prod) => prod["_id"] === product?.["_id"]
    );

    if (isProdcutExistInWishlist) setIsFavorite(true);
  }, []);

  async function removeFromFavorites() {
    const res = await removeFromWishlist(product?.["_id"]);

    if (res.status === 200) {
      setIsFavorite(false);
      notify("done", "تم ازالة المنتج من المفضلة بنجاح");
    }
  }

  async function addToFavorites() {
    const res = await addToWishlist(product);
    if (res.status === 200) {
      setIsFavorite(true);
      notify("done", "تم اضافة المنتج الى المفضلة بنجاح");
    }
  }

  return { isFavorite, removeFromFavorites, addToFavorites, user, loading };
}
