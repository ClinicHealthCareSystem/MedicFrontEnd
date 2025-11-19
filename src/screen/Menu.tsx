import { View, ScrollView } from "react-native";
import { getMenuStyles } from "../styles/menu";
import { useTheme } from "../hooks/ThemeContext";

import { Ionicons } from "@expo/vector-icons";
import TabsNavegation from "../componentes/tabsNavegation";
import HeaderHome from "../componentes/headerHome";
import MenuCard from "../componentes/menuCard";
import { useRouter } from "expo-router";

type Botao = {
  id: number;
  title: string;
  descricao: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};

export default function Menu() {
  const router = useRouter();
  const { colors } = useTheme();
  const menuStyles = getMenuStyles(colors);

  const card: Botao[] = [
    {
      id: 1,
      title: "PACIENTES",
      descricao: "Gerencie seus pacientes",
      icon: "people-outline",
    },
    {
      id: 2,
      title: "DASHBOARD",
      descricao: "Informações",
      icon: "document-text-outline",
    },
    {
      id: 3,
      title: "AGENDA MÉDICA",
      descricao: "Gerencia sua agenda",
      icon: "calendar-outline",
    },
    {
      id: 4,
      title: "CID-10",
      descricao: "Consultas de Doenças",
      icon: "clipboard-outline",
    },
  ];

  const handleNavigation = (title: string) => {
    switch (title) {
      case "PACIENTES":
        router.push("/pacientes");
        break;
      case "DASHBOARD":
        router.push("/dashboardMedico");
        break;
      case "AGENDA MÉDICA":
        router.push("/agenda");
        break;
      case "CID-10":
        router.push("/CID10");
        break;
    }
  };

  return (
    <View style={menuStyles.background}>
      <HeaderHome mostrarBusca={true} />
      <ScrollView style={menuStyles.scrollCards}>
        <View style={menuStyles.cards}>
          {card.map((item) => (
            <MenuCard
              key={item.id}
              title={item.title}
              descricao={item.descricao}
              icon={item.icon}
              onPress={() => handleNavigation(item.title)}
            />
          ))}
        </View>
      </ScrollView>
      <TabsNavegation />
    </View>
  );
}
