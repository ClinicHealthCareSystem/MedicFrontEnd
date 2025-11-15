import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalPagesStyles, { pageColors, pageShadows } from "../styles/globalStylesPages";

const { width } = Dimensions.get('window');
export const menuStyles = StyleSheet.create({
  background: globalPagesStyles.backgroundBase,
  scrollCards: {
    marginTop: 10,
  },
  cards: globalPagesStyles.menuCardContainer,
  buttonCards: globalPagesStyles.menuCard,
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: RFValue(4),
  },
  cardButton: globalPagesStyles.menuCardButton,
  textCards: globalPagesStyles.menuCardText,
  descricaoCards: globalPagesStyles.menuCardDescription,
});