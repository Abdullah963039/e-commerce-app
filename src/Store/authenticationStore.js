import { usePost, useGet } from "../hooks/useAxios";

const AUTH = {
  GET_USER: "/api/v1/users/",
  SIGNUP: "/api/v1/auth/signup",
  LOGIN: "/api/v1/auth/login",
  FORGET_PASSWORD: "/api/v1/auth/forgotPasswords", // POST
  CHANGE_PASSWORD: "/api/v1/users/changeMyPassword", // :userId = changeMyPassword PUT
};

export const authStore = (set) => ({
  user: null,
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null });
  },
  //? GET
  getLoggedUser: async (userId) => {
    try {
      set({ loading: true, error: false });
      const { data } = await useGet(AUTH.GET_USER + userId);
      set({ user: data });
    } catch (err) {
      set({ error: true });
      console.log(err);
      return;
    } finally {
      set({ loading: false });
    }
  },
  //? POST
  createNewUser: async (formData) => {
    try {
      set({ loading: true, error: false });
      const response = await usePost(AUTH.SIGNUP, formData);

      return response;
    } catch (e) {
      set({ error: true });
      return e.response;
    } finally {
      set({ loading: false });
    }
  },
  login: async (email, password) => {
    try {
      set({ loading: true, error: false });
      const response = await usePost(AUTH.LOGIN, { email, password });
      localStorage.setItem("token", response.data.token);
      set({ user: response.data.data });

      return response;
    } catch (err) {
      set({ error: true });
      console.error(err);
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
  forgetPassword: async (email) => {
    try {
      set({ loading: true, error: false });
      const response = await usePost(AUTH.FORGET_PASSWORD, { email });
      return response;
    } catch (err) {
      set({ error: true });
      console.log({ "catch error": err });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
});
