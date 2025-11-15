import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {menuStyles} from "../../src/styles/menu";
import  { BounceInUp,FadeOut } from 'react-native-reanimated';
import Reanimated from "react-native-reanimated";
type CardTypes = {
  title: string;
  descricao: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};

export default function MenuCard({
  icon,
  title,
  descricao,
  onPress,
}: CardTypes) {
  return (
    <Reanimated.View style={menuStyles.buttonCards} entering={BounceInUp.duration(400)} exiting={FadeOut.duration(500)}>
      <TouchableOpacity style={menuStyles.cardButton} onPress={onPress}>
        <View style={menuStyles.iconContainer}>
          <Ionicons name={icon} size={40} color={"white"}/>
        </View>
        <Text style={menuStyles.textCards}>{title}</Text>
        <Text style={menuStyles.descricaoCards}>{descricao}</Text>
      </TouchableOpacity>
    </Reanimated.View>
  );
}
