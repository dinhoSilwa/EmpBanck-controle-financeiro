import React, { useCallback, useEffect } from "react";
import { useFinancialRecord } from "../../hooks/useForm/validationForms";
import { X } from "lucide-react";
import { modalManageStore } from "../../store/modalStore/modal";
import { handleAmountChange } from "./utils/formsHandlers";
import { RadioInput } from "./radioInput";

const typeDetails = [
  "Alimentação",
  "Salário",
  "Transporte",
  "Aluguel",
  "Combustível", // gastos específicos com combustível
  "Educação Infantil", // despesas com creches e educação infantil
  "Almoço Fora", // refeições em restaurantes ou lanchonetes
  "Transporte Público", // despesas com ônibus, metrô, etc.
  "Manutenção de Veículo", // custos com serviços e peças do carro
  "Contas de Luz", // despesas específicas com energia elétrica
  "Contas de Água", // despesas específicas com água
  "Mensalidade Escolar", // mensalidade de escolas e universidades
  "Entretenimento", // gastos com cinema, shows e eventos
  "Assinaturas", // serviços de streaming ou revistas
  "Material Escolar", // despesas com cadernos, livros e outros materiais
  "Roupas de Inverno", // compras específicas de roupas de frio
  "Outras",
];

const formContainerClasses =
  "max-w-[535px] h-[530px] ml-auto mr-auto mt-8 p-8 flex flex-col gap-3 bg-white font-sans rounded-xl";
const inputBaseClasses =
  "h-10 rounded-lg px-2 outline-none focus:ring-1 ring-1 placeholder:text-secondaryGray/40";
const fieldsetClasses = "flex flex-col justify-center space-y-2";
const buttonClasses =
  "h-12 rounded-md bg-secondary text-white hover:bg-secondary/75";

export const Form = React.memo(() => {
  const {
    handleSubmit,
    register,
    watch,
    errors,
    setValue,
    isSuccessForm,
    isLoadingForm,
  } = useFinancialRecord();

  const description: string = watch("description");
  const amount: any = watch("amount");
  const category: string = watch("category");
  const transactionType = watch("transactionType");

  const submitForm = useCallback((e: any) => {
    e.preventDefault();
    const amountToNumber = parseFloat(
      amount.replace("R$", "").replace(/\./g, "").replace(",", ".")
    );
    setValue("amount", amountToNumber as number);
    handleSubmit();
  }, [amount, handleSubmit, setValue])

  const { closeModal } = modalManageStore();

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
          className={`${inputBaseClasses} focus:ring-secondary ring-secondaryGray/20`}
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
          className={`${inputBaseClasses} focus:ring-secondary ring-secondaryGray/20`}
          {...register("amount", {
            onChange: (eventInput: React.ChangeEvent<HTMLInputElement>) =>
              setValue("amount", handleAmountChange(eventInput)),
          })}
        />
        {errors.amount && <span>{errors.amount.message}</span>}
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
          className="px-2 h-12 rounded-md outline-none ring-1 ring-secondaryGray/20"
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
});
