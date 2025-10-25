import { View, Text, FlatList } from "react-native";
import styles from "../stylesComponents/cardAgendados";

interface Agendamento {
  nome: string;
  hora: string;
  status: "Retorno" | "Consulta"; 
}

const dados: Agendamento[] = [
  { nome: "Maria", hora: "09:00", status: "Retorno" },
  { nome: "José", hora: "10:00", status: "Consulta" },
  { nome: "Ana", hora: "14:00", status: "Retorno" },
];

export default function CardAgendados() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Agenda de Hoje</Text>
      </View>

      <FlatList<Agendamento>
        data={dados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.hora}>{item.hora}</Text>
            </View>
            <View
              style={[styles.statusContainer, item.status === "Consulta"  ? styles.confirmado 
                  : styles.agendado,
              ]}
            >
              <Text
                style={[ styles.statusText, item.status === "Consulta" ? styles.statusTextConfirmado
                    : styles.statusTextAgendado,
                ]}
              >
                {item.status}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}