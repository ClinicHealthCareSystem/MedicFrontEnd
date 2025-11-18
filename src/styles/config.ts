import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalStyles from "./globalStyles";

const { width } = Dimensions.get('window');
export const configStyles = StyleSheet.create({
  background: globalStyles.backgroundBase,
  scrollArea: globalStyles.scrollArea,
  caixa: {
    ...globalStyles.cardWhite,
    ...globalStyles.rowBetween,
  },
  caixa2: {
    ...globalStyles.cardWhite,
    ...globalStyles.rowBetween,
    marginTop: 20,
  },
  texto: globalStyles.textPrimary,
  textoSair: globalStyles.dangerText,
});