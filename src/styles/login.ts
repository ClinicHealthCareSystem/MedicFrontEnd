import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalStyles, { colors } from "./globalStyles";

const { width } = Dimensions.get('window');


export const loginStyles = StyleSheet.create({
  background: {
    ...globalStyles.backgroundBase,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  tittle: {
    ...globalStyles.titleLarge,
    color: colors.primary,
  },
  subtittle: {
    ...globalStyles.titleMedium,
    color: colors.primary,
    bottom: 40,
  },
  inputCaixa: globalStyles.inputContainer,
  input: globalStyles.input,
  eyeOpened: {
    ...globalStyles.iconMarginLeft,
    color: colors.primary,
  },
  eyeClosed: {
    ...globalStyles.iconMarginLeft,
    color: colors.primary,
  },
  esqueci: {
    ...globalStyles.linkText,
    alignSelf: "flex-end",
    fontSize: RFValue(14),
    marginBottom: 10,
  },
  button: {
    ...globalStyles.buttonPrimary,
    width: "100%",
  },
  buttonText: globalStyles.buttonText,
  cadastroCaixa: {
    marginTop: 20,
    alignItems: "center",
  },
  text: {
    ...globalStyles.textPrimary,
  },
  cadastro: {
    ...globalStyles.textPrimary,
    ...globalStyles.textBold,
  },
  id_card: {
    marginRight: 5,
    color: colors.primary,
  },
  lock: {
    marginRight: 5,
    color: colors.primary,
  },
});
