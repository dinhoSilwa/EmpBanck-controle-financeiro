import { useTransactions } from "../../hooks/getTransactions/useTransactionsList";
import { TransactionStore } from "../../store/Transactions/transactionsStore";
import { Search } from "./search";

export const TransactionsList = () => {
  const { filteredTransactions, transactions } = TransactionStore();
  const data = filteredTransactions?.length
    ? filteredTransactions
    : transactions;

  return (
    <section>
      <Search />
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(
            (
              { description, amount, category, transactionType, day },
              index
            ) => (
              <tr key={index}>
                <td>{description}</td>
                <td>
                  {" "}
                  {transactionType === "expense" ? "-" : null}{" "}
                  {amount.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td>{category}</td>
                <td>{day}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </section>
  );
};
