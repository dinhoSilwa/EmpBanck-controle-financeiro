import axios, { type AxiosInstance } from "axios";
import { ResponseInterceptor } from "./responseInterceptor";

export const setup = (baseURL: string) => {
  if (!baseURL) {
    throw new Error("Url base não encontrada");
  }
  const api: AxiosInstance = axios.create({
    baseURL,
    headers: { "Content-Type": "Application/json" },
  });

  api.interceptors.request.use((response) => response, ResponseInterceptor);

  return api;
};
