import { useEffect, useState } from "react";
import { useTransactions } from "../../hooks/getTransactions/useTransactionsList";
import type { FinancialRecords } from "../../models/TransactionsTypes/transactions";
import { CircleArrowDown, CircleArrowUp, DollarSign } from "lucide-react";
import { transactionStore } from "../../store/Transactions/transactionsStore";
import { MetricsCards } from "./metricsCard";

interface MetricsProps {
  income: number;
  expense: number;
  total: number;
}

export const Metrics = () => {
  const { data } = useTransactions();
  const { transactions } = transactionStore();

  const [metrics, setMetrics] = useState<MetricsProps>({
    income: 0,
    expense: 0,
    total: 0,
  });

  const calculateMetrics = (transactions: FinancialRecords[]) => {
    // const parseAmount = (amount : string | number) =>{
    //   return parseFloat(amount.toString().replace(/\s/g, '').replace(".","").replace(',','.'))
    // }

    const incomeTotal =
      transactions
        .filter((item) => item.transactionType == "income")
        .reduce((acc, item) => acc + item.amount, 0) || 0;
    console.log(incomeTotal);

    const expenseTotal =
      transactions
        ?.filter((item) => item.transactionType == "expense")
        .reduce((acc, item) => acc + item.amount, 0) || 0;

    const totalTransaction =
      transactions?.reduce((acc, item) => acc + item.amount, 0) || 0;

    return {
      income: incomeTotal,
      expense: expenseTotal,
      total: totalTransaction,
    };
  };

  useEffect(() => {
    if (transactions) {
      setMetrics(calculateMetrics(transactions));
    }
  }, [transactions]);

  return (
    <section className="w-[82%] ml-auto mr-auto">
      <ul className="flex justify-between font-sans flex-wrap">
        <MetricsCards
          title="Entrada"
          icon={<CircleArrowUp className="text-system-success" />}
          status={metrics.income}
        />
        <MetricsCards
          title="Saida"
          icon={<CircleArrowDown className="text-system-warnig" />}
          status={metrics.expense}
        />
        <MetricsCards
          title="Total"
          icon={<DollarSign className="text-green-600" />}
          status={metrics.total}
          isTotalCard={true}
        />
      </ul>
    </section>
  );
};
