import { useGet, usePost } from "../hooks/useAxios";

const SUB_CATEGORIES_URL = "/api/v1/subcategories";

export const subCategoriesStore = (set) => ({
  subCategories: [],
  //? GET
  getAllSubCategories: async () => {
    try {
      set({ loading: true, error: false }); //* Enable Loading
      const res = await useGet(SUB_CATEGORIES_URL);
      set({ subCategories: res.data, loading: false }); //* Stop Loading & Set Data
    } catch (error) {
      set({ error: true, loading: false }); //* Stop Loading & Set Errror
      console.log(error);
    }
  },
  getAllSubCategoriesOnCategory: async (categoryId) => {
    //> Get All Sub Categories Of Specific Category
    try {
      set({ loading: true, error: false });
      const response = await useGet(
        `/api/v1/categories/${categoryId}/subcategories`
      );
      set({ loading: false, subCategories: response.data });
    } catch (error) {
      set({ loading: false, error: true });
      return error.response;
    }
  },
  //? POST
  createNewSubCategory: async (formData) => {
    try {
      set({ loading: true, error: false });
      const response = await usePost(SUB_CATEGORIES_URL, formData);
      set({ loading: false });
      console.log(response);
      return response;
    } catch (error) {
      set({ loading: false, error: true });
      console.log(error);
      return error.response;
    }
  },

  //? PUT
  //? DELETE
});
