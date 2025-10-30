import { Cid10Item } from "../utils/cid10Types";
export const CID10_API ={
    BASE_URL: "https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search",

    buscar: async (termo: string): Promise<Cid10Item[]> =>{
        try {
            if (!termo || termo.trim().length < 2){
                return [];
            }
            const url = `${CID10_API.BASE_URL}?sf=code,name&terms=${encodeURIComponent(
                termo
            )}&maxList=50`;
            const response = await fetch(url);
            if (!response.ok){
                throw new Error("Erro ao ao buscar CID-10");
            }
            const data: [number, string[], null, string[]] = await response.json();
            const [total, codigos, , descricoes] = data;

            if (!codigos || codigos.length == 0){
                return [];
            }
            return codigos.map((codigo, index)=>({
                codigo,
                descricao: descricoes[index] || "Sem descrição",
                capitulo: CID10_API.obterCapitulo(codigo),

            }))
        } catch (error){
            console.error("Erro ao ao buscar CID-10", error);
            throw error;
        }
    },

    obterCapitulo: (codigo: string): string => {
    const letra = codigo.charAt(0).toUpperCase();

    const capitulos: Record<string, string> = {
      A: "I - Doenças infecciosas e parasitárias",
      B: "I - Doenças infecciosas e parasitárias",
      C: "II - Neoplasias",
      D: "II-IV - Neoplasias / Sangue / Endócrinas",
      E: "IV - Doenças endócrinas e metabólicas",
      F: "V - Transtornos mentais e comportamentais",
      G: "VI - Doenças do sistema nervoso",
      H: "VII-VIII - Doenças do olho e ouvido",
      I: "IX - Doenças do aparelho circulatório",
      J: "X - Doenças do aparelho respiratório",
      K: "XI - Doenças do aparelho digestivo",
      L: "XII - Doenças da pele e tecido subcutâneo",
      M: "XIII - Doenças osteomusculares e conjuntivo",
      N: "XIV - Doenças do aparelho geniturinário",
      O: "XV - Gravidez, parto e puerpério",
      P: "XVI - Afecções perinatais",
      Q: "XVII - Malformações congênitas",
      R: "XVIII - Sintomas, sinais e achados anormais",
      S: "XIX - Lesões, envenenamento e causas externas",
      T: "XIX - Lesões, envenenamento e causas externas",
      V: "XX - Causas externas de morbidade",
      W: "XX - Causas externas de morbidade",
      X: "XX - Causas externas de morbidade",
      Y: "XX - Causas externas de morbidade",
      Z: "XXI - Contatos com serviços de saúde",
    };

    return capitulos[letra] || "Capítulo não identificado";
  },
}