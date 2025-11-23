// import { Text, View, TextInput, TouchableOpacity } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { useState } from "react";
// import { getCardPerfilInfoStyles } from "../stylesComponents/cardPerfilInfo";
// import { useTheme } from "../hooks/ThemeContext";

// export default function CardPerfilInfo() {
//   const { colors } = useTheme();
//   const cardPerfilInfoStyles = getCardPerfilInfoStyles(colors);

//   return (
//     <View style={cardPerfilInfoStyles.cardInfo}>
//       <View style={cardPerfilInfoStyles.cardInfoTittle}>
//         <Text style={cardPerfilInfoStyles.tittleInfo}>Informações Pessoais</Text>
//       </View>
//       <Text style={cardPerfilInfoStyles.labelInfo}>Nome:</Text>
//       <View style={cardPerfilInfoStyles.textInfo}>
//         <TextInput
//           style={cardPerfilInfoStyles.inputInfo}
//           placeholder="José"
//         />
//       </View>

//       <Text style={cardPerfilInfoStyles.labelInfo}>Email:</Text>
//       <View style={cardPerfilInfoStyles.textInfo}>
//         <TextInput
//           style={cardPerfilInfoStyles.inputInfo}
//           placeholder="Jose@gmail.com"
//         />
//       </View>
//     </View>
//   );
// }

import { Text, View, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { getCardPerfilInfoStyles } from "../stylesComponents/cardPerfilInfo";
import { useTheme } from "../hooks/ThemeContext";
import { useProfile } from "../hooks/useMedic";

export default function CardPerfilInfo() {
  const { colors } = useTheme();
  const cardPerfilInfoStyles = getCardPerfilInfoStyles(colors);

  const { profile, loading, error } = useProfile();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (profile) {
      setEmail(profile.email || "");
      setName(profile.name || "");
    }
  }, [profile]);

  return (
    <View style={cardPerfilInfoStyles.cardInfo}>
      <View style={cardPerfilInfoStyles.cardInfoTittle}>
        <Text style={cardPerfilInfoStyles.tittleInfo}>
          Informações Pessoais
        </Text>
      </View>

      <Text style={cardPerfilInfoStyles.labelInfo}>Nome:</Text>
      <View style={cardPerfilInfoStyles.textInfo}>
        <TextInput
          style={cardPerfilInfoStyles.inputInfo}
          value={name}
          editable={false}
          onChangeText={setName}
        />
      </View>

      <Text style={cardPerfilInfoStyles.labelInfo}>Email:</Text>
      <View style={cardPerfilInfoStyles.textInfo}>
        <TextInput
          style={cardPerfilInfoStyles.inputInfo}
          value={email}
          editable={false}
          onChangeText={setEmail}
        />
      </View>
    </View>
  );
}
