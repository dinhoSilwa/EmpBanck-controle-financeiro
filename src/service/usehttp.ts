import { setup } from "./setup";

export const useHTTPtransactions = () => {
  const api = setup("http://localhost:3001");
  return api;
};
