import type { AxiosInstance } from "axios";
import type { FinancialRecords } from "./../../models/TransactionsTypes/transactions";
import { TransactionPostMethod } from "./methods/post";
import { getFinancialRecords } from "./methods/get";

export class TransactionService {
  createTransaction = async (
    api: AxiosInstance,
    data: FinancialRecords
  ): Promise<void> => await TransactionPostMethod(api, data);

  getAllTransactions = async (
    api: AxiosInstance
  ): Promise<FinancialRecords[]> => await getFinancialRecords(api);
}
