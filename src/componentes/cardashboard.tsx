import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { getCardDashboardStyles } from "../stylesComponents/cardasboard";
import { useTheme } from "../hooks/ThemeContext";

export default function CardDashboard() {
  const { colors } = useTheme();
  const cardDashboardStyles = getCardDashboardStyles(colors);

  return (
    <View style={cardDashboardStyles.card}>
      <View style={cardDashboardStyles.header}>
        <Text style={cardDashboardStyles.textHeader}>Informações</Text>
      </View>

      <View style={cardDashboardStyles.infoContainer}>
        <View style={cardDashboardStyles.column}>
          <View style={cardDashboardStyles.infoRow}>
            <Ionicons name="person-outline" size={18} color="white" />
            <Text style={cardDashboardStyles.textLabel}>
              Idade: <Text style={cardDashboardStyles.textValue}>40 anos</Text>
            </Text>
          </View>

          <View style={cardDashboardStyles.infoRow}>
            <Ionicons name="medkit-outline" size={18} color="white" />
            <Text style={cardDashboardStyles.textLabel}>
              Alergia:{" "}
              <Text style={cardDashboardStyles.textValue}>Dipirona</Text>
            </Text>
          </View>
        </View>

        <View style={cardDashboardStyles.column}>
          <View style={cardDashboardStyles.infoRow}>
            <Ionicons name="heart-outline" size={18} color="white" />
            <Text style={cardDashboardStyles.textLabel}>
              Condição Crônica:{" "}
              <Text style={cardDashboardStyles.textValue}>Diabetes</Text>
            </Text>
          </View>

          <View style={cardDashboardStyles.infoRow}>
            <MaterialIcons name="bloodtype" size={20} color="white" />
            <Text style={cardDashboardStyles.textLabel}>
              Tipo Sanguíneo:{" "}
              <Text style={cardDashboardStyles.textValue}>O+</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
