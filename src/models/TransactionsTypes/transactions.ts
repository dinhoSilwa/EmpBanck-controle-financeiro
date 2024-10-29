export interface FinancialRecords {
  description: string;
  amount: number;
  category: string;
  transactionType: "income" | "expense";
  day ?: any
}
