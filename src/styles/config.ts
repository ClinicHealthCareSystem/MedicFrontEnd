import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import getGlobalStyles from "./globalStyles";

const { width } = Dimensions.get('window');

export const getConfigStyles = (colors) => {
  const globalStyles = getGlobalStyles(colors);
  return StyleSheet.create({
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
};