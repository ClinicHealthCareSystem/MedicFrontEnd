import React from "react";
import { View, Text } from "react-native";
import { getAgendaStyles } from "../styles/agenda";
import { useTheme } from "../hooks/ThemeContext";

interface LegendaItemProps {
  color: string;
  label: string;
}

export default function LegendaItem({ color, label }: LegendaItemProps) {
  const { colors } = useTheme();
  const agendaStyles = getAgendaStyles(colors);

  return (
    <View style={agendaStyles.legendItem}>
      <View style={[agendaStyles.legendDot, { backgroundColor: color }]} />
      <Text style={agendaStyles.legendText}>{label}</Text>
    </View>
  );
}
