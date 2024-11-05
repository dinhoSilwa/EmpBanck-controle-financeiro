import { modalManageStore } from "../../store/modalStore/modal";
import { Logo } from "./logo";

const buttonClasses =
  "px-4 h-12 flex gap-2 items-center rounded-sm bg-secondary text-white hover:bg-secondary/75 overflow-hidden active:scale-105 hover:rounded-xl trasform duration-500";

export const Header: React.FC = () => {
  const { openModal } = modalManageStore();
  return (
    <header className="h-32 mt-8 w-[82%] ml-auto mr-auto flex justify-between items-center">
      <Logo />
    <nav>
    <button
        onClick={() => openModal("newTransaction")}
        className={buttonClasses}
        arial-label="Abrir modal para nova transação"
      >
        <span className="translate-x-0">Nova Transação</span>
      </button>
    </nav>
    </header>
  );
};
