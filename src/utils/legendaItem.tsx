import React from "react";
import { View, Text } from "react-native";
import {agendaStyles} from "../styles/agenda";

interface LegendaItemProps {
  color: string;
  label: string;
}

export default function LegendaItem({ color, label }: LegendaItemProps) {
  return (
    <View style={agendaStyles.legendItem}>
      <View style={[agendaStyles.legendDot, { backgroundColor: color }]} />
      <Text style={agendaStyles.legendText}>{label}</Text>
    </View>
  );
}
