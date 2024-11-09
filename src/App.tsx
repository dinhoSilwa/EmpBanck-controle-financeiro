import React from "react";
import "./App.css";
import { Metrics } from "./components/dashboard/metrics";
import { Search } from "./components/Search/search";
import { Form } from "./components/form/mainForm";
import { BackgroundModal } from "./components/globalModal/Modal";
import { Header } from "./components/Header/header";
import { modalManageStore } from "./store/modalStore/modal";
import { TransactionsList } from "./components/dashboard/List";

export const App = () => {
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
};

export default React.memo(App);
