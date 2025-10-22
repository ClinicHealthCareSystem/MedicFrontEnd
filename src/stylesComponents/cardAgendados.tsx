import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#0D47AB",
    borderRadius: 14,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 16,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    
  },
  header: {
    marginBottom: 10,
    paddingBottom: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color : "white",
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
    fontWeight: "800",
    fontSize: 15,
    color:  "#0D47AB",
  },
  hora: {
    color: "#0D47AB",
  },
  statusContainer: {
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  agendado: {
    backgroundColor: "#FFF5E0",
  },
  confirmado: {
    backgroundColor: "#DFFCE0",
  },
  statusText: {
    fontWeight: "bold",
    fontSize: 13,
  },
  statusTextAgendado: {
    color: "#D97B00",
  },
  statusTextConfirmado: {
    color: "#1D9A41",
  },
});