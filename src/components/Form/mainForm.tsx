import { useFinancialRecord } from "../../hooks/useForm/validationForms";

export const Form = () => {
  const { handleSubmit, register, watch, errors, setValue, setError } =
    useFinancialRecord();

  const description = watch("description");
  const amount = watch("amount");
  const category = watch("category");

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="titulo"
        value={description}
        {...register("description")}
      />
      <div>
        {errors.description && <span>{errors.description.message}</span>}
      </div>
      <input
        type="text"
        placeholder="valor"
        value={amount}
        {...register("amount")}
      />
      <div>{errors.amount && <span>{errors.amount.message}</span>}</div>

      <select id="categoria" {...register("category")} value={category}>
        <option value="01"> categoria 01</option>
        <option value="02"> categoria 02</option>
        <option value="03"> categoria 02</option>
      </select>

      <div>{errors.category && <span>{errors.category.message}</span>}</div>

      <label htmlFor="financialInput">Entrada</label>
      <input
        type="radio"
        value={"income"}
        id="financialInput"
        {...register("transactionType")}
      />

      <label htmlFor="financialExit">sáida</label>
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
      <button type="submit">Enviar</button>
    </form>
  );
};
