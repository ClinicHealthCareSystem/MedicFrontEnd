import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#0D47AB",
    borderRadius: 10,
    padding: 15,
    margin: 20,
    elevation: 3,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  info: {
    flexDirection: "column",
  },
  nome: {
    fontWeight: "600",
    fontSize: 15,
    color: "#0D47AB",
  },
  hora: {
    color: "#0D47AB",
  },
  statusContainer: {
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  statusText: {
    fontWeight: "bold",
    fontSize: 13,
  },
  
});
