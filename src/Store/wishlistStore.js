import { usePost, useDelete, useGet } from "../hooks";

const WISHLIST_API = "/api/v1/wishlist";

export const wishlistStore = (set) => ({
  getUserWishlist: async () => {
    try {
      set({ loading: true, error: false });
      const response = await useGet(WISHLIST_API, true);
      return response;
    } catch (err) {
      set({ error: true });
      return err;
    } finally {
      set({ loading: false });
    }
  },
  addToWishlist: async (productId) => {
    try {
      set({ loading: true, error: false });
      const response = await usePost(WISHLIST_API, { productId });
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
