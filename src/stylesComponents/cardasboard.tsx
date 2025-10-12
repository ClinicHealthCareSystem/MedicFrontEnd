import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  card: {
    backgroundColor: "#0D47AB",
    borderRadius: 14,
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
    paddingBottom: 4,
  },

  textHeader: {
    fontSize: RFValue(18),
    fontWeight: "600",
    color: "white",
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 15,
  },

  column: {
    flex: 1,
    gap: 15,
    paddingHorizontal: 4,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 10,
  },

  textLabel: {
    fontSize: RFValue(14),
    color: "white",
    flexShrink: 1,
  },

  textValue: {
    fontWeight: "500",
    color: "white",
  },
});
