import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import getGlobalStyles from "./globalStyles";

const { width } = Dimensions.get('window');

export const getPacientesStyles = (colors: any) => {
  const globalStyles = getGlobalStyles(colors);
  return StyleSheet.create({
    background: globalStyles.backgroundBase,
    filterIcon: {
      flexDirection: "row",
      justifyContent: "flex-end",
      paddingRight: 16,
    },
  });
};