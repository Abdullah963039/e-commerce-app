import { useGet, usePost } from "../hooks/useAxios";

const PRODUCTS_URL = "/api/v1/products";

export const productStore = (set) => ({
  allProducts: [],
  //? GET
  getAllProducts: async (limit) => {
    try {
      set({ loading: true, error: false }); //* Enable Loading
      const data = await useGet(PRODUCTS_URL + `?limit=${limit}`);
      set({ allProducts: data, loading: false }); //* Stop Loading & Set Data
    } catch (error) {
      console.error(error);
      set({ error: true, loading: false }); //* Stop Loading & Set Errror
    }
  },
  getAllProductsByPage: async (limit, pageNumber) => {
    try {
      set({ loading: true, error: false }); //* Enable Loading
      const data = await useGet(
        PRODUCTS_URL + `?limit=${limit}&page=${pageNumber}`
      );
      set({ allProducts: data, loading: false }); //* Stop Loading & Set Data
    } catch (error) {
      console.error(error);
      set({ error: true, loading: false }); //* Stop Loading & Set Errror
    }
  },
  //? POST
  createNewProduct: async (formData) => {
    try {
      set({ loading: true, error: false });
      const response = await usePost(PRODUCTS_URL, formData, true);
      set({ loading: false, error: false });
      return response;
    } catch (error) {
      set({ loading: false, error: true });
      return error.response;
    }
  },
});
