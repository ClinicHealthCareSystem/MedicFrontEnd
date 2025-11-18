import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalStyles from "./globalStyles";

const { width } = Dimensions.get('window');
export const perfilStyles = StyleSheet.create({
  background: globalStyles.backgroundBase,
  margem: {
    marginBottom: 15,
    marginTop: 15,
  },
});
