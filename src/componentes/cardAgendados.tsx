import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getCardAgendadoStyles } from "../stylesComponents/cardAgendados";
import { useTheme } from "../hooks/ThemeContext";
import { useFetchScheduling } from "../hooks/useFetchScheduling";

interface Scheduling {
  id: string;
  type: "consulta" | "exame";
  unit: string;
  serviceModel: string;
  serviceDate: string;
  serviceTime: string;
  medicName?: string;
  service?: string;
  exame?: string;
  userName?: string;
}

export default function CardAgendados() {
  const { colors } = useTheme();
  const cardAgendadoStyles = getCardAgendadoStyles(colors);

  const { schedulings, loading } = useFetchScheduling();

  if (loading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

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
          {schedulings.length} agendamento(s)
        </Text>
      </View>

      {schedulings.length === 0 ? (
        <View style={cardAgendadoStyles.emptyContainer}>
          <Ionicons name="calendar-outline" size={48} color="white" />
          <Text style={cardAgendadoStyles.emptyText}>
            Nenhum agendamento para hoje
          </Text>
        </View>
      ) : (
        <View>
          {schedulings.map((item: Scheduling, index) => (
            <View key={item.id} style={cardAgendadoStyles.item}>
              <View style={cardAgendadoStyles.info}>
                <Text style={cardAgendadoStyles.nome}>
                  {item.userName}
                </Text>

                <View style={cardAgendadoStyles.horaContainer}>
                  <Ionicons
                    name="time-outline"
                    size={14}
                    color={colors.primary}
                  />
                  <Text style={cardAgendadoStyles.hora}>
                    {" "}
                    {item.serviceTime}{" "}
                  </Text>
                </View>

                <Text style={cardAgendadoStyles.tipo}>
                  Tipo: {item.type === "consulta" ? "Consulta" : "Exame"}
                </Text>

                {item.type === "exame" && (
                  <Text style={cardAgendadoStyles.detalhe}>{item.exame}</Text>
                )}
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
