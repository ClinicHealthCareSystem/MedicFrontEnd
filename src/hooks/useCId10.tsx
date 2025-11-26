import { useEffect, useState } from "react";
import { CID10_API } from "./useCid10Api";
import { Cid10Item } from "../utils/cid10Types";

export function useCid10() {
  const [busca, setBusca] = useState<string>("");
  const [resultados, setResultados] = useState<Cid10Item[]>([]);
  const [carregando, setCarregando] = useState<boolean>(false);

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (busca.trim().length < 2) {
        setResultados([]);
        return;
      }

      try {
        setCarregando(true);
        const dados = await CID10_API.buscar(busca);
        setResultados(dados);
      } catch (error) {
        console.error("Erro ao buscar CID-10:", error);
        setResultados([]);
      } finally {
        setCarregando(false);
      }
    }, 600);

    return () => clearTimeout(delayDebounce);
  }, [busca]);

  return { busca, setBusca, resultados, carregando };
}
