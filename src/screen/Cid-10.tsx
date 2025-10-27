import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  ListRenderItem,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/cid";
import HeaderHome from "../componentes/headerHome";



export interface Cid10Item {
  codigo: string;
  descricao: string;
  capitulo: string;
}




const CID10_API = {
  BASE_URL: "https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search",

  buscar: async (termo: string): Promise<Cid10Item[]> => {
    try {
      if (!termo || termo.trim().length < 2) {
        return [];
      }

      const url = `${CID10_API.BASE_URL}?sf=code,name&terms=${encodeURIComponent(
        termo
      )}&maxList=50`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erro ao buscar CID-10");
      }

      const data: [number, string[], null, string[]] = await response.json();
      const [total, codigos, , descricoes] = data;

      if (!codigos || codigos.length === 0) {
        return [];
      }

      return codigos.map((codigo, index) => ({
        codigo,
        descricao: descricoes[index] || "Sem descrição",
        capitulo: CID10_API.obterCapitulo(codigo),
      }));
    } catch (error) {
      console.error("Erro na busca CID-10:", error);
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
};



export default function Cid10() {
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


  const renderItem: ListRenderItem<Cid10Item> = ({ item }) => (
    <View
      style={styles.cidItem}
      
    >
      <View style={styles.cidItemHeader}>
        <Text style={styles.cidCodigo}>{item.codigo}</Text>
      </View>
      <Text style={styles.cidDescricao}>{item.descricao}</Text>
      <Text style={styles.cidCapitulo}>{item.capitulo}</Text>
    </View>
  );

  return (
    <View style={styles.background}>
      <HeaderHome titulo="CID-10" mostrarBusca={false} mostrarVoltar={true} />

      <View style={styles.containerCid}>
        <View style={styles.buscaContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.buscaIcon} />
          <TextInput
            style={styles.buscaInput}
            placeholder="Buscar por código, doença ou capítulo..."
            value={busca}
            onChangeText={setBusca}
            placeholderTextColor="#999"
          />
          {busca.length > 0 && (
            <TouchableOpacity onPress={() => setBusca("")}>
              <Ionicons name="close-circle" size={20} color="#666" />
            </TouchableOpacity>
          )}
        </View>

        
        <View style={styles.infoContainer}>
          <Text style={styles.infoTexto}>
            {resultados.length}{" "}
            {resultados.length === 1 ? "resultado" : "resultados"}
          </Text>
          
        </View>

        
        {carregando ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
          </View>
        ) : resultados.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="search-outline" size={48} color="#CCC" />
            <Text style={styles.emptyTexto}>Nenhum resultado encontrado</Text>
            <Text style={styles.emptySubtexto}>
              Tente buscar por outro termo
            </Text>
          </View>
        ) : (
          <FlatList
            data={resultados}
            renderItem={renderItem}
            keyExtractor={(item) => item.codigo}
            contentContainerStyle={styles.lista}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

      
      
    </View>
  );
}
