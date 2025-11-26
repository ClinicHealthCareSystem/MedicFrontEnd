import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { getLoginStyles } from "../styles/login";
import { useTheme } from "../hooks/ThemeContext";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Login() {
  const { colors } = useTheme();
  const loginStyles = getLoginStyles(colors);

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
    <ScrollView contentContainerStyle={loginStyles.background}>
      <Text style={loginStyles.tittle}>Login Médico</Text>
      <Text style={loginStyles.subtittle}>Bem-vindo(a) ao Saúde Mania</Text>

      <View style={loginStyles.inputCaixa}>
        <Ionicons name="person-outline" size={30} style={loginStyles.id_card} />
        <TextInput
          style={loginStyles.input}
          placeholder="Email institucional"
          placeholderTextColor="#0D47AB"
        />
      </View>

      <View style={loginStyles.inputCaixa}>
        <Ionicons
          name="lock-closed-outline"
          size={30}
          style={loginStyles.lock}
        />
        <TextInput
          style={loginStyles.input}
          placeholder="Senha"
          placeholderTextColor="#0D47AB"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!passwordShow}
        />
        <TouchableOpacity onPress={passwordEyes}>
          {passwordShow ? (
            <Ionicons
              name="eye-outline"
              size={30}
              style={loginStyles.eyeOpened}
            />
          ) : (
            <Ionicons
              name="eye-off-outline"
              size={30}
              style={loginStyles.eyeClosed}
            />
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={loginStyles.esqueci}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={loginStyles.button}
        onPress={() => router.push("/menu")}
      >
        <Text style={loginStyles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
