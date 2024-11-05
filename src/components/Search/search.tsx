import { useEffect, useRef, useState } from "react";
import { transactionStore } from "../../store/Transactions/transactionsStore";
import { SearchIcon } from "lucide-react";
//import { savedTermStore } from "../../store/savedSeachs/savedSearchs";

export const Search = () => {
  const inputRef = useRef(null); // Cria a referência para o input
  //const [isActiveSearch, setisActiveSearch] = useState(false);
  const { setfilteredTransaction } = transactionStore();
  const [currentTerm, setcurrentTerm] = useState("");

  const handleSearch = () => {
    setfilteredTransaction(currentTerm);
    //  setSaved(currentTerm);
  };

  useEffect(() => {
    if (!currentTerm.length) setfilteredTransaction("");
  }, [currentTerm]);

  // const { saved, setSaved, delSaved } = savedTermStore();

  return (
    <section className=" flex gap-4 w-[82%] ml-auto mr-auto relative">
      <input
        type="text"
        placeholder="Busque uma Transação"
        value={currentTerm}
        ref={inputRef}
        className="h-12 ring-1 ring-secondaryGray/30 rounded-md flex-1 px-4 outline-none focus:ring-secondary"
        // onFocus={() => setisActiveSearch(true)}
        // onBlur={() =>setTimeout(() =>{setisActiveSearch(false)},1000)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setcurrentTerm(e.target.value);
        }}
      />
      <button
        onClick={handleSearch}
        className="w-36 h-12 flex gap-2  items-center px-4 ring-1 ring-secondary rounded-md text-secondary transition-all duration-500 hover:bg-secondary hover:text-white"
      >
        <SearchIcon />
        buscar
      </button>

      {/* {isActiveSearch ? (
        <div className="absolute top-14 flex gap-2">
          {saved.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-around bg-blue-100 h-6 px-2 rounded-full group cursor-pointer"
            >
              <span
                className="group-hover:flex hidden transition-all duration-200 text-xs text-black font-semibold hover:text-system-warnig"
                onClick={() => delSaved(item)}
              >
                x
              </span>
              <span
                className="px-2 text-xs text-blue-900"
                onClick={() => setcurrentTerm(item)}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      ) : null} */}
    </section>
  );
};
