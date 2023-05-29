import { useGet, usePost, usePut, useDelete } from "../hooks";

const CART_URL = "/api/v1/cart";

export const cartStore = (set) => ({
  //? GET
  getLoggedUserCart: async () => {},
  //? POST
  addProductToCart: async (data) => {
    try {
      set({ loading: true, error: false });
      const response = await usePost(CART_URL, data);

      return response;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
  //? PUT
  updateCartProductQuantity: async (cartItemId) => {},
  applyCouponToCart: async (couponName) => {
    // '/api/v1/cart/applyCoupon'
  },
  //? DELETE
  clearUserCart: async () => {},
  removeSpecificCartItem: async (cartItemId) => {},
});
