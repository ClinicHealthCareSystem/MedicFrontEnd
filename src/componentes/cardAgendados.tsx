import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getCardAgendadoStyles } from "../stylesComponents/cardAgendados";
import { useTheme } from "../hooks/ThemeContext";

interface Agendamento {
  id: string;
  nome: string;
  hora: string;
  status: "Retorno" | "Consulta";
}

const dados: Agendamento[] = [
  { id: "1", nome: "Maria Silva", hora: "09:00", status: "Retorno" },
  { id: "2", nome: "José Santos", hora: "10:00", status: "Consulta" },
  { id: "3", nome: "Ana Costa", hora: "14:00", status: "Retorno" },
];

export default function CardAgendados() {
  const { colors } = useTheme();
  const cardAgendadoStyles = getCardAgendadoStyles(colors);

  return (
    <View style={cardAgendadoStyles.card}>
      <View style={cardAgendadoStyles.header}>
        <View style={cardAgendadoStyles.headerTop}>
          <Text style={cardAgendadoStyles.title}>Agenda de Hoje</Text>

          <TouchableOpacity>
            <Ionicons name="filter-outline" size={22} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={cardAgendadoStyles.subtitle}>
          {dados.length} consulta(s)
        </Text>
      </View>

      {dados.length === 0 ? (
        <View style={cardAgendadoStyles.emptyContainer}>
          <Ionicons name="calendar-outline" size={48} color="white" />
          <Text style={cardAgendadoStyles.emptyText}>
            Nenhum agendamento para hoje
          </Text>
        </View>
      ) : (
        <View>
          {dados.map((item) => (
            <View key={item.id} style={cardAgendadoStyles.item}>
              <View style={cardAgendadoStyles.info}>
                <Text style={cardAgendadoStyles.nome}>{item.nome}</Text>

                <View style={cardAgendadoStyles.horaContainer}>
                  <Ionicons
                    name="time-outline"
                    size={14}
                    color={colors.primary}
                  />
                  <Text style={cardAgendadoStyles.hora}> {item.hora}</Text>
                </View>
              </View>
              <View
                style={[
                  cardAgendadoStyles.statusContainer,
                  item.status === "Consulta"
                    ? cardAgendadoStyles.confirmado
                    : cardAgendadoStyles.agendado,
                ]}
              >
                <Text
                  style={[
                    cardAgendadoStyles.statusText,
                    item.status === "Consulta"
                      ? cardAgendadoStyles.statusTextConfirmado
                      : cardAgendadoStyles.statusTextAgendado,
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