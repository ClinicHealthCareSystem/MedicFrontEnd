import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import getGlobalStyles from "./globalStyles";

const { width } = Dimensions.get('window');

export const getMenuStyles = (colors: any) => {
  const globalStyles = getGlobalStyles(colors);
  return StyleSheet.create({
    background: globalStyles.backgroundBase,
    scrollCards: {
      marginTop: 10,
    },
    cards: globalStyles.menuCardContainer,
    buttonCards: globalStyles.menuCard,
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: RFValue(4),
    },
    cardButton: globalStyles.menuCardButton,
    textCards: globalStyles.menuCardText,
    descricaoCards: globalStyles.menuCardDescription,
  });
};