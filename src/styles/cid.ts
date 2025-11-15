import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalPagesStyles, { pageColors, pageShadows } from "../styles/globalStylesPages";

const { width } = Dimensions.get('window');
export const cidStyles = StyleSheet.create({
  background: globalPagesStyles.backgroundBase,
  containerCid: globalPagesStyles.containerPadded,
  buscaContainer: globalPagesStyles.searchContainer,
  buscaIcon: globalPagesStyles.iconMarginRight,
  buscaInput: globalPagesStyles.searchInput,
  infoContainer: globalPagesStyles.infoContainer,
  infoTexto: globalPagesStyles.infoText,
  btnLimparSelecao: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  btnLimparTexto: {
    fontSize: 14,
    color: pageColors.blue,
  },
  lista: globalPagesStyles.listPadding,
  cidItem: globalPagesStyles.cardBlue,
  cidItemHeader: {
    ...globalPagesStyles.rowBetween,
    marginBottom: 8,
  },
  cidCodigo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: pageColors.white,
  },
  cidDescricao: {
    fontSize: 16,
    color: pageColors.white,
    marginBottom: 6,
    lineHeight: 22,
  },
  cidCapitulo: {
    fontSize: 13,
    color: pageColors.white,
    fontStyle: 'italic',
  },
  loadingContainer: globalPagesStyles.loadingContainer,
  emptyContainer: globalPagesStyles.emptyContainer,
  emptyTexto: globalPagesStyles.emptyText,
  emptySubtexto: globalPagesStyles.emptySubtext,
});