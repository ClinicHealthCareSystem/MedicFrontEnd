import { View, FlatList, RefreshControl } from "react-native";
import { useState, useCallback } from "react";
import HeaderHome from "../componentes/headerHome";
import styles from "../styles/pacientes";
import CardCounts from "../componentes/cardCounts";
import CardAgendados from "../componentes/cardAgendados";
import CardEscala from "../componentes/cardEscala";
import HorizontalScroll from "../componentes/horizontalScroll";

export default function DashboardMedico() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  
  const cardsData = [
    { id: "1", titulo: "Pacientes Hoje", valor: "0", icone: "people" as const },
    { id: "2", titulo: "Total de Pacientes", valor: "3", icone: "person-add" as const },
    { id: "3", titulo: "Consultas no Mês", valor: "47", icone: "calendar" as const },
    { id: "4", titulo: "Exames Pendentes", valor: "2", icone: "flask" as const },
  ];

  
  const renderItem = ({ item }: { item: string }) => {
    switch (item) {
      case "horizontalCards":
        return <HorizontalScroll cards={cardsData} />;
      case "agendados":
        return <CardAgendados />;
      case "notificacoes":
        return <CardEscala />;
      default:
        return null;
    }
  };

  
  const sections = ["horizontalCards", "agendados", "notificacoes"];

  return (
    <View style={styles.background}>
      <HeaderHome titulo="Dashboard" mostrarBusca={false} mostrarVoltar={true} />
      
      <FlatList
        data={sections}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}