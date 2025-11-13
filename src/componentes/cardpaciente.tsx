import { View, ScrollView, Text,TouchableOpacity } from "react-native";
import styles from "../stylesComponents/cardpaciente";
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
}: CardTypesPaciente){
    return(
        <View style={styles.card}>
        <View style={styles.header}> 
            <View style={styles.avatarCaixa}>
            <Ionicons
              name="person-circle"
              style={styles.avatar}
              size={50}
              color={"white"}
            />
          </View>
        

        <View style={styles.info}>
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.detalhes}>{idade}</Text>
        </View>
        </View>
        <View style={styles.linhaInfo}>
            <Text style={styles.textInfo}>{diaConsulta}</Text>
        </View>
        <View style={styles.linhaInfo}>
            <Text style={styles.textInfo}>{telefone}</Text>
        </View>
        <View style={styles.linhaInfo}>
            <Text style={styles.textInfo}>{detalhes}</Text>
        </View>
            <View>
                <TouchableOpacity style={styles.buttonProntu} onPress={() => router.push("/dashboardPaciente")}> 
                    <Text style={styles.buttonProntuText}>Ver prontuario</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}