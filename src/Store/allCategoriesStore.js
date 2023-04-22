//! Axois
import { useGet, usePost } from "../hooks/useAxios";

const CATEGORIES_URL = "/api/v1/categories";

export const allCategoriesStore = (set) => ({
  allCategories: [],
  //? GET
  getAllCategories: async () => {
    try {
      set({ loading: true, error: false }); //* Enable Loading
      const data = await useGet(CATEGORIES_URL + "?limit=18");
      set({ allCategories: data, loading: false }); //* Stop Loading & Set Data
    } catch (error) {
      console.error(error);
      set({ error: true, loading: false }); //* Stop Loading & Set Errror
    }
  },
  getAllCategoriesByPage: async (pageNumber) => {
    try {
      set({ loading: true, error: false }); //* Enable Loading
      const data = await useGet(
        CATEGORIES_URL + `?limit=18&page=${pageNumber}`
      );
      set({ allCategories: data, loading: false }); //* Stop Loading & Set Data
    } catch (error) {
      console.error(error);
      set({ error: true, loading: false }); //* Stop Loading & Set Errror
    }
  },
  //? POST
  createNewCategory: async (formData) => {
    try {
      set({ loading: true, error: false }); //* Enable Loading & Cancel Error
      const response = await usePost(CATEGORIES_URL, formData);
      set({ loading: false });
      return response;
    } catch (error) {
      set({
        error: true,
        loading: false,
      }); //* Stop Loading & Set Errror

      return error.response;
    }
  },
  //? PUT
  //? DELETE
});
