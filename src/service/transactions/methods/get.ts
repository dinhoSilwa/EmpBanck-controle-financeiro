import type { AxiosInstance } from "axios";
import type { FinancialRecords } from "../../../models/TransactionsTypes/transactions";

export const getFinancialRecords = async (
  api: AxiosInstance
): Promise<FinancialRecords[]> => {
  try {
    const response = await api<FinancialRecords[]>("/transactions");
    return response.data;
  } catch (error) {
    throw Error;
  }
};
