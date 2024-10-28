import axios from "axios";

export const setup = (baseURL: string) => {
  const api = axios.create({
    baseURL,
    headers: { "Content-Type": "Application/json" },
  });
  return api;
};
