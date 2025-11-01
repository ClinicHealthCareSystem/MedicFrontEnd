import { View, ScrollView } from "react-native";
import styles from "../styles/menu";

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

  const card: Botao[] = [
    {
      id: 1,
      title: "PACIENTES",
      descricao: "Gerencie e visualize informações dos pacientes",
      icon: "people-outline",
    },
    {
      id: 2,
      title: "PRONTUÁRIOS MÉDICOS",
      descricao: "Visuazie os Prontuários",
      icon: "document-text-outline",
    },
    {
      id: 3,
      title: "AGENDA MÉDICA",
      descricao: "Gerenciamento de consultas e compromissos",
      icon: "calendar-outline",
    },
    {
      id: 4,
      title: "CLASSIFICAÇÃO CID-10",
      descricao: "Atestados e Relatórios Médicos",
      icon: "clipboard-outline",
    },
  ];

  const handleNavigation = (title: string) => {
    switch (title) {
      case "PACIENTES":
        router.push("/pacientes");
        break;
      case "PRONTUÁRIOS MÉDICOS":
        router.push("/dashboardMedico");
        break;
      case "AGENDA MÉDICA":
        router.push("/agenda");
        break;
      case "CLASSIFICAÇÃO CID-10":
        router.push("/CID10");
        break;
    }
  };

  return (
    <View style={styles.background}>
      <HeaderHome mostrarBusca={true} />
      <ScrollView style={styles.scrollCards}>
        <View style={styles.cards}>
          {card.map((item) => (
            <MenuCard
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
