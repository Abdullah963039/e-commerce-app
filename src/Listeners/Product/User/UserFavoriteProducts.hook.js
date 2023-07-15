import { useEffect } from "react";
import { useStore } from "../../../hooks";

export default function UserFavoriteProductsHook() {
  const { getUserWishlist, wishlistProducts } = useStore(); // get user's wishlist from global store

  useEffect(() => {
    async function getWishlist() {
      const res = await getUserWishlist();
    }

    getWishlist();
  }, [rerender]);

  return { wishlist: wishlistProducts, rerenderFavoriteProductsPage };
}
