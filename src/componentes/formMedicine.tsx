import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../stylesComponents/medicineForm";
import { useState } from "react";
import { useSendMedicine } from "../hooks/useSendMedicine";

type Props = {
  onClose: () => void;
  onSubmit: (data: any) => void;
  userId: string;
};

const formatDate = (text: string) => {
  const cleaned = text.replace(/\D/g, "");
  const limited = cleaned.substring(0, 8);

  if (limited.length <= 2) {
    return limited;
  } else if (limited.length <= 4) {
    return `${limited.substring(0, 2)}/${limited.substring(2)}`;
  } else {
    return `${limited.substring(0, 2)}/${limited.substring(
      2,
      4
    )}/${limited.substring(4)}`;
  }
};

const formatTime = (text: string) => {
  const cleaned = text.replace(/\D/g, "");
  const limited = cleaned.substring(0, 4);

  if (limited.length <= 2) {
    return limited;
  } else {
    return `${limited.substring(0, 2)}:${limited.substring(2)}`;
  }
};

export default function FormMedicamento({ onClose, onSubmit, userId }: Props) {
  const [nome, setNome] = useState("");
  const [dosagem, setDosagem] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataTermino, setDataTermino] = useState("");
  const [vezesAoDia, setVezesAoDia] = useState("");
  const [horarioManha, setHorarioManha] = useState("");
  const [horarioTarde, setHorarioTarde] = useState("");
  const [nomeMedico, setNomeMedico] = useState("");

  const { error, handleSendMedicine } = useSendMedicine();

  const handleSave = async () => {
    const data = {
      nome,
      dosagem,
      dataInicio,
      dataTermino,
      vezesAoDia,
      horarioManha,
      horarioTarde,
      nomeMedico,
      userId: userId,
    };

    const result = await handleSendMedicine(data);

    if (result?.error) {
      return;
    }

    onSubmit(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro de Medicamento</Text>

        <TouchableOpacity onPress={onClose}>
          <Ionicons name="close" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Dipirona"
          placeholderTextColor="#ADD8E6"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Dosagem</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 500mg"
          placeholderTextColor="#ADD8E6"
          value={dosagem}
          onChangeText={setDosagem}
        />

        <Text style={styles.label}>Data de início</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          placeholderTextColor="#ADD8E6"
          value={dataInicio}
          onChangeText={(text) => setDataInicio(formatDate(text))}
          keyboardType="numeric"
          maxLength={10}
        />

        <Text style={styles.label}>Data de término</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          placeholderTextColor="#ADD8E6"
          value={dataTermino}
          onChangeText={(text) => setDataTermino(formatDate(text))}
          keyboardType="numeric"
          maxLength={10}
        />

        <Text style={styles.label}>Quantas vezes ao dia</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 2"
          placeholderTextColor="#ADD8E6"
          value={vezesAoDia}
          onChangeText={setVezesAoDia}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Horário manhã</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 08:00"
          placeholderTextColor="#ADD8E6"
          value={horarioManha}
          onChangeText={(text) => setHorarioManha(formatTime(text))}
          keyboardType="numeric"
          maxLength={5}
        />

        <Text style={styles.label}>Horário tarde</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 16:00"
          placeholderTextColor="#ADD8E6"
          value={horarioTarde}
          onChangeText={(text) => setHorarioTarde(formatTime(text))}
          keyboardType="numeric"
          maxLength={5}
        />

        <Text style={styles.label}>Nome do médico</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Dr. João Silva"
          placeholderTextColor="#ADD8E6"
          value={nomeMedico}
          onChangeText={setNomeMedico}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
