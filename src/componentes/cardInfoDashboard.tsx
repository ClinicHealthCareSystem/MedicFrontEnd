import { View, Text } from "react-native";

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
            <Text style={style.caixaTitle}>Queixa Principal: </Text>
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
    </>
  );
}
