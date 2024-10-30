import { TransactionStore } from "../../store/Transactions/transactionsStore";

export const Search = () => {
  const { setfilteredTransaction } = TransactionStore();

  return (
    <section>
      <input
        type="text"
        placeholder="busca"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setfilteredTransaction(e.target.value)
        }
      />
    </section>
  );
};
