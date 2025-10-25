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
    color: "white",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  iconContainer: {
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  alerta: {
    fontWeight: "800",
    fontSize: 15,
    color: "#0D47AB",
    marginBottom: 3,
  },
  alertaDescr: {
    color: "#0D47AB",
    fontSize: 13,
  },
});
