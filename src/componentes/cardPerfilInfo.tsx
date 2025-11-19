import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { getCardPerfilInfoStyles } from "../stylesComponents/cardPerfilInfo";
import { useTheme } from "../hooks/ThemeContext";

export default function CardPerfilInfo() {
  const { colors } = useTheme();
  const cardPerfilInfoStyles = getCardPerfilInfoStyles(colors);
  

  return (
    <View style={cardPerfilInfoStyles.cardInfo}>
      <View style={cardPerfilInfoStyles.cardInfoTittle}>
        <Text style={cardPerfilInfoStyles.tittleInfo}>Informações Pessoais</Text>
      </View>
      <Text style={cardPerfilInfoStyles.labelInfo}>Nome:</Text>
      <View style={cardPerfilInfoStyles.textInfo}>
        <TextInput
          style={cardPerfilInfoStyles.inputInfo}
          placeholder="José"
        />
      </View>

      <Text style={cardPerfilInfoStyles.labelInfo}>Email:</Text>
      <View style={cardPerfilInfoStyles.textInfo}>
        <TextInput
          style={cardPerfilInfoStyles.inputInfo}
          placeholder="Jose@gmail.com"
        />
      </View>
    </View>
  );
}