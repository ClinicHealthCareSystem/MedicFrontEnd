import React from "react";
import { View, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../stylesComponents/cardNotificacao";

interface Notificacao {
  id: string;
  alerta: string;
  alertaDescr: string;
  icone: keyof typeof Ionicons.glyphMap;
  backgroundColor: string;
}

const dados: Notificacao[] = [
  {
    id: "1",
    alerta: "Exames com resultados alterados",
    alertaDescr: "2 exame(s) necessitam de sua atenção",
    icone: "pulse-outline",
    backgroundColor: "white",
  },
  {
    id: "2",
    alerta: "Agenda de amanhã",
    alertaDescr: "Você tem 8 consultas agendadas para amanhã",
    icone: "calendar-outline",
    backgroundColor: "#E9F9F0",
  },
];

export default function CardNotificacao() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Alertas e Notificações</Text>
      </View>

      <FlatList<Notificacao>
        data={dados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.item, { backgroundColor: item.backgroundColor }]}> 
            <View style={styles.iconContainer}> 
              <Ionicons name={item.icone} size={24} color="#0D47AB" /> 
            </View> 
            <View style={styles.info}> 
              <Text style={styles.alerta}>{item.alerta}</Text> 
              <Text style={styles.alertaDescr}>{item.alertaDescr}</Text> 
            </View> 
          </View>
        )}
      />
    </View>
  );
}