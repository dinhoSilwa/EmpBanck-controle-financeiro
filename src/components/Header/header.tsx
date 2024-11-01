import  conpanyLogo from "../../../public/logo horizontal.png"
import { ModalManageStore } from "../../store/modalStore/modal"

const buttonClasses =
  "px-4 h-12 rounded-sm bg-secondary text-white hover:bg-secondary/75";


export const Header = () =>{

  const {openModal}= ModalManageStore()
  return(
    <header className="w-[80%] h-32 flex justify-between items-center">
      <figure>
        <img src={conpanyLogo} alt={"logo da empresa"} className="w-56" />
      </figure>
      <button onClick={() =>openModal('newTransaction')} className={buttonClasses}>
        <span>Nova Transação</span>
      </button>
    </header>
  )
}

