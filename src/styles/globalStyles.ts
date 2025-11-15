import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

// Cores do tema
export const colors = {
  primary: "#0D47AB",
  secondary: "#3284f1",
  white: "#FFFFFF",
  black: "#000000",
  textGray: "#797979ff",
  statusAgendado: "#FFF5E0",
  statusAgendadoText: "#D97B00",
  statusConfirmado: "#DFFCE0",
  statusConfirmadoText: "#1D9A41",
};

// Sombras padrão
export const shadows = {
  default: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 5,
  },
  strong: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 8,
  },
};

// Estilos globais compartilhados
const globalStyles = StyleSheet.create({
  // Cards base
  cardBase: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    ...shadows.default,
  },

  cardLarge: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    padding: 18,
    marginVertical: 10,
    marginHorizontal: 16,
    ...shadows.default,
  },

  // Headers
  headerBase: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    marginBottom: 12,
    paddingBottom: 6,
  },

  headerText: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: colors.white,
  },

  headerTextMedium: {
    fontSize: RFValue(16),
    fontWeight: "600",
    color: colors.white,
  },

  // Textos
  textWhite: {
    color: colors.white,
  },

  textWhiteBold: {
    color: colors.white,
    fontWeight: "bold",
  },

  textPrimary: {
    color: colors.primary,
    fontWeight: "bold",
  },

  textLabel: {
    fontSize: RFValue(14),
    color: colors.white,
  },

  textValue: {
    fontSize: RFValue(14),
    fontWeight: "500",
    color: colors.white,
  },

  // Items/Lista
  itemBase: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },

  // Botões
  buttonPrimary: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonTextSmall: {
    color: colors.white,
    fontWeight: "500",
    fontSize: RFValue(13),
  },

  // Avatar
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },

  avatarLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  avatarContainer: {
    height: 58,
    width: 58,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  avatarContainerLarge: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  // Layout helpers
  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  centered: {
    alignItems: "center",
    justifyContent: "center",
  },

  // Status badges
  statusBadge: {
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  statusBadgeAgendado: {
    backgroundColor: colors.statusAgendado,
  },

  statusBadgeConfirmado: {
    backgroundColor: colors.statusConfirmado,
  },

  statusTextAgendado: {
    color: colors.statusAgendadoText,
    fontWeight: "bold",
    fontSize: 12,
  },

  statusTextConfirmado: {
    color: colors.statusConfirmadoText,
    fontWeight: "bold",
    fontSize: 12,
  },

  // Dividers
  dividerWhite: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },

  dividerTopWhite: {
    borderTopWidth: 1,
    borderTopColor: colors.white,
  },

  // Search bar
  searchBar: {
    backgroundColor: colors.white,
    height: 40,
    borderRadius: 12,
    paddingLeft: 30,
    fontSize: 16,
    color: colors.textGray,
    outlineWidth: 0,
  },

  // Empty state
  emptyState: {
    alignItems: "center",
    paddingVertical: 30,
  },

  emptyText: {
    color: colors.white,
    marginTop: 10,
    fontSize: 14,
  },
});

export default globalStyles;