import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import styles from "../styles/login";

import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  
  const [CPF, setCPF] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [touched, setTouched] = useState<{ cpf: boolean; password: boolean }>({
    cpf: false,
    password: false,
  });


  const passwordEyes = () => {
    setPasswordShow((prev) => !prev);
  };


  return (
    <ScrollView contentContainerStyle={styles.background}>
      <Text style={styles.tittle}>Login Médico</Text>
      <Text style={styles.subtittle}>Bem-vindo(a) ao Saúde Mania</Text>

      <View style={styles.inputCaixa}>
        <Ionicons name="person-outline" size={30} style={styles.id_card} />
        <TextInput
          style={styles.input}
          placeholder="Email institucional"
          
          
        />
      </View>
     
      <View style={styles.inputCaixa}>
        <Ionicons name="lock-closed-outline" size={30} style={styles.lock}   />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!passwordShow}
          
        />
        <TouchableOpacity onPress={passwordEyes}>
          {passwordShow ? (
            <Ionicons name="eye-outline" size={30} style={styles.eyeOpened} />
          ) : (
            <Ionicons
              name="eye-off-outline"
              size={30}
              style={styles.eyeClosed}
            />
          )}
        </TouchableOpacity>
      </View>
      

      <TouchableOpacity>
        <Text style={styles.esqueci}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}
