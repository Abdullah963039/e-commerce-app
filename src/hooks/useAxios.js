import { baseURL } from "../Api/baseURL";

// ? GET Method
export async function useGet(url) {
  const response = await baseURL.get(url);
  return response.data;
}

// ? POST Method
export async function usePost(url, formData, configs) {
  const medieConfigs = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const response = await baseURL.post(url, formData, (configs = medieConfigs));

  return response;
}

// ? PUT Method
// export async function usePut(url, data, configs) {
//   const response = await baseURL.put(url, data, configs);

//   return response;
// }

// ? DELETE Method

// export async function useDelete(url, configs) {
//   const response = await baseURL.delete(url, configs);

//   return response;
// }
