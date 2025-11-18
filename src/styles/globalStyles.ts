import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get('window');

export const colors = {
  primary: "#0D47AB",
  secondary: "#3284f1",
  background: "#ADD8E6",
  white: "#FFFFFF",
  black: "#000000",
  lightGray: "#F5F5F5",
  textGray: "#797979ff",
  red: "#FF0000",
  blue: "#007AFF",
  statusAgendado: "#FFF5E0",
  statusAgendadoText: "#D97B00",
  statusConfirmado: "#DFFCE0",
  statusConfirmadoText: "#1D9A41",
};

export const shadows = {
  light: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  default: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  strong: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 5,
  },
};

const globalStyles = StyleSheet.create({
  // Backgrounds
  backgroundBase: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Scroll Views
  scrollArea: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },

  scrollAreaSimple: {
    flexGrow: 1,
  },

  // Containers
  containerPadded: {
    flex: 1,
    padding: 16,
  },

  // Inputs e Search
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 55,
    marginBottom: 15,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
  },

  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    overflow: "hidden",
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
    overflow: "hidden",
  },

  searchBar: {
    backgroundColor: colors.white,
    height: 40,
    borderRadius: 12,
    paddingLeft: 30,
    fontSize: 16,
    color: colors.textGray,
    outlineWidth: 0,
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

  // Cards/Caixas
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

  cardWhite: {
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    ...shadows.default,
  },

  cardBlue: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    ...shadows.light,
  },

  // Textos
  textPrimary: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.primary,
  },

  textWhite: {
    color: colors.white,
  },

  textWhiteBold: {
    color: colors.white,
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

  textBold: {
    fontWeight: "bold",
  },

  textCenter: {
    textAlign: "center",
  },

  // Títulos
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

  titleLarge: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 80,
  },

  titleMedium: {
    fontSize: 20,
    textAlign: "center",
  },

  // Layouts
  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  rowAround: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  centered: {
    justifyContent: "center",
    alignItems: "center",
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

  // Ícones
  iconMarginRight: {
    marginRight: 8,
  },

  iconMarginLeft: {
    marginLeft: 10,
  },

  // Empty states
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },

  emptyText: {
    fontSize: 18,
    color: colors.primary,
    marginTop: 16,
    fontWeight: '600',
  },

  emptySubtext: {
    fontSize: 14,
    color: colors.primary,
    marginTop: 8,
  },

  // Loading
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Listas
  listPadding: {
    paddingBottom: 100,
  },

  itemBase: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },

  // Bordas e divisores
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },

  borderTop: {
    borderTopWidth: 1,
    borderTopColor: colors.white,
  },

  dividerWhite: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },

  dividerTopWhite: {
    borderTopWidth: 1,
    borderTopColor: colors.white,
  },

  // Links/Textos especiais
  linkText: {
    color: colors.primary,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  dangerText: {
    color: colors.red,
    fontWeight: "600",
  },

  // Margins
  marginTop: {
    marginTop: 15,
  },

  marginBottom: {
    marginBottom: 15,
  },

  marginVertical: {
    marginVertical: 15,
  },

  // Menu
  menuCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 15,
  },

  menuCard: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    marginBottom: 16,
    width: "47%",
    height: 128,
    justifyContent: "center",
    alignItems: "center",
    ...shadows.strong,
    borderWidth: 1,
    borderColor: colors.white,
  },

  menuCardButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(8),
  },

  menuCardText: {
    fontSize: RFValue(18),
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },

  menuCardDescription: {
    fontSize: RFValue(16),
    color: colors.white,
    textAlign: "center",
  },

  // Controles
  controlBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.background,
    ...shadows.light,
  },

  // Botões de view mode
  viewModeContainer: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 2,
  },

  viewModeButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
  },

  viewModeButtonActive: {
    backgroundColor: colors.secondary,
  },

  viewModeButtonText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },

  viewModeButtonTextActive: {
    color: colors.white,
  },

  // Info containers
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  infoText: {
    fontSize: 14,
    color: colors.primary,
  },

  // Legenda/Status
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    backgroundColor: colors.background,
  },

  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },

  legendText: {
    fontSize: 12,
    color: colors.primary,
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
});

export default globalStyles;
