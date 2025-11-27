import { View, ScrollView, Switch, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { getConfigStyles } from "../styles/config";
import HeaderHome from "../componentes/headerHome";
import TabsNavegation from "../componentes/tabsNavegation";
import { useTheme } from "../hooks/ThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Config() {
  const [FontSize, SetFontsize] = useState(false);
  const { theme, toggleTheme, colors } = useTheme();
  const [SilenceNotific, SetSilenceNotific] = useState(false);
  const configStyles = getConfigStyles(colors);
  const router = useRouter();

  const isDarkMode = theme === "dark";

  async function handleLogout() {
    try {
      await AsyncStorage.removeItem("token");
      router.replace("/");
    } catch (error) {
      throw new Error(`Error logging out, ${error}`);
    }
  }

  return (
    <View
      style={[configStyles.background, { backgroundColor: colors.background }]}
    >
      <HeaderHome
        mostrarBusca={false}
        mostrarVoltar={true}
        titulo="Configurações"
      />
      <ScrollView contentContainerStyle={configStyles.scrollArea}>
        <View style={configStyles.caixa}>
          <Text style={configStyles.texto}>Aumentar a Fonte</Text>
          <Switch
            value={FontSize}
            onValueChange={SetFontsize}
            thumbColor={FontSize ? colors.primary : colors.white}
            trackColor={{ false: "#ccc", true: colors.primary }}
          />
        </View>

        <View style={configStyles.caixa}>
          <Text style={configStyles.texto}>Modo Escuro</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            thumbColor={isDarkMode ? colors.primary : colors.white}
            trackColor={{ false: "#ccc", true: colors.primary }}
          />
        </View>

        <View style={configStyles.caixa}>
          <Text style={configStyles.texto}>Silenciar Notificação</Text>
          <Switch
            value={SilenceNotific}
            onValueChange={SetSilenceNotific}
            thumbColor={SilenceNotific ? colors.primary : colors.white}
            trackColor={{ false: "#ccc", true: colors.primary }}
          />
        </View>

        <View style={configStyles.caixa2}>
          <Text style={configStyles.textoSair}>Sair</Text>
          <TouchableOpacity onPress={() => handleLogout()}>
            <MaterialIcons name="logout" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TabsNavegation />
    </View>
  );
}
