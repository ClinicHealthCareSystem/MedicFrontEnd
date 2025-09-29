import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import tabNavegation from "../../stylesComponents/tabNavegation";





export default function TabsNavegation() {
  return (
    <View style={tabNavegation.tabNavegation}>
      <TouchableOpacity
        style={tabNavegation.tabButton}
        
      >
        <Ionicons name="home" size={26} color="#fff" />
        <Text style={tabNavegation.tabText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tabNavegation.tabButton}
      >
        <Ionicons name="person" size={26} color="#fff" />
        <Text style={tabNavegation.tabText}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={tabNavegation.tabButton}>
        <Ionicons name="settings" size={26} color="#fff" />
        <Text style={tabNavegation.tabText}>Config</Text>
      </TouchableOpacity>
    </View>
  );
}
