import { View, Text, TouchableOpacity} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import style from "../stylesComponents/cardInfoDashboard";
import { useState } from "react";
type Props = {
  activeTab: "opcao1" | "opcao2" | "opcao3";
};
export default function CardInfoDashboard({ activeTab }: Props) {
  return (
    <>
      {activeTab === "opcao1" && (
        <View style={style.card}>
          <View style={style.header}>
            <Text style={style.textHeader}>Consulta - 14 de janeiro, 2024</Text>
          </View>

          <View style={style.caixa}>
            <Text style={style.caixaTitle}>Resultado </Text>
            <Text style={style.caixaText}>Dor na Garganta</Text>
          </View>

          <View style={style.caixa}>
            <Text style={style.caixaTitle}>Diagnóstico: </Text>
            <Text style={style.caixaText}>Resfriado</Text>
          </View>

          <View style={style.caixa}>
            <Text style={style.caixaTitle}>Conduta: </Text>
            <Text style={style.caixaText}>
              Prescrição de medicamentos, solicitação de exames complementares.
            </Text>
          </View>
        </View>
      )}

      {activeTab === "opcao2" && (
       <View style={style.card}>
          
          <View style={style.header}>
            <Text style={style.textHeader}>Hemograma Completo</Text>
            <Text style={style.dataText}>15 de janeiro, 2024</Text>
          </View>

          <View style={style.caixa}>
            <Text style={style.sectionTitle}>Resultado</Text>
            <Text style={style.sectionContent}>
              <Text>Hemoglobina:</Text> 13.5 g/dL{"\n"}
              <Text>Hematócrito:</Text> 40%{"\n"}
              <Text>Leucócitos:</Text> 7.500/mm³
            </Text>
          </View>

          
          <View style={style.caixa}>
            <Text style={style.sectionTitle}>Interpretação</Text>
            <Text style={style.sectionContent}>
              Exame dentro dos parâmetros normais
            </Text>
          </View>

         
          <View style={style.buttonContainer}>
            <TouchableOpacity style={style.button}>
              <Ionicons name="eye-outline" size={18} color="white" />
              <Text style={style.buttonText}>Visualizar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button}>
              <MaterialCommunityIcons name="download-outline" size={18} color="white" />
              <Text style={style.buttonText}>Baixar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {activeTab === "opcao3" && (
        <View style={style.card}>
       <View style={style.cardMedicTittle}>
      <Text style={style.textHeader}>Atenolol</Text>

      <View style={style.caixaActive}>
        <Text style={style.caixaActiveText}>Ativo</Text>
      </View>
    </View>

    
    <View style={style.caixa}>
      <Text style={style.sectionTitle}>Dosagem:</Text>
      <Text style={style.sectionContent}>50mg</Text>
    </View>

    <View style={style.caixa}>
      <Text style={style.sectionTitle}>Frequência:</Text>
      <Text style={style.sectionContent}>1x ao dia</Text>
    </View>

    <View style={style.caixa}>
      <Text style={style.sectionTitle}>Duração:</Text>
      <Text style={style.sectionContent}>30 dias</Text>
    </View>

    <View style={style.caixaInstru}>
      <Text style={style.sectionTitleInfo}>
        Instruções:
      </Text>
      <Text style={style.sectionContent}>Tomar pela manhã em jejum</Text>
    </View>

    
    <View style={style.buttonContainer}>
      <TouchableOpacity style={style.button}>
        <Ionicons name="eye-outline" size={18} color="white" />
        <Text style={style.buttonText}>Visualizar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button}>
        <MaterialCommunityIcons name="download-outline" size={18} color="white" />
        <Text style={style.buttonText}>Baixar</Text>
      </TouchableOpacity>
    </View>
  </View>
      )}
    </>
  );
}
