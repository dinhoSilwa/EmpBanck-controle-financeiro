export interface FinancialRecords {
  description: string;
  amount: any;
  category: string;
  transactionType: "income" | "expense";
  day ?: any
}
