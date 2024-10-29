import { useEffect, useState } from "react";
import { useTransactions } from "../../hooks/getTransactions/useTransactionsList";
import type { FinancialRecords } from "../../models/TransactionsTypes/transactions";

interface MetricsProps {
  income: number;
  expense: number;
  total: number;
}

export const Metrics = () => {
  const { data } = useTransactions();

  const [metrics, setMetrics] = useState<MetricsProps>({
    income: 0,
    expense: 0,
    total: 0,
  });

  const calculateMetrics = (data: FinancialRecords[]) => {
    const incomeTotal =
      data
        .filter((item) => item.transactionType == "income")
        .reduce((acc, item) => acc + item.amount, 0) || 0;

    const expenseTotal =
      data
        ?.filter((item) => item.transactionType == "expense")
        .reduce((acc, item) => acc + item.amount, 0) || 0;

    const totalTransaction =
      data?.reduce((acc, item) => acc - item.amount, 0) || 0;
    return {
      income: incomeTotal,
      expense: expenseTotal,
      total: totalTransaction,
    };
  };

  useEffect(() => {
    if (data) {
      setMetrics(calculateMetrics(data));
    }
  }, []);

  return (
    <section>
      <ul>
        <li>{metrics?.income} entradas</li>
        <li>{metrics?.expense} saídas</li>
        <li>{metrics?.total} Total</li>
      </ul>
    </section>
  );
};
