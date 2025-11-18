import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalStyles from "./globalStyles";

const { width } = Dimensions.get('window');
export const pacientesStyles = StyleSheet.create({
  background: globalStyles.backgroundBase,
  filterIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 16,
  },
});