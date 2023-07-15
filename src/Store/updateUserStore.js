import { usePut } from "../hooks";

const UPDATE_PROFILE_URL = "/api/v1/users/updateMe";
const UPDATE_PASSWORD_URL = "/api/v1/users/changeMyPassword";

export const updateUserStore = (set) => ({
  //? PUT
  updateProfile: async (data) => {
    try {
      set({ loading: true, error: false });
      const response = await usePut(UPDATE_PROFILE_URL, data);
      return response.data;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
  updateUserPassword: async (data) => {
    try {
      set({ loading: true, error: false });
      const response = await usePut(UPDATE_PASSWORD_URL, data);
      return response.data;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
});
