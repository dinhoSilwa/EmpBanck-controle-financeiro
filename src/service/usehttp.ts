import { setup } from "./setup";

export const useHTTPtransactions = () => {
  const api = setup("/transactions");
  return api;
};

export const useHTTPauth = () => {
  const api = setup("/auth");
  return api;
};
