import type { ComponentProps } from "react";

interface MetricsCardsProps extends ComponentProps<"li"> {
  title: string;
  icon: any;
  status: any;
  isTotalCard?: boolean
}

export const MetricsCards = ({
  title,
  icon,
  status,
  isTotalCard,
  ...props
}: MetricsCardsProps) => {
  return (
    <li
      {...props}
      className={`w-[352px] h-[138px] px-4 flex flex-col justify-center rounded-xl ring-1 ring-secondaryGray/50 shadow ${isTotalCard ? "bg-secondaryGray text-white" : "bg-white hover:bg-gray-100"}`}
    >
      <div className="h-10 flex items-center justify-between">
        <p className="text-md">{title}</p> <figure>{icon}</figure>
      </div>
      <p className="h-10 text-2xl font-bold flex items-center">
        {status
          ? status.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          : "R$ 00,00"}{" "}
      </p>
    </li>
  );
};
