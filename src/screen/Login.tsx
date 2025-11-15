// import React, { useState } from "react";
// import {
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   ScrollView,
// } from "react-native";
// import { loginStyles } from "../styles/login";
// import { Ionicons } from "@expo/vector-icons";

// export default function Login() {
//   const [CPF, setCPF] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordShow, setPasswordShow] = useState(false);
//   const [touched, setTouched] = useState<{ cpf: boolean; password: boolean }>({
//     cpf: false,
//     password: false,
//   });
// console.log("import globalPagesStyles: ", loginStyles);

//   const passwordEyes = () => {
//     setPasswordShow((prev) => !prev);
//   };

//   return (
//     <View>
      
//       <ScrollView>
//         <Text >Login Médico</Text>
//         <Text style={loginStyles.subtittle}>Bem-vindo(a) ao Saúde Mania</Text>

//         <View style={loginStyles.inputCaixa}>
//           <Ionicons name="person-outline" size={30} style={loginStyles.id_card} />
//           <TextInput
//             style={loginStyles.input}
//             placeholder="Email institucional"
//           />
//         </View>
      
//         <View style={loginStyles.inputCaixa}>
//           <Ionicons name="lock-closed-outline" size={30} style={loginStyles.lock} />
//           <TextInput
//             style={loginStyles.input}
//             placeholder="Senha"
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//             secureTextEntry={!passwordShow}
//           />
//           <TouchableOpacity onPress={passwordEyes}>
//             {passwordShow ? (
//               <Ionicons name="eye-outline" size={30} style={loginStyles.eyeOpened} />
//             ) : (
//               <Ionicons
//                 name="eye-off-outline"
//                 size={30}
//                 style={loginStyles.eyeClosed}
//               />
//             )}
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity>
//           <Text style={loginStyles.esqueci}>Esqueceu a senha?</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={loginStyles.button}>
//           <Text style={loginStyles.buttonText}>Acessar</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// }