import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/agenda";

interface LegendaItemProps {
  color: string;
  label: string;
}

export default function LegendaItem({ color, label }: LegendaItemProps) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendDot, { backgroundColor: color }]} />
      <Text style={styles.legendText}>{label}</Text>
    </View>
  );
}
