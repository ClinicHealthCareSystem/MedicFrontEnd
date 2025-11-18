import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalStyles, { colors, shadows } from "../styles/globalStyles"
export const cardCountsStyles = StyleSheet.create({
  cardCounts: {
    ...globalStyles.cardBase,
    marginVertical: 20,
    marginHorizontal: 8,
    width: 130,
    height: 120,
    ...shadows.strong,
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