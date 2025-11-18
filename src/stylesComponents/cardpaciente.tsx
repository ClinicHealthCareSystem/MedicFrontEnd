import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import getGlobalStyles, { shadows } from "../styles/globalStyles";

export const getCardPacienteStyles = (colors: any) => {
  const globalStyles = getGlobalStyles(colors);
  const customShadows = shadows(colors);
  return StyleSheet.create({
    card: {
      ...globalStyles.cardBase,
      ...customShadows.strong,
    },
    header: {
      ...globalStyles.row,
      marginBottom: 12,
    },
    avatar: globalStyles.avatar,
    avatarCaixa: globalStyles.avatarContainer,
    avatarText: {
      ...globalStyles.textWhiteBold,
      fontSize: 16,
    },
    infosCaixa: {
      marginTop: 5,
    },
    info: {
      flex: 1,
      marginLeft: 12,
    },
    nome: {
      ...globalStyles.textWhiteBold,
      fontSize: 15,
      marginBottom: 2,
    },
    detalhes: {
      ...globalStyles.textWhite,
      fontSize: 12,
    },
    linhaInfo: {
      ...globalStyles.row,
      marginBottom: 6,
    },
    textInfo: {
      fontSize: 12,
      color: colors.white,
      marginLeft: 6,
    },
    buttonProntu: {
      ...globalStyles.buttonPrimary,
      marginTop: 12,
    },
    buttonProntuText: {
      ...globalStyles.buttonText,
      fontSize: 18,
    },
  });
};