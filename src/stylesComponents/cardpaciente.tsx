import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
card:{
backgroundColor: "#0D47AB",
borderRadius: 12,
padding: 16,
marginVertical: 10,
marginHorizontal: 16,
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.7,
shadowRadius: 8,
shadowColor: "black",
},
header:{
flexDirection: "row", 
    alignItems: "center",
    marginBottom: 12,
},
avatar:{
     width: 55,
    height: 55,
    borderRadius: 50,
},
  avatarCaixa: {
    height: 58,
    width: 58,
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
infosCaixa:{
marginTop: 5,
},

info:{
    flex: 1,
    marginLeft: 12,

},
nome:{
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    marginBottom: 2,

},
detalhes:{
    color: "white",
    fontSize: 12,
},
linhaInfo:{
flexDirection: "row",
alignContent: "center",
marginBottom: 6,

},
textInfo:{
fontSize: 12,
color: "white",
marginLeft: 6,
},
buttonProntu:{
    backgroundColor:  "#3284f1",
      borderRadius: 10,
      paddingVertical: 10,
      marginTop: 12,
},
 buttonProntuText:{
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    

  },
});