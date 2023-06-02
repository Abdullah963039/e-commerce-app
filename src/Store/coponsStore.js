import { useGet, useDelete, usePost, usePut } from "../hooks";

const COPONS_URL = "/api/v1/coupons";

export const coponsStore = (set) => ({
  //? GET
  getAllCopons: async () => {
    try {
      set({ loading: true, error: false });
      const response = await useGet(COPONS_URL + "?limit=10", true);
      return response;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
  getAllCoponsByPage: async (page = 1) => {
    try {
      set({ loading: true, error: false });
      const response = await useGet(
        COPONS_URL + `?limit=10&page=${page}`,
        true
      );
      return response;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
  getSpecificCopon: async (coponId) => {
    try {
      set({ loading: true, error: false });
      const response = await useGet(COPONS_URL + `/${coponId}`, true);
      return response;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
  //? POST
  createCopon: async (name, expire, discount) => {
    try {
      set({ loading: true, error: false });
      const response = await usePost(COPONS_URL, {
        name,
        expire,
        discount,
      });
      return response;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
  //? PUT
  editCopon: async (coponId, data) => {
    try {
      set({ loading: true, error: false });
      const response = await usePut(COPONS_URL + `/${coponId}`, data);
      return response;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
  //? DELETE
  deleteCopon: async (coponId) => {
    try {
      set({ loading: true, error: false });
      const response = await useDelete(COPONS_URL + `/${coponId}`);
      return response;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
});
