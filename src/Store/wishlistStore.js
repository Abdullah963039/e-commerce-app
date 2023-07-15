import { usePost, useDelete, useGet } from "../hooks";

const WISHLIST_API = "/api/v1/wishlist";

export const wishlistStore = (set) => ({
  wishlistProducts: [],
  getUserWishlist: async () => {
    try {
      set({ loading: true, error: false });
      const response = await useGet(WISHLIST_API, true);
      set({ wishlistProducts: response.data });
      return response;
    } catch (err) {
      set({ error: true });
      return err;
    } finally {
      set({ loading: false });
    }
  },
  addToWishlist: async (product) => {
    try {
      set({ loading: true, error: false });

      set((store) => ({
        wishlistProducts: [...store.wishlistProducts, product],
      }));

      const response = await usePost(WISHLIST_API, {
        productId: product["_id"],
      });
      return response;
    } catch (err) {
      set({ error: true });
      return err;
    } finally {
      set({ loading: false });
    }
  },
  removeFromWishlist: async (productId) => {
    try {
      set({ loading: true, error: false });

      set((store) => ({
        wishlistProducts: store.wishlistProducts.filter(
          (prod) => prod._id !== productId
        ),
      }));

      const response = await useDelete(WISHLIST_API + `/${productId}`);
      return response;
    } catch (err) {
      set({ error: true });
      return err;
    } finally {
      set({ loading: false });
    }
  },
});
