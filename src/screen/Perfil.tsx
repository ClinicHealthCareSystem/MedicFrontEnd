import { Text, View, ScrollView } from "react-native";
import HeaderHome from "../componentes/headerHome";
import TabsNavegation from "../componentes/tabsNavegation";
import { Ionicons } from "@expo/vector-icons";
import { getPerfilStyles } from "../styles/perfil";
import CardPerfil from "../componentes/cardPerfil";
import CardPerfilInfo from "../componentes/cardPerfilInfo";
import { useState } from "react";
import { useTheme } from "../hooks/ThemeContext";

export default function Perfil() {
  const { colors } = useTheme();
  const perfilStyles = getPerfilStyles(colors);

  return (
    <View style={perfilStyles.background}>
      <HeaderHome titulo="Perfil" mostrarVoltar={true} mostrarBusca={false} />

      <ScrollView>
        <CardPerfil />
        <View style={perfilStyles.margem}></View>
        <CardPerfilInfo />
      </ScrollView>
    </View>
  );
}