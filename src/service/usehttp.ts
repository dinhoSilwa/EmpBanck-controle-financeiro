import { setup } from "./setup";

export const useHTTPtransactions = () => {
  const api = setup("http://localhost:5000");
  return api;
};

export const useHTTPauth = () => {
  const api = setup("http://localhost:5000/transactions");
  return api;
};
