export const handleAmountChange = (
  eventInput: React.ChangeEvent<HTMLInputElement>
): any => {
  const { value } = eventInput.target;
  const numericValue = value.replace(/\D/g, "");
  const decimalValue = numericValue.replace(",", ".");
  const formattedCurrency = (parseFloat(decimalValue) / 100).toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    }
  );

  return formattedCurrency;
};

