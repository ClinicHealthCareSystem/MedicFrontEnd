import { StyleSheet } from "react-native";

export default StyleSheet.create({
  cardCounts: {
    backgroundColor: "#0D47AB",
    borderRadius: 12,
    padding: 16,
    marginVertical: 20,
    marginHorizontal: 8,
    width: 130,
    height: 120,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 8,
    justifyContent: "center",
  },
  headerCard: {
    alignItems: "flex-start",
  },
  caixaTitulo: {
    marginTop: 8,
  },
  textTitulo: {
    color: "white",
    fontWeight: "600",
    fontSize: 13,
    textAlign: "center",
  },
  caixaNumber: {
    marginVertical: 10,
    
  },
  textNumber: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
});