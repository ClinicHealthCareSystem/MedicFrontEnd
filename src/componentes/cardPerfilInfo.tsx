import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { getCardPerfilInfoStyles } from "../stylesComponents/cardPerfilInfo";
import { useTheme } from "../hooks/ThemeContext";

export default function CardPerfilInfo() {
  const { colors } = useTheme();
  const cardPerfilInfoStyles = getCardPerfilInfoStyles(colors);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <View style={cardPerfilInfoStyles.cardInfo}>
      <View style={cardPerfilInfoStyles.cardInfoTittle}>
        <Text style={cardPerfilInfoStyles.tittleInfo}>Informações Pessoais</Text>
        <TouchableOpacity
          style={cardPerfilInfoStyles.editButton}
          onPress={() => setIsEditing(!isEditing)}
        >
          <MaterialCommunityIcons
            name={isEditing ? "check" : "account-edit"}
            size={30}
            color={"white"}
          />
        </TouchableOpacity>
      </View>

      <Text style={cardPerfilInfoStyles.labelInfo}>Nome:</Text>
      <View style={cardPerfilInfoStyles.textInfo}>
        <TextInput
          style={cardPerfilInfoStyles.inputInfo}
          editable={isEditing}
          placeholder="José"
        />
      </View>

      <Text style={cardPerfilInfoStyles.labelInfo}>Email:</Text>
      <View style={cardPerfilInfoStyles.textInfo}>
        <TextInput
          style={cardPerfilInfoStyles.inputInfo}
          editable={isEditing}
          placeholder="Jose@gmail.com"
        />
      </View>

      <Text style={cardPerfilInfoStyles.labelInfo}>Telefone:</Text>
      <View style={cardPerfilInfoStyles.textInfo}>
        <TextInput
          style={cardPerfilInfoStyles.inputInfo}
          editable={isEditing}
          placeholder="(85) 9 9999-9999"
        />
      </View>

      <Text style={cardPerfilInfoStyles.labelInfo}>Data de Nascimento:</Text>
      <View style={cardPerfilInfoStyles.textInfo}>
        <TextInput
          style={cardPerfilInfoStyles.inputInfo}
          editable={isEditing}
          placeholder="01/01/2001"
        />
      </View>

      <Text style={cardPerfilInfoStyles.labelInfo}>Endereço:</Text>
      <View style={cardPerfilInfoStyles.textInfo}>
        <TextInput
          style={cardPerfilInfoStyles.inputInfo}
          editable={isEditing}
          placeholder="Rua A 10"
        />
      </View>
    </View>
  );
}