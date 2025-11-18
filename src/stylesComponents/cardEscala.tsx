import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import getGlobalStyles, { shadows } from "../styles/globalStyles";

export const getCardEscalaStyles = (colors) => {
  const globalStyles = getGlobalStyles(colors);
  const customShadows = shadows(colors);
  return StyleSheet.create({
    card: {
      ...globalStyles.cardLarge,
      padding: 15,
      ...customShadows.strong,
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
};
