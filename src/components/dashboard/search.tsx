import { useState } from "react";
import { TransactionStore } from "../../store/Transactions/transactionsStore";
import { SearchIcon } from "lucide-react";

export const Search = () => {
  const { setfilteredTransaction } = TransactionStore();
  const [currentTerm, setcurrentTerm] = useState("");

  const handleSearch = () => {
    setfilteredTransaction(currentTerm);
  };

  return (
    <section className=" flex gap-4 w-[82%] ml-auto mr-auto">
      <input
        type="text"
        placeholder="Busque uma Transação"
        className="h-12 ring-1 ring-secondaryGray/30 rounded-md flex-1 px-4 outline-none focus:ring-secondary"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setcurrentTerm(e.target.value)
        }
      />

      <button
        onClick={handleSearch}
        className="w-36 h-12 flex gap-2  items-center px-4 ring-1 ring-secondary rounded-md text-secondary transition-all duration-500 hover:bg-secondary hover:text-white"
      >
        <SearchIcon />
        buscar
      </button>
    </section>
  );
};
