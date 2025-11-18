import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalStyles, { colors, shadows } from "../styles/globalStyles.ts";
export const tabsNavegationDashStyles = StyleSheet.create({
  tabsCaixa: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: colors.primary,
    width: "90%",
    padding: 5,
    ...shadows.default,
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