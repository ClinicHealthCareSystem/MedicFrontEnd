import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getTabNavegationStyles } from "../stylesComponents/tabNavegation";
import { useTheme } from "../hooks/ThemeContext";
import { router } from "expo-router";

export default function TabsNavegation() {
  const { colors } = useTheme();
  const tabNavegationStyles = getTabNavegationStyles(colors);

  return (
    <View style={tabNavegationStyles.tabNavegation}>
      <TouchableOpacity style={tabNavegationStyles.tabButton}>
        <Ionicons name="home" size={26} color="#fff" />
        <Text style={tabNavegationStyles.tabText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tabNavegationStyles.tabButton}
        onPress={() => {
          router.push("/perfil");
        }}
      >
        <Ionicons name="person" size={26} color="#fff" />
        <Text style={tabNavegationStyles.tabText}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tabNavegationStyles.tabButton}
        onPress={() => {
          router.push("/config");
        }}
      >
        <Ionicons name="settings" size={26} color="#fff" />
        <Text style={tabNavegationStyles.tabText}>Config</Text>
      </TouchableOpacity>
    </View>
  );
}
