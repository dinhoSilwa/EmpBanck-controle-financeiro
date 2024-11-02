import { create } from "zustand";
import type { FinancialRecords } from "../../models/TransactionsTypes/transactions";

interface TransactionStoreProps {
  transactions: FinancialRecords[] | null;
  setTransactions: (data: FinancialRecords[]) => void;
  filteredTransactions: FinancialRecords[] | null;
  setfilteredTransaction: (termOfSearch: string) => void;
}

export const transactionStore = create<TransactionStoreProps>()((set) => ({
  transactions: null,
  filteredTransactions: null,
  setTransactions: (data: FinancialRecords[]) => set({ transactions: data }),
  setfilteredTransaction: (termOfSearch: string) =>
    set((state) => {
      if (termOfSearch.length <= 0) {
        return { filteredTransactions: state.transactions };
      }
      return {
        filteredTransactions: state.transactions?.filter((items) =>
          items.description.toLowerCase().includes(termOfSearch.toLowerCase())
        ),
      };
    }),
}));
