import React from "react";
import { View } from "react-native";
import {agendaStyles} from "../styles/agenda";
import LegendItem from "../utils/legendaItem";

export default function Legenda() {
  return (
    <View style={agendaStyles.legend}>
      <LegendItem color="#2196F3" label="Consulta" />
      <LegendItem color="#4CAF50" label="Exame" />
      <LegendItem color="#FFA500" label="Retorno" />
    </View>
  );
}
