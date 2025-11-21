import { StyleSheet } from "react-native";
import getGlobalStyles, { shadows } from "../styles/globalStyles";

export const getTabsNavegationDashStyles = (colors: any) => {
  const globalStyles = getGlobalStyles(colors);
  const customShadows = shadows(colors);

  return StyleSheet.create({
    tabsCaixa: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignSelf: "center",
      marginHorizontal: 20,
      marginVertical: 20,
      backgroundColor: colors.primary,
      width: "90%",
      padding: 5,
      ...customShadows.strong,
      borderRadius: 8,
    },

    tabButtonPerfil: {
      paddingVertical: 5,
      paddingHorizontal: 5,
      backgroundColor: colors.secondary,
      borderRadius: 8,
    },

    tabTextPerfil: globalStyles.textWhiteBold,
  });
};
