import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalStyles, { colors, shadows } from "../styles/globalStyles"
export const cardPerfilStyles = StyleSheet.create({
  cardPerfil: {
    ...globalStyles.cardBase,
    ...shadows.strong,
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 20,

  },
  avatarCaixa: globalStyles.avatarContainerLarge,
  avatar: globalStyles.avatarLarge,
  nome: {
    ...globalStyles.textWhiteBold,
    fontSize: 20,
  },
  info: {
    ...globalStyles.textWhite,
    fontSize: 18,
    marginBottom: 8,
  },
  statusAvatar: {
    flexDirection: "row",
  },
  planoStatus: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginRight: 8,
    justifyContent: "center",
  },
  planoStatusText: globalStyles.textWhiteBold,
  idSatus: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: "center",
  },
  idStatusText: globalStyles.textPrimary,
});