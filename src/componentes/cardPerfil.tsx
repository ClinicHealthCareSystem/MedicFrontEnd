import { View,Text } from "react-native";
import styles from "../stylesComponents/cardperfil";
import { Ionicons } from "@expo/vector-icons";
export  default function CardPerfil(){
    return(
        <View style={styles.cardPerfil}>
          <View style={styles.avatarCaixa}>
            <Ionicons
              name="person-circle"
              style={styles.avatar}
              size={100}
              color={"white"}
            />
          </View>
          <Text style={styles.nome}>José</Text>
          <Text style={styles.info}>Desde junho 2020</Text>

          <View style={styles.statusAvatar}>
            <View style={styles.planoStatus}>
              <Text style={styles.planoStatusText}>Cardiologista</Text>
            </View>
            <View style={styles.idSatus}>
              <Text style={styles.idStatusText}>CRM: #2020612</Text>
            </View>
          </View>
        </View>
    );
}