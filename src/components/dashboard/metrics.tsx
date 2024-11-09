import React, { useCallback, useEffect, useMemo, useState } from "react";
import type { FinancialRecords } from "../../models/TransactionsTypes/transactions";
import { CircleArrowDown, CircleArrowUp, DollarSign } from "lucide-react";
import { transactionStore } from "../../store/Transactions/transactionsStore";
import { MetricsCards } from "./metricsCard";

interface MetricsProps {
  income: number;
  expense: number;
  total: number;
}

export const Metrics = React.memo(() => {
  const { transactions } = transactionStore();

  const calculateMetrics = useCallback(
    (transactions: FinancialRecords[]): MetricsProps => {
      if (!transactions || transactions.length === 0) {
        return {
          income: 0,
          expense: 0,
          total: 0,
        };
      }
      const income =
        transactions
          .filter((item) => item.transactionType == "income")
          .reduce((acc, item) => acc + item.amount, 0) || 0;

      const expense =
        transactions
          ?.filter((item) => item.transactionType == "expense")
          .reduce((acc, item) => acc + item.amount, 0) || 0;

      const total = income + expense;

      return {
        income: income,
        expense: expense,
        total: total,
      };
    },
    []
  );
  const metrics = useMemo(
    () => calculateMetrics(transactions as FinancialRecords[]),
    [transactions, calculateMetrics]
  );

  return (
    <section className="w-[82%] ml-auto mr-auto">
      <ul className="flex justify-between font-sans flex-wrap">
        <MetricsCards
          title="Entrada"
          icon={<CircleArrowUp className="text-system-success" />}
          status={metrics?.income}
        />
        <MetricsCards
          title="Saida"
          icon={<CircleArrowDown className="text-system-warnig" />}
          status={metrics?.expense}
        />
        <MetricsCards
          title="Total"
          icon={<DollarSign className="text-green-600" />}
          status={metrics?.total}
          isTotalCard={true}
        />
      </ul>
    </section>
  );
});
