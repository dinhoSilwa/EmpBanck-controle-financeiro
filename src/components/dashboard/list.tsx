import { TransactionStore } from "../../store/Transactions/transactionsStore";

export const TransactionsList = () => {
  const { filteredTransactions, transactions } = TransactionStore();
  const data = filteredTransactions?.length
    ? filteredTransactions
    : transactions;

  return (
    <table className="w-[82%] ml-auto mr-auto flex flex-col h-[700px] overflow-y-scroll">
      <thead>
        <tr className="flex w-full justify-around sr-only">
          <th className="flex-1 flex py-2">Descrição</th>
          <th className="flex-1 flex py-2">Valor</th>
          <th className="flex-1 flex py-2">Categoria</th>
          <th className="flex-1 flex py-2">Data</th>
        </tr>
      </thead>
      <tbody className="flex flex-col gap-4 pt-4">
        {data?.map(
          ({ description, amount, category, transactionType, day }, index) => (
            <tr
              key={index}
              className="py-4 px-4 flex justify-between items-center text-primary border-[1px] border-secondaryGray/30 rounded-md"
            >
              <td className="flex-1 flex gap-4 items-center">
                <div
                  className={` w-4 h-4 rounded-full ${
                    transactionType !== "expense"
                      ? "bg-system-success"
                      : "bg-system-warnig"
                  }`}
                ></div>
                {description}
              </td>
              <td className="flex-1 px-4">
                {" "}
                {transactionType === "expense" ? "-" : null}{" "}
                {amount.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td className="flex-1 px-4">{category}</td>
              <td className="flex-1 px-4 text-right">{day}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
