import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalPagesStyles, { pageColors, pageShadows } from "../styles/globalStylesPages";

const { width } = Dimensions.get('window');
export const configStyles = StyleSheet.create({
  background: globalPagesStyles.backgroundBase,
  scrollArea: globalPagesStyles.scrollArea,
  caixa: {
    ...globalPagesStyles.cardWhite,
    ...globalPagesStyles.rowBetween,
  },
  caixa2: {
    ...globalPagesStyles.cardWhite,
    ...globalPagesStyles.rowBetween,
    marginTop: 20,
  },
  texto: globalPagesStyles.textPrimary,
  textoSair: globalPagesStyles.dangerText,
});