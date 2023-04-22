import { useGet, usePost } from "../hooks/useAxios";

const BRANDS_URL = "/api/v1/brands";
//> Limit + ?limit=10

export const brandsStore = (set) => ({
  allBrands: [],
  //? GET Methods
  getAllBrands: async () => {
    try {
      set({ loading: true, error: false });
      const data = await useGet(BRANDS_URL);
      set({ loading: false, allBrands: data });
    } catch (error) {
      set({ error: true, loading: false });
      console.log(error);
    }
  },
  getAllBrandsByPage: async (pageNumber) => {
    try {
      set({ loading: true, error: false }); //* Start Loading
      const data = await useGet(BRANDS_URL + `?limit=20&page=${pageNumber}`);
      set({ allBrands: data, loading: false });
    } catch (error) {
      set({ error: true, loading: false });
      console.log(error);
    }
  },
  //? POST Methods
  createNewBrand: async (formData) => {
    try {
      set({ loading: true, error: false });
      const response = await usePost(BRANDS_URL, formData);
      set({ loading: false });
      return response;
    } catch (error) {
      set({ loading: false, error: true });
      return error.response;
    }
  },
});
