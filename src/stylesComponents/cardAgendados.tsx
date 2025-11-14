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
    marginBottom: 15,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  headerTop: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    marginBottom: 4,
  },
  subtitle: {
    color: "white",
    fontSize: 13,
  },
  filterIcon:{
flexDirection: "row",
justifyContent: "flex-end",
},
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  info: {
    flex: 1,
    flexDirection: "column",
  },
  nome: {
    fontWeight: "800",
    fontSize: 15,
    color: "#0D47AB",
    marginBottom: 4,
  },
  especialidade: {
    color: "black",
    fontSize: 12,
    marginBottom: 4,
  },
  horaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  hora: {
    color: "#0D47AB",
    fontSize: 13,
    fontWeight: "600",
  },
  statusContainer: {
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  agendado: {
    backgroundColor: "#FFF5E0",
  },
  confirmado: {
    backgroundColor: "#DFFCE0",
  },
  statusText: {
    fontWeight: "bold",
    fontSize: 12,
  },
  statusTextAgendado: {
    color: "#D97B00",
  },
  statusTextConfirmado: {
    color: "#1D9A41",
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 30,
  },
  emptyText: {
    color: "white",
    marginTop: 10,
    fontSize: 14,
  },
});