
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalStyles, { colors, shadows } from "../styles/globalStyles.ts";
export const cardDashboardStyles = StyleSheet.create({
  card: globalStyles.cardLarge,
  header: globalStyles.headerBase,
  textHeader: globalStyles.headerText,
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 15,
  },
  column: {
    flex: 1,
    gap: 15,
    paddingHorizontal: 4,
  },
  infoRow: {
    ...globalStyles.row,
    gap: 8,
    marginTop: 10,
  },
  textLabel: globalStyles.textLabel,
  textValue: globalStyles.textValue,
});