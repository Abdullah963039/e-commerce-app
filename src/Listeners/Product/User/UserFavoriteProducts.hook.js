import React, { useEffect, useState } from "react";
import { useStore } from "../../../hooks/useStore";

export default function UserFavoriteProductsHook() {
  const [wishlist, setWishlist] = useState([]); // user's wishlist state

  const { getUserWishlist } = useStore(); // get user's wishlist from global store

  useEffect(() => {
    async function f() {
      //todo Rename this function
      const res = await getUserWishlist();
      setWishlist(res.data);
    }

    f();
  }, []);

  return { wishlist };
}
