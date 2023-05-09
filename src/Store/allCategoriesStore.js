//! Axois
import { useGet, usePost } from "../hooks/useAxios";

const CATEGORIES_URL = "/api/v1/categories";

export const allCategoriesStore = (set) => ({
  allCategories: [],
  //? GET
  getAllCategories: async (limit) => {
    try {
      set({ loading: true, error: false }); //* Enable Loading
      const data = await useGet(CATEGORIES_URL + `?limit=${limit}`);
      set({ allCategories: data, loading: false }); //* Stop Loading & Set Data
    } catch (error) {
      console.error(error);
      set({ error: true, loading: false }); //* Stop Loading & Set Errror
    }
  },
  getAllCategoriesByPage: async (limit, pageNumber) => {
    try {
      set({ loading: true, error: false }); //* Enable Loading
      const data = await useGet(
        CATEGORIES_URL + `?limit=${limit}&page=${pageNumber}`
      );
      set({ allCategories: data, loading: false }); //* Stop Loading & Set Data
    } catch (error) {
      console.error(error);
      set({ error: true, loading: false }); //* Stop Loading & Set Errror
    }
  },
  getSpecificCategory: async (categoryId) => {
    try {
      set({ loading: true, error: false });
      const response = await useGet(CATEGORIES_URL + `/${categoryId}`);
      set({ loading: false });
      return response.data.name;
    } catch (error) {
      set({ loading: false, error: true });
      console.log(error);
    }
  },
  getAllSubCategoriesOnCategory: async (categoryId) => {
    //> Get All Sub Categories Of Specific Category
    try {
      set({ loading: true, error: false });
      const response = await useGet(
        CATEGORIES_URL + `/${categoryId}/subcategories`
      );
      set({ loading: false, subCategories: response.data });
    } catch (error) {
      set({ loading: false, error: true });
      return error.response;
    }
  },
  //? POST
  createNewCategory: async (formData) => {
    try {
      set({ loading: true, error: false }); //* Enable Loading & Cancel Error
      const response = await usePost(CATEGORIES_URL, formData, true);
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
});
