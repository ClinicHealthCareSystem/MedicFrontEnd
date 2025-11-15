import { View,Text } from "react-native";
import {cardPerfilStyles} from "../stylesComponents/cardperfil";
import { Ionicons } from "@expo/vector-icons";
export  default function CardPerfil(){
    return(
        <View style={cardPerfilStyles.cardPerfil}>
          <View style={cardPerfilStyles.avatarCaixa}>
            <Ionicons
              name="person-circle"
              style={cardPerfilStyles.avatar}
              size={100}
              color={"white"}
            />
          </View>
          <Text style={cardPerfilStyles.nome}>José</Text>
          <Text style={cardPerfilStyles.info}>Desde junho 2020</Text>

          <View style={cardPerfilStyles.statusAvatar}>
            <View style={cardPerfilStyles.planoStatus}>
              <Text style={cardPerfilStyles.planoStatusText}>Cardiologista</Text>
            </View>
            <View style={cardPerfilStyles.idSatus}>
              <Text style={cardPerfilStyles.idStatusText}>CRM: #2020612</Text>
            </View>
          </View>
        </View>
    );
}