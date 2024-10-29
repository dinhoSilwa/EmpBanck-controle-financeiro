import type { AxiosInstance } from "axios";
import type { FinancialRecords } from "../../../hooks/useForm/validationForms";

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
