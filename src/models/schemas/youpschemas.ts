import * as yup from "yup";

export const FinancialRecordsSchema = yup.object().shape({
  description: yup
    .string()
    .max(25, "Limite de caracteres atingido")
    .required("A descrição é obrigatória"),
    amount: yup.string()
    .required("É obrigatório informar o valor"),
    category: yup.string().required("É obrigatório definir a categoria"),
  transactionType: yup
    .string()
    .oneOf(
      ["income", "expense"],
      "O tipo de transação deve ser 'income' ou 'expense'"
    ).required("O tipo de transação é obrigatório"),
});
