import { useGet, useDelete, usePost, usePut } from "../hooks";

const USER_ADDRESSES_URL = "/api/v1/addresses";

export const addressesStore = (set) => ({
  //? GET
  getUserAddresses: async () => {
    try {
      set({ loading: true, error: false });
      const response = await useGet(USER_ADDRESSES_URL, true);

      return response;
    } catch (err) {
      set({ error: true });
      return err;
    } finally {
      set({ loading: false });
    }
  },
  getSpecificUserAddress: async (addressId) => {
    try {
      set({ loading: true, error: false });
      const response = await useGet(USER_ADDRESSES_URL + `/${addressId}`, true);

      return response;
    } catch (err) {
      set({ error: true });
      return err;
    } finally {
      set({ loading: false });
    }
  },
  //? POST
  createNewAddress: async (data) => {
    try {
      set({ loading: true, error: false });
      const response = await usePost(USER_ADDRESSES_URL, data);

      return response;
    } catch (err) {
      set({ error: true });
      return err;
    } finally {
      set({ loading: false });
    }
  },
  //? PUT
  editAddress: async (addressId, data) => {
    try {
      set({ loading: true, error: false });
      const response = await usePut(USER_ADDRESSES_URL + `/${addressId}`, data);

      return response;
    } catch (err) {
      set({ error: true });
      return err;
    } finally {
      set({ loading: false });
    }
  },
  //? DELETE
  deleteAddress: async (addressId) => {
    try {
      set({ loading: true, error: false });
      const response = await useDelete(USER_ADDRESSES_URL + `/${addressId}`);

      return response;
    } catch (err) {
      set({ error: true });
      return err;
    } finally {
      set({ loading: false });
    }
  },
});
