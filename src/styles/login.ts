import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalPagesStyles, { pageColors, pageShadows } from "../styles/globalStylesPages";

const { width } = Dimensions.get('window');


export const loginStyles = StyleSheet.create({
  background: {
    ...globalPagesStyles.backgroundBase,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  tittle: {
    ...globalPagesStyles.titleLarge,
    color: pageColors.primary,
  },
  subtittle: {
    ...globalPagesStyles.titleMedium,
    color: pageColors.primary,
    bottom: 40,
  },
  inputCaixa: globalPagesStyles.inputContainer,
  input: globalPagesStyles.input,
  eyeOpened: {
    ...globalPagesStyles.iconMarginLeft,
    color: pageColors.primary,
  },
  eyeClosed: {
    ...globalPagesStyles.iconMarginLeft,
    color: pageColors.primary,
  },
  esqueci: {
    ...globalPagesStyles.linkText,
    alignSelf: "flex-end",
    fontSize: RFValue(14),
    marginBottom: 10,
  },
  button: {
    ...globalPagesStyles.buttonPrimary,
    width: "100%",
  },
  buttonText: globalPagesStyles.buttonText,
  cadastroCaixa: {
    marginTop: 20,
    alignItems: "center",
  },
  text: {
    ...globalPagesStyles.textPrimary,
  },
  cadastro: {
    ...globalPagesStyles.textPrimary,
    ...globalPagesStyles.textBold,
  },
  id_card: {
    marginRight: 5,
    color: pageColors.primary,
  },
  lock: {
    marginRight: 5,
    color: pageColors.primary,
  },
});
