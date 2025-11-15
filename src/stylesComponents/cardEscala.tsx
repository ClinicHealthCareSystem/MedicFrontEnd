import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalStyles, { colors, shadows } from "../styles/globalStyles";
export const cardEscalaStyles = StyleSheet.create({
  card: {
    ...globalStyles.cardLarge,
    padding: 15,
  },
  header: {
    marginBottom: 10,
    paddingBottom: 4,
  },
  title: {
    ...globalStyles.headerText,
  },
  item: {
    ...globalStyles.itemBase,
  },
  iconContainer: {
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  alerta: {
    ...globalStyles.textPrimary,
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 3,
  },
  alertaDescr: {
    color: colors.primary,
    fontSize: 13,
  },
});
