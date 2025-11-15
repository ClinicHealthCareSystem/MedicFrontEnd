import { View, ScrollView, Switch, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {configStyles} from "../styles/config";
import HeaderHome from "../componentes/headerHome";
import TabsNavegation from "../componentes/tabsNavegation";

export default function Config() {
  const [FontSize, SetFontsize] = useState(false);
  const [DarkMode, SetDarkMode] = useState(false);
  const [SilenceNotific, SetSilenceNotific] = useState(false);

  return (
    <View style={configStyles.background}>
      <HeaderHome  mostrarBusca={false} mostrarVoltar={true} titulo="Configurações"/>
      <ScrollView contentContainerStyle={configStyles.scrollArea}>
        <View style={configStyles.caixa}>
          <Text style={configStyles.texto}>Aumentar a Fonte</Text>
          <Switch
            value={FontSize}
            onValueChange={SetFontsize}
            thumbColor={FontSize ? "#0D47AB" : "white"}
            trackColor={{ false: "#ccc", true: "#0D47AB" }}
          />
        </View>

        <View style={configStyles.caixa}>
          <Text style={configStyles.texto}>Modo Escuro</Text>
          <Switch
            value={DarkMode}
            onValueChange={SetDarkMode}
            thumbColor={DarkMode ? "#0D47AB" : "white"}
            trackColor={{ false: "#ccc", true: "#0D47AB" }}
          />
        </View>

        <View style={configStyles.caixa}>
          <Text style={configStyles.texto}>Silenciar Notificação</Text>
          <Switch
            value={SilenceNotific}
            onValueChange={SetSilenceNotific}
            thumbColor={SilenceNotific ? "#0D47AB" : "white"}
            trackColor={{ false: "#ccc", true: "#0D47AB" }}
          />
        </View>

        <View style={configStyles.caixa2}>
          <Text style={configStyles.textoSair}>Sair</Text>
          <TouchableOpacity>
            <MaterialIcons name="logout" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TabsNavegation />
    </View>
  );
}
