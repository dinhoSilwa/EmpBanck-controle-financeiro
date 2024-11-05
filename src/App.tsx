import "./App.css";
import { TransactionsList } from "./components/Dashboard/list";
import { Metrics } from "./components/Dashboard/metrics";
import { Search } from "./components/Search/search";
import { Form } from "./components/Form/mainForm";
import { BackgroundModal } from "./components/GlobalModal/modal";
import { Header } from "./components/Header/header";
import { modalManageStore } from "./store/modalStore/modal";

function App() {
  const { modals } = modalManageStore();

  return (
    <main className="w-screen flex flex-col gap-6">
      {modals.newTransaction && <BackgroundModal children={<Form />} />}
      <Header />
      <Metrics />
      <Search />
      <TransactionsList />
    </main>
  );
}

export default App;
