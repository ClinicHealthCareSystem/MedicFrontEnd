import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import getGlobalStyles, { shadows } from "../styles/globalStyles";

export const getCardInfoDashboardStyles = (colors) => {
  const globalStyles = getGlobalStyles(colors);
  const customShadows = shadows(colors);
  return StyleSheet.create({
    card: {
      ...globalStyles.cardBase,
      ...customShadows.strong,
    },
    header: globalStyles.headerBase,
    textHeader: globalStyles.headerText,
    caixa: {
      marginBottom: 10,
    },
    caixaInstru: globalStyles.dividerTopWhite,
    caixaTitle: globalStyles.headerTextMedium,
    caixaText: {
      fontSize: RFValue(14),
      color: colors.white,
      lineHeight: 20,
    },
    headerExame: {
      ...globalStyles.rowBetween,
      ...globalStyles.dividerWhite,
      marginBottom: 10,
      paddingBottom: 6,
    },
    dataText: {
      fontSize: RFValue(13),
      color: colors.white,
    },
    sectionTitle: {
      fontSize: RFValue(14),
      fontWeight: "bold",
      color: colors.white,
      marginBottom: 4,
    },
    sectionContent: {
      fontSize: RFValue(14),
      color: colors.white,
      lineHeight: 20,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      ...globalStyles.dividerTopWhite,
      paddingTop: 10,
    },
    button: {
      ...globalStyles.row,
      ...globalStyles.buttonPrimary,
      paddingVertical: 8,
      paddingHorizontal: 16,
      width: "40%",
    },
    buttonText: {
      ...globalStyles.buttonTextSmall,
      marginLeft: 6,
    },
    cardMedicTittle: {
      ...globalStyles.rowBetween,
      ...globalStyles.dividerWhite,
      marginBottom: 12,
      paddingBottom: 6,
    },
    caixaActive: {
      backgroundColor: colors.white,
      paddingVertical: 3,
      paddingHorizontal: 10,
      borderRadius: 12,
    },
    caixaActiveText: {
      color: colors.primary,
      fontWeight: "bold",
      fontSize: 12,
    },
    sectionTitleInfo: {
      fontSize: RFValue(14),
      fontWeight: "bold",
      color: colors.white,
      marginBottom: 4,
      marginTop: 8,
      opacity: 0.8,
    },
  });
};