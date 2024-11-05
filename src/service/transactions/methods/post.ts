import type { AxiosInstance } from "axios";
import type { FinancialRecords } from "../../../models/TransactionsTypes/transactions";
export const TransactionPostMethod = async (
  api: AxiosInstance,
  data: FinancialRecords
): Promise<void> => {
  try {
    const response = await api.post("/transactions", data);
    return response.data;
  } catch (error) {
    console.error("Falha ao Realizar Registro", error);
    return 
  }
};
