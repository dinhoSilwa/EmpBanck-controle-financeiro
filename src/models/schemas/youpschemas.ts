import * as yup from "yup";

export const FinancialRecordsSchema = yup.object().shape({
  description: yup
    .string()
    .max(25, "Limite de caracteres atingido")
    .required("A descrição é obrigatória"),
    amount: yup.string()
    .required("É obrigatório informar o valor"),
    category: yup.string().required("É obrigatório definir a categoria"),
    transactionType: yup.string()
    .required('Por favor, selecione o tipo de transação')
    .oneOf(['income', 'expense'], 'Seleção inválida'),
});
