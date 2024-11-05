import type { AxiosError } from "axios";

export const ResponseInterceptor = (error: AxiosError) => {
  if (error.response) {
    console.error(`Error na Resposta da API: ${error.response.status}`);
  } else if (error.request) {
    console.error("Nenhuma resposta Recebida da API.");
  } else {
    console.error(`Error ao Configurar a requisição ${error.message}`);
  }
  return Promise.reject(error);
};
