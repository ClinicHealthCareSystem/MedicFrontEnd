
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import getGlobalStyles, { shadows } from "../styles/globalStyles";

export const getCardDashboardStyles = (colors) => {
  const globalStyles = getGlobalStyles(colors);
  const customShadows = shadows(colors);
  return StyleSheet.create({
    card: {
      ...globalStyles.cardLarge,
      ...customShadows.strong,
    },
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
};