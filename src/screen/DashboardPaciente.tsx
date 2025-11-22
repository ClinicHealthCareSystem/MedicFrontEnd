import { View, ScrollView } from "react-native";
import { useState } from "react";
import { getPacientesStyles } from "../styles/pacientes";
import CardDashboard from "../componentes/cardashboard";
import HeaderHome from "../componentes/headerHome";
import TabsNavegationDash from "../componentes/tabsNavegationDash";
import CardInfoDashboard from "../componentes/cardInfoDashboard";
import { useTheme } from "../hooks/ThemeContext";
import { useLocalSearchParams } from "expo-router";

export default function DashboardPaciente() {
  const { colors } = useTheme();
  const pacientesStyles = getPacientesStyles(colors);
  const [activeTab, setActiveTab] = useState<"opcao1" | "opcao2" | "opcao3">(
    "opcao1"
  );
  const { id } = useLocalSearchParams()
  const userId = Array.isArray(id) ? id[0] : (id || "")

  return (
    <View style={pacientesStyles.background}>
      <HeaderHome
        titulo="Prontuario"
        mostrarBusca={false}
        mostrarVoltar={true}
      />
      <ScrollView>
        <CardDashboard />
        <TabsNavegationDash
          activeTab={activeTab}
          tabs={[
            { label: "Prontuario", value: "opcao1" },
            { label: "Exames", value: "opcao2" },
            { label: "Medicamentos", value: "opcao3" },
          ]}
          onPress={(value) =>
            setActiveTab(value as "opcao1" | "opcao2" | "opcao3")
          }
        />
        <CardInfoDashboard activeTab={activeTab} userId={userId} />
      </ScrollView>
    </View>
  );
}
