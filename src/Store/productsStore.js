// Http request hooks
import { useDelete, useGet, usePost, usePut } from "../hooks/useAxios";

const PRODUCTS_URL = "/api/v1/products";

export const productStore = (set) => ({
  allProducts: [],
  //? GET
  getAllProducts: async (limit = 5, option = "") => {
    if (option !== "") {
      try {
        set({ loading: true, error: false }); //* Enable Loading
        const response = await useGet(
          //> Here option param .. to get product /may you like/most sold/most ..
          PRODUCTS_URL + `?limit=${limit}&sort=${option}`
        );
        return response;
      } catch (error) {
        console.error(error);
        set({ error: true }); //* Stop Loading & Set Errror
      } finally {
        set({ loading: false });
      }
    }

    try {
      set({ loading: true, error: false }); //* Enable Loading
      const response = await useGet(PRODUCTS_URL + `?limit=${limit}`);
      set({ allProducts: response }); //* Stop Loading & Set Data
    } catch (error) {
      console.error(error);
      set({ error: true }); //* Stop Loading & Set Errror
    } finally {
      set({ loading: false });
    }
  },
  getAllProductsByPage: async (limit = 5, pageNumber = 1) => {
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
  getAllProductsBySearch: async (search) => {
    try {
      set({ loading: true, error: false }); //* Enable Loading
      const response = await useGet(PRODUCTS_URL + `?limit=20&${search}`);
      set({ allProducts: response }); //* Stop Loading & Set Data

      return response;
    } catch (error) {
      console.error(error);
      set({ error: true }); //* Stop Loading & Set Errror
    } finally {
      set({ loading: false });
    }
  },
  getSpecificProduct: async (productId) => {
    try {
      set({ loading: true, error: false });
      const response = await useGet(PRODUCTS_URL + `/${productId}`);
      set({ loading: false });
      return response.data;
    } catch (error) {
      set({ loading: false, error: true });
      console.log(error);
    }
  },
  getProductMayLike: async (limit, categoryId) => {
    try {
      set({ loading: true, error: false });
      const response = await useGet(
        PRODUCTS_URL + `?limit=${limit}&category[in][]=${categoryId}`
      );
      set({ loading: false });
      return response.data;
    } catch (error) {
      set({ loading: false, error: true });
      console.log(error);
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
  //? PUT
  editSpecificProduct: async (formData, productId) => {
    try {
      set({ loading: true, error: false });
      const response = await usePut(
        PRODUCTS_URL + `/${productId}`,
        formData,
        true
      );
      set({ loading: false, error: false });

      return response;
    } catch (error) {
      set({ loading: false, error: true });
      console.log(error);
    }
  },
  //? DELETE
  deleteProduct: async (productId) => {
    try {
      set({ loading: true, error: false });
      const response = await useDelete(PRODUCTS_URL + `/${productId}`);
      set({ loading: false, error: false });

      return response;
    } catch (err) {
      set({ loading: false, error: true });
      console.log(err);
      return err.response;
    }
  },
});
