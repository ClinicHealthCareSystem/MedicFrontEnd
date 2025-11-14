import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../stylesComponents/cardEscala";

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

export default function cardEscala() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Escala</Text>
      </View>

      <View>
        {dados.map((item) => (
          <View key={item.id} style={styles.item}>
            <View style={styles.iconContainer}>
              <Ionicons name={item.icone} size={24} color="#0D47AB" />
            </View>
            <View style={styles.info}>
              <Text style={styles.alerta}>{item.dia}</Text>
              <Text style={styles.alertaDescr}>{item.escala}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}