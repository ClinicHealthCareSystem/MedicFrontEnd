import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getCardEscalaStyles } from "../stylesComponents/cardEscala";
import { useTheme } from "../hooks/ThemeContext";

interface Escala {
  id: string;
  dia: string;
  escala: string;
  icone: keyof typeof Ionicons.glyphMap;
}

const dados: Escala[] = [
  {
    id: "1",
    dia: "14/08/2025",
    escala: "8:00 - 16:00",
    icone: "calendar-outline",
  },
  {
    id: "2",
    dia: "17/08/2025",
    escala: "plantão",
    icone: "calendar-outline",
  },
];

export default function CardEscala() {
  const { colors } = useTheme();
  const cardEscalaStyles = getCardEscalaStyles(colors);

  return (
    <View style={cardEscalaStyles.card}>
      <View style={cardEscalaStyles.header}>
        <Text style={cardEscalaStyles.title}>Escala</Text>
      </View>

      <View>
        {dados.map((item) => (
          <View key={item.id} style={cardEscalaStyles.item}>
            <View style={cardEscalaStyles.iconContainer}>
              <Ionicons name={item.icone} size={24} color={colors.primary} />
            </View>
            <View style={cardEscalaStyles.info}>
              <Text style={cardEscalaStyles.alerta}>{item.dia}</Text>
              <Text style={cardEscalaStyles.alertaDescr}>{item.escala}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}