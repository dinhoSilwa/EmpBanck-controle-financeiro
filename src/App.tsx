import "./App.css";
import { TransactionsList } from "./components/Dashboard/list";
import { Metrics } from "./components/Dashboard/metrics";
import { Form } from "./components/Form/mainForm";
import { BackgroundModal } from "./components/GlobalModal/modal";
import { Header } from "./components/Header/header";
import { ModalManageStore } from "./store/modalStore/modal";

function App() {
  const { modals } = ModalManageStore();

  return (
    <>
      {modals.newTransaction && <BackgroundModal children={<Form />} />}

      <Header />
      <Metrics />
      <TransactionsList />
    </>
  );
}

export default App;
