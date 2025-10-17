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
  cardExame: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 18,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },

  headerExame: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginBottom: 10,
    paddingBottom: 6,
  },

  nomeExame: {
    fontSize: RFValue(16),
    fontWeight: "700",
    color: "#111",
  },

  nomePaciente: {
    fontSize: RFValue(14),
    color: "white",
    marginBottom: 8,
  },

  dataContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  dataText: {
    fontSize: RFValue(13),
    color: "white",
    marginLeft: 6,
  },

  sectionTitle: {
    fontSize: RFValue(14),
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
  },

  sectionContent: {
    fontSize: RFValue(14),
    color: "white",
    lineHeight: 20,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "white",
    paddingTop: 10,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3284f1",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: "40%",
  },

  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: RFValue(13),
    marginLeft: 6,
  },
});
