import { Text, View, TextInput,TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import styles from "../stylesComponents/cardPerfilInfo";
export default function CardPerfilInfo(){
    const [isEditing, setIsEditing] = useState(false);
    return(
        <View style={styles.cardInfo}>
          <View style={styles.cardInfoTittle}>
          <Text style={styles.tittleInfo}>Informações Pessoais</Text>
          <TouchableOpacity style={styles.editButton}
          onPress={() => setIsEditing(!isEditing)}>
          <MaterialCommunityIcons name={isEditing ? "check" : "account-edit"} size={30} color={"white"}/>
          </TouchableOpacity>
          </View>

          <Text style={styles.labelInfo}>Nome:</Text>
          <View style={styles.textInfo}>
            <TextInput style={styles.inputInfo} editable={isEditing} placeholder="José" />
          </View>

          <Text style={styles.labelInfo}>Email:</Text>
          <View style={styles.textInfo}>
            <TextInput style={styles.inputInfo} editable={isEditing} placeholder="Jose@gmail.com" />
          </View>

          <Text style={styles.labelInfo}>Telefone:</Text>
          <View style={styles.textInfo}>
            <TextInput style={styles.inputInfo} editable={isEditing} placeholder="(85) 9 9999-9999" />
          </View>

          <Text style={styles.labelInfo}>Data de Nascimento:</Text>
          <View style={styles.textInfo}>
            <TextInput style={styles.inputInfo} editable={isEditing} placeholder="01/01/2001" />
          </View>

          <Text style={styles.labelInfo}>Endereço:</Text>
          <View style={styles.textInfo}>
            <TextInput style={styles.inputInfo} editable={isEditing} placeholder="Rua A 10" />
          </View>
          </View>
    );
}