import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../stylesComponents/cardAgendados";

interface Agendamento {
  id: string;
  nome: string;
  hora: string;
  status: "Retorno" | "Consulta";
}

const dados: Agendamento[] = [
  { id: "1", nome: "Maria Silva", hora: "09:00", status: "Retorno"},
  { id: "2", nome: "José Santos", hora: "10:00", status: "Consulta"},
  { id: "3", nome: "Ana Costa", hora: "14:00", status: "Retorno"},
];

export default function CardAgendados() {

  return (
    <View style={styles.card}>
      <View style={styles.header}>
      <View style={styles.headerTop}>
    <Text style={styles.title}>Agenda de Hoje</Text>

    <TouchableOpacity>
      <Ionicons name="filter-outline" size={22} color="white" />
    </TouchableOpacity>
  </View>
  <Text style={styles.subtitle}>{dados.length} consulta(s)</Text>
</View>

      {dados.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="calendar-outline" size={48} color="white" />
          <Text style={styles.emptyText}>Nenhum agendamento para hoje</Text>
        </View>
      ) : (
        <View>
          {dados.map((item) => (
            <View
              key={item.id}
              style={styles.item}
              
            >
              <View style={styles.info}>
                <Text style={styles.nome}>{item.nome}</Text>
                
                <View style={styles.horaContainer}>
                  <Ionicons name="time-outline" size={14} color="#0D47AB" />
                  <Text style={styles.hora}> {item.hora}</Text>
                </View>
              </View>
              <View
                style={[
                  styles.statusContainer,
                  item.status === "Consulta" ? styles.confirmado : styles.agendado,
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    item.status === "Consulta"
                      ? styles.statusTextConfirmado
                      : styles.statusTextAgendado,
                  ]}
                >
                  {item.status}
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}