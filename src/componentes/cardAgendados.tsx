import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../stylesComponents/cardAgendados";

interface Agendamento {
  id: string;
  nome: string;
  hora: string;
  status: "Retorno" | "Consulta";
  especialidade?: string;
}

const dados: Agendamento[] = [
  { id: "1", nome: "Maria Silva", hora: "09:00", status: "Retorno", especialidade: "Cardiologia" },
  { id: "2", nome: "José Santos", hora: "10:00", status: "Consulta", especialidade: "Clínico Geral" },
  { id: "3", nome: "Ana Costa", hora: "14:00", status: "Retorno", especialidade: "Dermatologia" },
];

export default function CardAgendados() {
  const handlePressItem = (item: Agendamento) => {
    console.log("Agendamento selecionado:", item);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Agenda de Hoje</Text>
        <Text style={styles.subtitle}>{dados.length} consulta(s)</Text>
      </View>

      {dados.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="calendar-outline" size={48} color="#ccc" />
          <Text style={styles.emptyText}>Nenhum agendamento para hoje</Text>
        </View>
      ) : (
        <View>
          {dados.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.item}
              onPress={() => handlePressItem(item)}
              activeOpacity={0.7}
            >
              <View style={styles.info}>
                <Text style={styles.nome}>{item.nome}</Text>
                {item.especialidade && (
                  <Text style={styles.especialidade}>{item.especialidade}</Text>
                )}
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
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}