import { View, Text } from "react-native";
import style from "../stylesComponents/cardCounts";

type CardCountsProps = {
  titulo: string;
  valor: string | number;
};

export default function CardCounts({ titulo, valor}: CardCountsProps) {
  return (
    <View style={style.cardCounts}>
      <View style={style.caixaTitulo}>
        <Text style={style.textTitulo}>{titulo}</Text>
      </View>
      <View style={style.caixaNumber}>
        <Text style={style.textNumber}>{valor}</Text>
      </View>
    </View>
  );
}