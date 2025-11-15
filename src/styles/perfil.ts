import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalPagesStyles, { pageColors, pageShadows } from "../styles/globalStylesPages";

const { width } = Dimensions.get('window');
export const perfilStyles = StyleSheet.create({
  background: globalPagesStyles.backgroundBase,
  margem: {
    marginBottom: 15,
    marginTop: 15,
  },
});
