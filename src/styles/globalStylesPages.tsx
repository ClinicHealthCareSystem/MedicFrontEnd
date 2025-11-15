import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get('window');

// Cores do tema (estendendo as cores dos componentes)
export const pageColors = {
  primary: "#0D47AB",
  secondary: "#3284f1",
  background: "#ADD8E6",
  white: "#FFFFFF",
  black: "#000000",
  lightGray: "#F5F5F5",
  textGray: "#797979ff",
  red: "#FF0000",
  blue: "#007AFF",
};

// Sombras padrão para páginas
export const pageShadows = {
  light: {
    shadowColor: pageColors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  default: {
    shadowColor: pageColors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  strong: {
    shadowColor: pageColors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 5,
  },
};

// Estilos globais para páginas
const globalPagesStyles = StyleSheet.create({
  // Backgrounds
  backgroundBase: {
    flex: 1,
    backgroundColor: pageColors.background,
    
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
    backgroundColor: pageColors.white,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 55,
    marginBottom: 15,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: pageColors.lightGray,
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
    color: pageColors.black,
    
    overflow: "hidden",
  },

  // Botões base
  buttonPrimary: {
    backgroundColor: pageColors.secondary,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 8,
    marginBottom: 15,
    marginTop: 15,
  },

  buttonText: {
    color: pageColors.white,
    fontSize: 18,
    fontWeight: "bold",
  },

  // Cards/Caixas base
  cardWhite: {
    backgroundColor: pageColors.white,
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    ...pageShadows.default,
  },

  cardBlue: {
    backgroundColor: pageColors.primary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    ...pageShadows.light,
  },

  // Textos comuns
  textPrimary: {
    fontSize: 16,
    fontWeight: "500",
    color: pageColors.primary,
  },

  textWhite: {
    color: pageColors.white,
  },

  textBold: {
    fontWeight: "bold",
  },

  textCenter: {
    textAlign: "center",
  },

  // Títulos
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

  // Layouts comuns
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
    color: pageColors.primary,
    marginTop: 16,
    fontWeight: '600',
  },

  emptySubtext: {
    fontSize: 14,
    color: pageColors.primary,
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

  // Bordas e divisores
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: pageColors.white,
  },

  borderTop: {
    borderTopWidth: 1,
    borderTopColor: pageColors.white,
  },

  // Links/Textos especiais
  linkText: {
    color: pageColors.primary,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  dangerText: {
    color: pageColors.red,
    fontWeight: "600",
  },

  // Margins comuns
  marginTop: {
    marginTop: 15,
  },

  marginBottom: {
    marginBottom: 15,
  },

  marginVertical: {
    marginVertical: 15,
  },

  // Menu cards específicos
  menuCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 15,
  },

  menuCard: {
    backgroundColor: pageColors.primary,
    borderRadius: 8,
    marginBottom: 16,
    width: "47%",
    height: 128,
    justifyContent: "center",
    alignItems: "center",
    ...pageShadows.strong,
    borderWidth: 1,
    borderColor: pageColors.white,
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
    color: pageColors.white,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },

  menuCardDescription: {
    fontSize: RFValue(16),
    color: pageColors.white,
    textAlign: "center",
  },

  // Controles específicos (usados em várias páginas)
  controlBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: pageColors.background,
    ...pageShadows.light,
  },

  // Botões de view mode (agenda, etc)
  viewModeContainer: {
    flexDirection: 'row',
    backgroundColor: pageColors.background,
    borderRadius: 8,
    padding: 2,
  },

  viewModeButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
  },

  viewModeButtonActive: {
    backgroundColor: pageColors.secondary,
  },

  viewModeButtonText: {
    fontSize: 14,
    color: pageColors.primary,
    fontWeight: '500',
  },

  viewModeButtonTextActive: {
    color: pageColors.white,
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
    color: pageColors.primary,
  },

  // Legend/Status
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    backgroundColor: pageColors.background,
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
    color: pageColors.primary,
  },
});

export default globalPagesStyles;