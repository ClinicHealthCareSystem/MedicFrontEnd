import { View, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeaderHome from "../componentes/headerHome";
import TabsNavegation from "../componentes/tabsNavegation";
import { getPacientesStyles } from "../styles/pacientes";
import CardPaciente from "../componentes/cardpaciente";
import { useTheme } from "../hooks/ThemeContext";

type CardTypesPaciente = {
  nome: string;
  idade: string;
  telefone: string;
  diaConsulta: string;
  detalhes: string;
};

export default function Pacientes() {
  const { colors } = useTheme();
  const pacientesStyles = getPacientesStyles(colors);

  const card: CardTypesPaciente[] = [
    {
      nome: "José",
      idade: "40 anos",
      telefone: "(85) 9 99999999",
      diaConsulta: "15/08/2025",
      detalhes: "Resfriado",
    },
  ];

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
      <ScrollView>
        {card.map((item, index) => (
          <CardPaciente
            key={index}
            nome={item.nome}
            idade={item.idade}
            telefone={item.telefone}
            diaConsulta={item.diaConsulta}
            detalhes={item.detalhes}
          />
        ))}
        
      </ScrollView>
      <TabsNavegation/>
    </View>
  );
}
