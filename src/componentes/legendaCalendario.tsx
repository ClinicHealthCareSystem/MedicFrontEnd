import React from "react";
import { View } from "react-native";
import { getAgendaStyles } from "../styles/agenda";
import LegendItem from "../utils/legendaItem";
import { useTheme } from "../hooks/ThemeContext";

export default function Legenda() {
  const { colors } = useTheme();
  const agendaStyles = getAgendaStyles(colors);

  return (
    <View style={agendaStyles.legend}>
      <LegendItem color="#2196F3" label="Consulta" />
      <LegendItem color="#4CAF50" label="Exame" />
      <LegendItem color="#FFA500" label="Retorno" />
    </View>
  );
}
