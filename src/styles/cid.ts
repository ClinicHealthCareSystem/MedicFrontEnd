import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import getGlobalStyles from "./globalStyles";

const { width } = Dimensions.get('window');

export const getCidStyles = (colors) => {
  const globalStyles = getGlobalStyles(colors);
  return StyleSheet.create({
    background: globalStyles.backgroundBase,
    containerCid: globalStyles.containerPadded,
    buscaContainer: globalStyles.searchContainer,
    buscaIcon: globalStyles.iconMarginRight,
    buscaInput: globalStyles.searchInput,
    infoContainer: globalStyles.infoContainer,
    infoTexto: globalStyles.infoText,
    btnLimparSelecao: {
      paddingHorizontal: 12,
      paddingVertical: 6,
    },
    btnLimparTexto: {
      fontSize: 14,
      color: colors.blue,
    },
    lista: globalStyles.listPadding,
    cidItem: globalStyles.cardBlue,
    cidItemHeader: {
      ...globalStyles.rowBetween,
      marginBottom: 8,
    },
    cidCodigo: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.white,
    },
    cidDescricao: {
      fontSize: 16,
      color: colors.white,
      marginBottom: 6,
      lineHeight: 22,
    },
    cidCapitulo: {
      fontSize: 13,
      color: colors.white,
      fontStyle: 'italic',
    },
    loadingContainer: globalStyles.loadingContainer,
    emptyContainer: globalStyles.emptyContainer,
    emptyTexto: globalStyles.emptyText,
    emptySubtexto: globalStyles.emptySubtext,
  });
};