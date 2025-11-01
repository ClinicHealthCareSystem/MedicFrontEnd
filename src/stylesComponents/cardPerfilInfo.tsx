import { StyleSheet } from "react-native";
export default StyleSheet.create({ 
    cardInfo: {
    backgroundColor: "#0D47AB",
    padding: 12,
    borderRadius: 8,
    elevation: 5,
    marginBottom: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    width: "90%",
    alignSelf: "center",
  },
  cardInfoTittle:{
   justifyContent: "center",
  alignItems: "center",
  position: "relative",
  marginBottom: 8,
    
    
  },
  editButton:{
position: "absolute",
  right: 0,   
  top: "50%", 
  transform: [{ translateY: -15 }], 
  padding: 4,
  },

 tittleInfo: {
  fontSize: 20,
  fontWeight: "bold",
  marginBottom: 8,
  color: "white",
  textAlign: "center",
},

  textInfo: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 5,
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    marginTop: 15,
    marginBottom: 15,
    alignSelf: "center",
    
  },

  labelInfo: {
    fontSize: 14,
    color: "white",
    marginHorizontal: 30,
    fontWeight: "600",
  },

  inputInfo: {
    color: "#0D47AB",
    fontWeight: "700",
    outlineWidth: 0,
    
  },
});
