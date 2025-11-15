import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalPagesStyles, { pageColors, pageShadows } from "../styles/globalStylesPages";

const { width } = Dimensions.get('window');
export const pacientesStyles = StyleSheet.create({
  background: globalPagesStyles.backgroundBase,
  filterIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 16,
  },
});