import { View, Text } from "react-native";
import { getCardPerfilStyles } from "../stylesComponents/cardperfil";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../hooks/ThemeContext";
import { useProfile } from "../hooks/useMedic";
export default function CardPerfil() {
  const { colors } = useTheme();
  const cardPerfilStyles = getCardPerfilStyles(colors);
  const { profile, loading, error } = useProfile();
  return (
    <View style={cardPerfilStyles.cardPerfil}>
      <View style={cardPerfilStyles.avatarCaixa}>
        <Ionicons
          name="person-circle"
          style={cardPerfilStyles.avatar}
          size={100}
          color={"white"}
        />
      </View>
      <Text style={cardPerfilStyles.nome}>{profile?.name}</Text>
      <Text style={cardPerfilStyles.info}>
        Desde:{" "}
        {profile?.created_at
          ? new Date(profile.created_at).toLocaleDateString("pt-BR")
          : ""}
      </Text>

      <View style={cardPerfilStyles.statusAvatar}>
        <View style={cardPerfilStyles.planoStatus}>
          <Text style={cardPerfilStyles.planoStatusText}>Cardiologista</Text>
        </View>
        <View style={cardPerfilStyles.idSatus}>
          <Text style={cardPerfilStyles.idStatusText}>CRM: #2020612</Text>
        </View>
      </View>
    </View>
  );
}
