import type { AxiosInstance } from "axios";
import type { FinancialRecords } from "../../hooks/useForm/validationForms";
import { TransactionPostMethod } from "./methods/post";

export class TransactionService {

  createTransaction = async (
    api: AxiosInstance,
    data: FinancialRecords
  ): Promise<void> => TransactionPostMethod(api, data);
}
