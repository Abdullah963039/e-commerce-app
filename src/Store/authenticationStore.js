import { usePost, useGet, usePut } from "../hooks/useAxios";

const AUTH_API = {
  GET: {
    LOGGED_USER: "/api/v1/users/getMe",
  },
  POST: {
    SIGNUP: "/api/v1/auth/signup",
    LOGIN: "/api/v1/auth/login",
    FORGET_PASSWORD: "/api/v1/auth/forgotPasswords",
    RESET_CODE: "/api/v1/auth/verifyResetCode",
  },
  PUT: {
    RESET_PASSWORD: "/api/v1/auth/resetPassword",
  },
};

export const authStore = (set) => ({
  user: null,
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ user: null });
  },
  //? GET
  getLoggedUser: async () => {
    const configs = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    try {
      set({ loading: true, error: false });
      const { data } = await useGet(AUTH_API.GET.LOGGED_USER, configs);
      set({ user: data });
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
  //? POST
  createNewUser: async (formData) => {
    try {
      set({ loading: true, error: false });
      const response = await usePost(AUTH_API.POST.SIGNUP, formData);

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
      const response = await usePost(AUTH_API.POST.LOGIN, { email, password });
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
      const response = await usePost(AUTH_API.POST.FORGET_PASSWORD, { email });
      return response;
    } catch (err) {
      set({ error: true });
      console.log({ "catch error": err });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
  verifyResetCode: async (resetCode) => {
    try {
      set({ loading: true, error: false });
      const response = await usePost(AUTH_API.POST.RESET_CODE, { resetCode });
      return response;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
  //? PUT
  resetPassword: async (email, newPassword) => {
    try {
      set({ loading: true, error: false });
      const response = await usePut(AUTH_API.PUT.RESET_PASSWORD, {
        email,
        newPassword,
      });
      return response;
    } catch (err) {
      set({ error: true });
      return err.response;
    } finally {
      set({ loading: false });
    }
  },
});
