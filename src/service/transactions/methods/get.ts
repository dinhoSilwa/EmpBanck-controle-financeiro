import type { AxiosInstance } from "axios";
import type { FinancialRecords } from "../../../models/TransactionsTypes/transactions";

export const TransactionGetMethods = async (
  api: AxiosInstance
): Promise<FinancialRecords[]> => {
  const response = await api("/transactions");
  return response.data;
};
