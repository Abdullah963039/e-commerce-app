import { baseURL } from "../Api/baseURL";

// ? GET Method
export async function useGet(url, configs) {
  const response = await baseURL.get(url, configs);
  return response.data;
}

// ? POST Method
export async function usePost(url, formData, sendImage = false) {
  if (sendImage) {
    //> Will Send Image
    const medieConfigs = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const response = await baseURL.post(url, formData, medieConfigs);
    return response;
  }

  //> Send just text
  const configs = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const response = await baseURL.post(url, formData, configs);
  return response;
}

// ? PUT Method
export async function usePut(url, formData, sendImage = false) {
  if (sendImage) {
    //> Will Send Image
    const medieConfigs = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const response = await baseURL.put(url, formData, medieConfigs);
    return response;
  }
  //> Send just text
  const configs = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const response = await baseURL.put(url, formData, configs);
  return response;
}

// ? DELETE Method

export async function useDelete(
  url,
  configs = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  }
) {
  const response = await baseURL.delete(url, configs);

  return response;
}
