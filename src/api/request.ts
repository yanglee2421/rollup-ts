import axios, { AxiosError } from "axios";

export const request = axios.create({});

axios.interceptors.request.use((config) => config);
axios.interceptors.response.use(
  (res) => {
    const { data } = res;
    return data;
  },
  (err: AxiosError) => {
    const { message, response } = err;
    throw new Error(message, { cause: response });
  }
);
