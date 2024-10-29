import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { TransactionService } from "../../service/transactions/service";
import { useHTTPtransactions } from "../../service/usehttp";
import type { FinancialRecords } from "../../models/TransactionsTypes/transactions";

export const useTransactions = () => {
  const QUERY_KEY = "get-transactions" as const;

  const DEFAULT_CONFIG = {
    staleTime: 5 * 60 * 1000,
    cacheTime: 8 * 60 * 1000,
    retry: 3,
  };

  const api = useHTTPtransactions();
  const service = useMemo(() => new TransactionService(), []);

  const { data, isLoading, isError } = useQuery<FinancialRecords[], Error>({
    queryKey: [QUERY_KEY],
    queryFn: () => service.getAllTransactions(api),
    ...DEFAULT_CONFIG,
  });
 
  return {
    data,
    isLoading,
    isError,
  };
};
