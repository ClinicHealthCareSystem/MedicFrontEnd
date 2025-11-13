import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
card:{
backgroundColor: "#0D47AB",
borderRadius: 12,
padding: 15,
marginVertical: 8,
marginHorizontal: 16,
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.7,
shadowRadius: 8,


},
header:{
flexDirection: "row", 
    alignItems: "center",
    marginBottom: 8,
},
avatar:{
     width: 50,
    height: 50,
    borderRadius: 50,
},
  avatarCaixa: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#0D47AB",
    justifyContent: "center",
    alignItems: "center",
    
  },

avatarText:{
color: "white",
fontWeight: "bold",
fontSize: 16,


},

info:{
    flex: 1,

},
nome:{
    fontWeight: "bold",
    fontSize: 15,
    color: "white"

},
detalhes:{
    color: "white",
    fontSize: 12,
    marginBottom: 5,

},
linhaInfo:{
flexDirection: "row",
alignContent: "center",
marginBottom: 3,

},
textInfo:{
fontSize: 12,
color: "white",
marginLeft: 5,
},
buttonProntu:{
    backgroundColor:  "#3284f1",
      borderRadius: 8,
      padding: 5,
},
 buttonProntuText:{
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    

  },




});