import React from "react";
import companyLogo from "../../assets/logo-h.png";

export const Logo = React.memo(() => {
  return (
    <figure>
      <img
        src={companyLogo}
        alt={"logotipo da empresa - Empbank"}
        className="w-56"
        title="Empbank - Controle Financeiro"
      />
      <figcaption className="sr-only">
        Imagem do logotipo da empresa ficticia Empbank
      </figcaption>
    </figure>
  );
});
