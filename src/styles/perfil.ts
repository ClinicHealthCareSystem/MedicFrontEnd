import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import getGlobalStyles from "./globalStyles";

const { width } = Dimensions.get('window');

export const getPerfilStyles = (colors: any) => {
  const globalStyles = getGlobalStyles(colors);
  return StyleSheet.create({
    background: globalStyles.backgroundBase,
    margem: {
      marginBottom: 15,
      marginTop: 15,
    },
  });
};
