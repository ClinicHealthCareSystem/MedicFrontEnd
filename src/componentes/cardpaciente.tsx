import { View, ScrollView, Text,TouchableOpacity } from "react-native";
import {cardPacienteStyles} from "../stylesComponents/cardpaciente";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type CardTypesPaciente = {
  nome: string;
  idade: string;
  telefone: string;
  diaConsulta: string;
  detalhes: string;

};

export default function CardPaciente({
  nome,
  idade,
  telefone,
  diaConsulta,
  detalhes,
}: CardTypesPaciente) {
  return (
    <View style={cardPacienteStyles.card}>

      
      <View style={cardPacienteStyles.header}>
        <View style={cardPacienteStyles.avatarCaixa}>
          <Ionicons
            name="person-circle"
            style={cardPacienteStyles.avatar}
            size={55}
            color={"white"}
          />
        </View>

        <View style={cardPacienteStyles.info}>
          <Text style={cardPacienteStyles.nome}>{nome}</Text>
          <Text style={cardPacienteStyles.detalhes}>{idade}</Text>
        </View>
      </View>

      <View style={cardPacienteStyles.infosCaixa}>
        <View style={cardPacienteStyles.linhaInfo}>
          <Ionicons name="call" size={14} color="white" />
          <Text style={cardPacienteStyles.textInfo}>{telefone}</Text>
        </View>

        <View style={cardPacienteStyles.linhaInfo}>
          <Ionicons name="calendar" size={14} color="white" />
          <Text style={cardPacienteStyles.textInfo}>Consulta: {diaConsulta}</Text>
        </View>

        {detalhes ? (
          <View style={cardPacienteStyles.linhaInfo}>
            <Ionicons name="document-text" size={14} color="white" />
            <Text style={cardPacienteStyles.textInfo}>{detalhes}</Text>
          </View>
        ) : null}
      </View>
      <TouchableOpacity
        style={cardPacienteStyles.buttonProntu}
        onPress={() => router.push("/dashboardPaciente")}
      >
        <Text style={cardPacienteStyles.buttonProntuText}>Ver prontuário</Text>
      </TouchableOpacity>

    </View>
  );
}
