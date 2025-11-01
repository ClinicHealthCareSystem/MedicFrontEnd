import { View, ScrollView, Text,TouchableOpacity } from "react-native";
import styles from "../stylesComponents/cardpaciente";
import { router } from "expo-router";

type CardTypesPaciente = {
  nome: string;
  detalhes: string;
  telefone: string;
  
  
};

export default function CardPaciente({
  nome,
  detalhes,
  telefone,
}: CardTypesPaciente){
    return(
        <View style={styles.card}>
        <View style={styles.header}> 
            <View  style={styles.avatar}>
                <Text style={styles.avatarText}>
                    
                </Text>
            </View>
        

        <View style={styles.info}>
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.detalhes}>{detalhes}</Text>
            
        </View>
        </View>

        <View style={styles.linhaInfo}>
            <Text style={styles.textInfo}>{telefone}</Text>
        </View>
            <View>
                <TouchableOpacity style={styles.buttonProntu} onPress={() => router.push("/dashboardPaciente")}> 
                    <Text style={styles.buttonProntuText}>Ver prontuario</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}