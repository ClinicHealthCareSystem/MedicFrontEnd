import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeaderHome from "../componentes/headerHome";
import TabsNavegation from "../componentes/tabsNavegation";
import { getPacientesStyles } from "../styles/pacientes";
import CardPaciente from "../componentes/cardpaciente";
import { useTheme } from "../hooks/ThemeContext";
import { usePacientes } from "../hooks/usePacientes";
import { formatDateTime, maskPhone } from "../utils/userValidations";

export default function Pacientes() {
  const { colors } = useTheme();
  const pacientesStyles = getPacientesStyles(colors);

  const { pacientes, error, loading } = usePacientes();

  return (
    <View style={pacientesStyles.background}>
      <HeaderHome
        mostrarBusca={false}
        titulo="Pacientes"
        subTitulo="Visualize seus Pacientes"
        mostrarVoltar={true}
      />

      <View style={pacientesStyles.filterIcon}>
        <TouchableOpacity>
          <Ionicons name="filter-outline" size={30} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {loading && (
        <View style={{ padding: 20 }}>
          <Text>Carregando...</Text>
        </View>
      )}

      {error && (
        <View style={{ padding: 20 }}>
          <Text>{error}</Text>
        </View>
      )}

      <ScrollView>
        {pacientes.map((item) => (
          <CardPaciente
            id={item.id}
            nome={item.name}
            idade={item.age}
            telefone={item.phone ? maskPhone(item.phone) : "-"}
            diaConsulta={
              item.appointments ? formatDateTime(item.appointments) : "-"
            }
            detalhes={item.conditions ? item.conditions : "-"}
          />
        ))}
      </ScrollView>

      <TabsNavegation />
    </View>
  );
}
