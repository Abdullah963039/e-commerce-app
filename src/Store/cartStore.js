import { useGet, usePost, usePut, useDelete } from "../hooks";

const CART_URL = "/api/v1/cart";

export const cartStore = (set) => ({
  ordersCount: 0,
  cartOrders: [],
  //? GET
  getLoggedUserCart: async () => {
    try {
      set({ loading: true, error: false });
      const response = await useGet(CART_URL, true);

      set({
        ordersCount: response.numOfCartItems,
        cartOrders: response.data.products,
      });

      return response;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
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
  updateCartProductQuantity: async (orderId, count) => {
    try {
      set({ loading: true, error: false });
      const response = await usePut(CART_URL + `/${orderId}`, { count });

      return response;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
  applyCouponToCart: async (couponName) => {
    try {
      set({ loading: true, error: false });
      const response = await usePut(CART_URL + "/applyCoupon", { couponName });

      return response;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
  //? DELETE
  clearUserCart: async () => {
    try {
      set({ loading: true, error: false });
      const response = await useDelete(CART_URL);
      return response;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
  removeSpecificCartItem: async (orderId) => {
    try {
      set({ loading: true, error: false });
      const response = await useDelete(CART_URL + `/${orderId}`);

      return response;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
});
