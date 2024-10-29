import { setup } from "./setup";

export const useHTTPtransactions = () => {
  const api = setup("http://localhost:5000");
  return api;
};
