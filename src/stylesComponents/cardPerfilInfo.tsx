import { StyleSheet } from "react-native";
import getGlobalStyles, { shadows } from "../styles/globalStyles";

export const getCardPerfilInfoStyles = (colors: any) => {
  const globalStyles = getGlobalStyles(colors);
  const customShadows = shadows(colors);

  return StyleSheet.create({
    cardInfo: {
      backgroundColor: colors.primary,
      padding: 12,
      borderRadius: 8,
      ...customShadows.default,
      marginBottom: 20,
      width: "90%",
      alignSelf: "center",
    },

    cardInfoTittle: {
      ...globalStyles.centered,
      position: "relative",
      marginBottom: 8,
    },

    editButton: {
      position: "absolute",
      right: 0,
      top: "50%",
      transform: [{ translateY: -15 }],
      padding: 4,
    },

    tittleInfo: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 8,
      color: colors.white,
      textAlign: "center",
    },

    textInfo: {
      backgroundColor: colors.white,
      borderRadius: 8,
      padding: 5,
      width: "80%",
      borderWidth: 1,
      borderColor: colors.black,
      marginTop: 15,
      marginBottom: 15,
      alignSelf: "center",
    },

    labelInfo: {
      fontSize: 14,
      color: colors.white,
      marginHorizontal: 30,
      fontWeight: "600",
    },

    inputInfo: {
      color: colors.primary,
      fontWeight: "700",
      outlineWidth: 0,
    },
  });
};
