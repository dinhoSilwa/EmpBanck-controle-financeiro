import  conpanyLogo from "../../../public/logo horizontal.png"
import { ModalManageStore } from "../../store/modalStore/modal"

export const Header = () =>{

  const {openModal}= ModalManageStore()
  return(
    <header>
      <figure>
        <img src={conpanyLogo} alt={"logo da empresa"} />
      </figure>

      <button onClick={() =>openModal('newTransaction')}>
        <span>Nona Transação</span>
      </button>
    </header>
  )
}

