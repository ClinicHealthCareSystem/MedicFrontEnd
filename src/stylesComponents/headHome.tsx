import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalStyles, { colors, shadows } from "../styles/globalStyles"
export const headHomeStyles = StyleSheet.create({
  headerView: {
    backgroundColor: colors.primary,
    paddingBottom: 25,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    paddingHorizontal: 15,
    elevation: 6,
  },
  headerContent: {
    ...globalStyles.rowBetween,
    marginTop: 25,
    position: "relative",
  },
  headerBackButton: {
    width: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerTitle: {
    fontSize: RFValue(28),
    fontWeight: "bold",
    color: colors.white,
    left: 0,
    right: 0,
    textAlign: "center",
  },
  headerRight: {
    width: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  search_bar: globalStyles.searchBar,
  headerInfo: {
    alignItems: "center",
    marginTop: 15,
  },
  headerInfoText: {
    color: colors.white,
    fontSize: RFValue(15),
  },
});
