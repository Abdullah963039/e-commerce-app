import { useGet, usePost, usePut, useDelete } from "../hooks";

const CART_URL = "/api/v1/cart";

export const cartStore = (set) => ({
  appliedCoponName: "",
  ordersCount: 0,
  cartPrice: 0,
  cartPriceAfterDiscount: 0,
  cartOrders: null,
  //? GET
  getLoggedUserCart: async () => {
    try {
      set({ loading: true, error: false }); // Initialize (loading & error) state
      const response = await useGet(CART_URL, true); // Make get request

      if (response.status === 404) return; // No Data returned

      set({
        ordersCount: response.numOfCartItems,
        cartOrders: response.data.products,
        cartPrice: response.data.totalCartPrice,
      });

      if (response.data.coupon != null) {
        set({
          cartPriceAfterDiscount: response.data.totalAfterDiscount,
          appliedCoponName: response.data.coupon,
        });
      }

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

      set({
        cartPrice: response.data.data.totalCartPrice,
        cartPriceAfterDiscount: 0,
        appliedCoponName: "",
      });
      console.log(response);

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
      const { totalAfterDiscount } = response.data.data;
      set({
        cartPriceAfterDiscount: totalAfterDiscount,
        appliedCoponName: response.data.coupon,
      });

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

      set({
        appliedCoponName: "",
        ordersCount: 0,
        cartPrice: 0,
        cartPriceAfterDiscount: 0,
        cartOrders: null,
      });

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
