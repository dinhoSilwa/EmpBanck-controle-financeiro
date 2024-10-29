import type { AxiosInstance } from "axios";
import type { FinancialRecords } from "../../hooks/useForm/validationForms";
import { TransactionPostMethod } from "./methods/post";
import { TransactionGetMethods } from "./methods/get";

export class TransactionService {
  createTransaction = async (
    api: AxiosInstance,
    data: FinancialRecords
  ): Promise<void> => await TransactionPostMethod(api, data);

  getAllTransactions = async (
    api: AxiosInstance
  ): Promise<FinancialRecords[]> => await TransactionGetMethods(api);
}
