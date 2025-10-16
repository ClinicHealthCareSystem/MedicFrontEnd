import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  card: {
    backgroundColor: "#0D47AB",
    borderRadius: 12,
    padding: 18,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 5,
  },

  header: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 12,
    paddingBottom: 6,
  },

  textHeader: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "white",
  },

  caixa: {
    marginBottom: 10,
  },

  caixaTitle: {
    fontSize: RFValue(16),
    fontWeight: "600",
    color: "white",
    marginBottom: 4,
  },

  caixaText: {
    fontSize: RFValue(14),
    color: "white",
    lineHeight: 20,
  },
});
