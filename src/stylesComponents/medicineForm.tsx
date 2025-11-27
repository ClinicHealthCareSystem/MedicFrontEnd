import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D47AB",
    marginTop: "10%",
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: "#ADD8E6",
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },

  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
    color: "white",
  },

  input: {
    outlineWidth: 0,
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    color: "black",
    fontSize: 15,
    backgroundColor: "white"
  },

  form: {
    marginVertical: 10,
    borderColor: "black",
  },

  button: {
    backgroundColor: "#3284f1",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
