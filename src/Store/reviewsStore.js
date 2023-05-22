import { useDelete, useGet, usePost, usePut } from "../hooks/useAxios";

const REVIEWS_API = "/api/v1/reviews";
const PRODUCTS_URL = "/api/v1/products/";
// /api/v1/products/62142d0604af98a01cf418ad/reviews

const configs = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};

export const reviewsStore = (set) => ({
  reviews: null,
  clearReviews: () => {
    set({ reviews: null });
  },
  //? GET
  getAllReviewsOnProduct: async (productId, page = 1) => {
    try {
      set({ loading: true, error: false });
      const response = await useGet(
        PRODUCTS_URL + `${productId}/reviews?limit=1&page=${page}`
      );
      set({ reviews: response });
      return response;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
  //? POST
  createReview: async (productId, review, rating) => {
    try {
      set({ loading: true, error: false });
      const response = await usePost(PRODUCTS_URL + `${productId}/reviews`, {
        review,
        rating,
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
  editReview: async () => {},
  //? DELETE
  deleteReview: async () => {},
});
