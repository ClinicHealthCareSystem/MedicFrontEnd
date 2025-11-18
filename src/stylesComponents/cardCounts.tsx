import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import getGlobalStyles, { shadows } from "../styles/globalStyles";

export const getCardCountsStyles = (colors) => {
  const globalStyles = getGlobalStyles(colors);
  const customShadows = shadows(colors);
  return StyleSheet.create({
    cardCounts: {
      ...globalStyles.cardBase,
      marginVertical: 20,
      marginHorizontal: 8,
      width: 130,
      height: 120,
      ...customShadows.strong,
      justifyContent: "center",
    },
    headerCard: {
      alignItems: "flex-start",
    },
    caixaTitulo: {
      marginTop: 8,
    },
    textTitulo: {
      ...globalStyles.textWhite,
      fontWeight: "600",
      fontSize: 13,
      textAlign: "center",
    },
    caixaNumber: {
      marginVertical: 10,
    },
    textNumber: {
      ...globalStyles.textWhite,
      fontSize: 32,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
};