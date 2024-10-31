import React, { useEffect } from "react";
import { useFinancialRecord } from "../../hooks/useForm/validationForms";
import { X } from "lucide-react";
import { ModalManageStore } from "../../store/modalStore/modal";
import { handleAmountChange } from "./utils/formsHandlers";
import { RadioInput } from "./radioInput";

const typeDetails = ["Alimentação", "Salário", "Transporte", "Aluguel"];
const formContainerClasses =
  "max-w-[535px] h-[530px] ml-auto mr-auto mt-8 p-8 flex flex-col gap-3 bg-white font-sans rounded-xl";
const inputBaseClasses =
  "h-10 rounded-lg px-2 outline-none focus:ring-1 ring-1 placeholder:text-borderGray/40";
const fieldsetClasses = "flex flex-col justify-center space-y-2";
const buttonClasses =
  "h-12 rounded-md bg-secondary text-white hover:bg-secondary/75";

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
  const transactionType = watch("transactionType");

  const submitForm = (e: any) => {
    e.preventDefault();
    const amountToString = amount.toString();
    setValue(
      "amount",
      amountToString.replace("R$", "").replace(",", ".") as any
    );
    if (isNaN(amountToString as any)) {
      setError("amount", { message: "" });
    }

    handleSubmit();
  };

  const { closeModal } = ModalManageStore();

  useEffect(() => {
    if (isSuccessForm) {
      setTimeout(() => {
        closeModal("newTransaction");
        return;
      }, 1000);
    }
  }, [isSuccessForm, closeModal]);

  return (
    <form onSubmit={(e) => submitForm(e)} className={formContainerClasses}>
      {isSuccessForm && (
        <span className="text-green-400">Sucesso na Operação</span>
      )}
      <div className="ml-auto" onClick={() => closeModal("newTransaction")}>
        <X className="hover:text-red-700 cursor-pointer hover:scale-105" />
      </div>
      <header className="h-10">
        <h2 className="text-2xl font-normal text-primary/80">Nova Transação</h2>
      </header>

      <fieldset className={fieldsetClasses}>
        <label
          htmlFor="title-input"
          className="font-medium text-primary/75 text-sm"
        >
          Titulo
        </label>
        <input
          id="title-input"
          type="text"
          placeholder="Insira o título da transação"
          value={description}
          {...register("description")}
          className={`${inputBaseClasses} focus:ring-secondary ring-borderGray/20`}
        />
        {errors.description && <span>{errors.description.message}</span>}
      </fieldset>

      <fieldset className={fieldsetClasses}>
        <label
          htmlFor="value-input"
          className="font-medium text-primary/75 text-sm"
        >
          Valor
        </label>
        <input
          id="value-input"
          type="text"
          placeholder="Valor"
          value={isNaN(amount) ? amount : amount || ""}
          className={`${inputBaseClasses} focus:ring-secondary ring-borderGray/20`}
          {...register("amount", {
            onChange: (eventInput: React.ChangeEvent<HTMLInputElement>) =>
              setValue("amount", handleAmountChange(eventInput)),
          })}
        />
      </fieldset>

      <fieldset className={fieldsetClasses}>
        <label
          htmlFor="category-input"
          className="font-medium text-primary/75 text-sm"
        >
          Categoria
        </label>
        <select
          id="category-input"
          {...register("category")}
          value={category}
          className="px-2 h-12 rounded-md outline-none ring-1 ring-borderGray/20"
        >
          {typeDetails.map((item, index) => (
            <option value={item} key={index} className="py-2 h-10">
              {item}
            </option>
          ))}
        </select>
      </fieldset>

      <div className="flex justify-center gap-6">
        <RadioInput
          type="income"
          label="Entrada"
          selectedType={transactionType}
          register={register}
        />
        <RadioInput
          type="expense"
          label="Saída"
          selectedType={transactionType}
          register={register}
        />
      </div>
      {errors.transactionType && <span>{errors.transactionType.message}</span>}

      <button type="submit" className={buttonClasses}>
        {isLoadingForm ? "Carregando" : "Adicionar"}
      </button>
    </form>
  );
};
