import React from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getHeadHomeStyles } from "../stylesComponents/headHome";
import { useTheme } from "../hooks/ThemeContext";
import { router } from "expo-router";

export default function HeaderHome({
  titulo = "Saúde Mania",
  subTitulo = "",
  mostrarBusca = true,
  mostrarVoltar = false,
}) {
  const { colors } = useTheme();
  const headHomeStyles = getHeadHomeStyles(colors);

  return (
    <View style={headHomeStyles.headerView}>
      <View style={headHomeStyles.headerContent}>
        {mostrarVoltar ? (
          <TouchableOpacity
            onPress={() => router.back()}
            style={headHomeStyles.headerBackButton}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 24 }} />
        )}

        <Text style={headHomeStyles.headerTitle}>{titulo}</Text>

        <TouchableOpacity style={headHomeStyles.headerRight}>
          <Ionicons name="notifications" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {mostrarBusca ? (
        <View>
          <Ionicons
            name="search"
            size={20}
            color={colors.secondary}
            style={{ top: 32, width: 20, marginLeft: 5 }}
          />
          <TextInput
            style={headHomeStyles.search_bar}
            placeholder="O que você está procurando?"
          />
        </View>
      ) : (
        subTitulo && (
          <View style={headHomeStyles.headerInfo}>
            <Text style={headHomeStyles.headerInfoText}>{subTitulo}</Text>
          </View>
        )
      )}
    </View>
  );
}
