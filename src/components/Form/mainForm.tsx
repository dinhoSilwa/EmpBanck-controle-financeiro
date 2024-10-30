import React, { useEffect } from "react";
import { useFinancialRecord } from "../../hooks/useForm/validationForms";
import { handleAmountChange } from "./utils/formsHandlers";
import { ModalManageStore } from "../../store/modalStore/modal";

export const Form: React.FC = () => {
  const {
    handleSubmit,
    register,
    watch,
    errors,
    setValue,
    setError,
    isSuccessForm,
    isLoadingForm,
  } = useFinancialRecord();

  const description: string = watch("description");
  const amount: number = watch("amount");
  const category: string = watch("category");

  const submitForm = (e: any) => {
    e.preventDefault();
    const amoutToString = amount.toString();
    setValue(
      "amount",
      amoutToString.replace("R$", "").replace(",", ".") as any
    );
    if (isNaN(amoutToString as any)) {
      setError("amount", { message: "" });
    }

    handleSubmit();
  };

  const { closeModal } = ModalManageStore();

  useEffect(() => {
    if (isSuccessForm) {
      closeModal("newTransaction");
      return;
    }
  }, [isSuccessForm]);

  return (
    <form onSubmit={(e) => submitForm(e)} style={{ background: "#fff" }}>
      <div>
        <span onClick={() => closeModal("newTransaction")}>Fechar</span>
      </div>
      {isSuccessForm && <span>Dados Cadastrados com sucesso</span>}

      <input
        type="text"
        placeholder="Título"
        value={description}
        {...register("description")}
      />
      <div>
        {errors.description && <span>{errors.description.message}</span>}
      </div>
      <input
        type="text"
        placeholder="Valor"
        value={isNaN(amount) ? amount : amount || ""}
        {...register("amount", {
          onChange: (eventInput: React.ChangeEvent<HTMLInputElement>) =>
            setValue("amount", handleAmountChange(eventInput)),
          // exported function to the utils dir
        })}
      />

      <div>{errors.amount && <span>{errors.amount.message}</span>}</div>

      <select id="categoria" {...register("category")} value={category}>
        <option value="01">Categoria 01</option>
        <option value="02">Categoria 02</option>
        <option value="03">Categoria 03</option>
      </select>

      <div>{errors.category && <span>{errors.category.message}</span>}</div>

      <label htmlFor="financialInput">Entrada</label>
      <input
        type="radio"
        value={"income"}
        id="financialInput"
        {...register("transactionType")}
      />

      <label htmlFor="financialExit">Saída</label>
      <input
        type="radio"
        value={"expense"}
        id="financialExit"
        {...register("transactionType")}
      />

      <div>
        {errors.transactionType && (
          <span>{errors.transactionType.message}</span>
        )}
      </div>

      <button type="submit">{isLoadingForm ? "Carregando" : "Enviar"}</button>
    </form>
  );
};
