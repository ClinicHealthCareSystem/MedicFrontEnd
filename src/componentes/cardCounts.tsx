import { View, Text } from "react-native";
import { getCardCountsStyles } from "../stylesComponents/cardCounts";
import { useTheme } from "../hooks/ThemeContext";

type CardCountsProps = {
  titulo: string;
  valor: string | number;
};

export default function CardCounts({ titulo, valor }: CardCountsProps) {
  const { colors } = useTheme();
  const cardCountsStyles = getCardCountsStyles(colors);

  return (
    <View style={cardCountsStyles.cardCounts}>
      <View style={cardCountsStyles.caixaTitulo}>
        <Text style={cardCountsStyles.textTitulo}>{titulo}</Text>
      </View>
      <View style={cardCountsStyles.caixaNumber}>
        <Text style={cardCountsStyles.textNumber}>{valor}</Text>
      </View>
    </View>
  );
}