import { baseURL } from "../Api/baseURL";

const authConfigs = {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
};

const medieConfigs = {
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

// ? GET Method
export async function useGet(url, needAuth = false) {
  if (needAuth) {
    const response = await baseURL.get(url, authConfigs);
    return response.data;
  }

  const response = await baseURL.get(url);
  return response.data;
}

// ? POST Method
export async function usePost(url, formData, sendImage = false) {
  //> Will Send Image
  if (sendImage) {
    const response = await baseURL.post(url, formData, medieConfigs);
    return response;
  }

  //> Send just text
  const response = await baseURL.post(url, formData, authConfigs);
  return response;
}

// ? PUT Method
export async function usePut(url, formData, sendImage = false) {
  //> Will Send Image
  if (sendImage) {
    const response = await baseURL.put(url, formData, medieConfigs);
    return response;
  }
  //> Send just text
  const response = await baseURL.put(url, formData, authConfigs);
  return response;
}

// ? DELETE Method

export async function useDelete(url) {
  const response = await baseURL.delete(url, authConfigs);

  return response;
}
