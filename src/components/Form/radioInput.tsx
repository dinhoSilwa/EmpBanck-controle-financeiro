import clsx from "clsx";
import { CircleArrowDown, CircleArrowUp } from "lucide-react";

export const RadioInput = ({
  type,
  label,
  selectedType,
  register,
}: {
  type: "income" | "expense";
  label: string;
  selectedType: string;
  register: any;
}) => {
  return (
    <fieldset
      className={clsx(
        "rounded-md cursor-pointer w-1/2 py-4 ring-1 ring-secondaryGray/20 hover:bg-opacity-80 active:scale-105",
        {
          "bg-green-300 text-white":
            type === "income" && selectedType === "income",
          "bg-red-100": type === "expense" && selectedType === "expense",
        }
      )}
    >
      <label
        htmlFor={type}
        className={clsx(
          "flex items-center justify-center gap-2 cursor-pointer",
          {
            "text-green-800": type === "income" && selectedType === "income",
            "text-red-600": type === "expense" && selectedType === "expense",
          }
        )}
      >
        {type === "income" ? <CircleArrowUp /> : <CircleArrowDown />}
        {label}
      </label>
      <input
        type="radio"
        value={type}
        id={type}
        className="sr-only"
        {...register("transactionType")}
      />
    </fieldset>
  );
};
