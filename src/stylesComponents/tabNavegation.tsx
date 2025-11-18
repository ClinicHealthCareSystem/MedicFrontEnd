import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalStyles, { colors, shadows } from "../styles/globalStyles.ts";
export const tabNavegationStyles = StyleSheet.create({
  tabNavegation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 55,
    borderRadius: 2,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: colors.primary,
    ...shadows.strong,
    borderTopWidth: 1,
    borderColor: colors.white,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    color: colors.white,
  },
  tabText: {
    color: colors.white,
  },
});
