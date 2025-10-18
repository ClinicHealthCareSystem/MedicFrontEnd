import { View, Text } from "react-native";
import style from "../stylesComponents/cardCounts";
export default function CardCounts(){
    return(
        <View style={style.cardCounts}>
            <View style={style.caixaTitulo}>
                <Text style={style.textTitulo}>Pacientes Hoje</Text>
            </View>

            <View style={style.caixaNumber}>
                <Text style={style.textNumber}>10</Text>
            </View>
        </View>
    )
};