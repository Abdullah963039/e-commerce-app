import { useGet, usePost, usePut } from "../hooks";

const ORDERS_API = "/api/v1/orders";
const CHECKOUT_API = "/api/v1/orders/checkout-session/";

export const ordersStore = (set) => ({
  //? GET
  getAllOrders: async (page = 1) => {
    try {
      set({ loading: true, error: false });
      const response = await useGet(
        ORDERS_API + `?limit=10&page=${page}`,
        true
      );

      return response;
    } catch (er) {
      set({ error: true });
      return er.response;
    } finally {
      set({ loading: false });
    }
  },
  getSpecificOrder: async (orderId) => {
    try {
      set({ loading: true, error: false });
      const response = await useGet(ORDERS_API + `/${orderId}`, true);

      return response.data;
    } catch (er) {
      set({ error: true });
      return er.response;
    } finally {
      set({ loading: false });
    }
  },
  checkoutSessions: null,
  //? POST
  createCashOrder: async (cartId, address) => {
    try {
      set({ loading: true, error: false });
      const response = await usePost(ORDERS_API + `/${cartId}`, address);

      if (response.status === 201) {
        // Reset cart after creating order

        set({
          appliedCoponName: "",
          ordersCount: 0,
          cartPrice: 0,
          cartPriceAfterDiscount: 0,
          cartOrders: null,
        });
      }

      return response;
    } catch (er) {
      set({ error: true });
      return er.response;
    } finally {
      set({ loading: false });
    }
  },
  //? PUT
  updateOrderToPaid: async (orderId) => {
    try {
      set({ loading: true, error: false });
      const response = await usePut(ORDERS_API + `/${orderId}/pay`);

      return response;
    } catch (er) {
      set({ error: true });
      return er.response;
    } finally {
      set({ loading: false });
    }
  },
  updateOrderToDeliver: async (orderId) => {
    try {
      set({ loading: true, error: false });
      const response = await usePut(ORDERS_API + `/${orderId}/deliver`);

      return response;
    } catch (er) {
      set({ error: true });
      return er.response;
    } finally {
      set({ loading: false });
    }
  },
});
