import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import cardDashboardStyle from "../stylesComponents/cardasboard";

export default function CardDashboard() {
  return (
    <View style={cardDashboardStyle.card}>
      <View style={cardDashboardStyle.header}>
        <Text style={cardDashboardStyle.textHeader}>Informações</Text>
      </View>

    
      <View style={cardDashboardStyle.infoContainer}>
       
        <View style={cardDashboardStyle.column}>
          <View style={cardDashboardStyle.infoRow}>
            <Ionicons name="person-outline" size={18} color="#FFFFFF" />
            <Text style={cardDashboardStyle.textLabel}>
              Idade:{" "} <Text style={cardDashboardStyle.textValue}>40 anos</Text>
            </Text>
          </View>

          <View style={cardDashboardStyle.infoRow}>
            <Ionicons name="medkit-outline" size={18} color="#FFFFFF" />
            <Text style={cardDashboardStyle.textLabel}>
              Alergia:{" "} <Text style={cardDashboardStyle.textValue}>Dipirona</Text>
            </Text>
          </View>
        </View>


        <View style={cardDashboardStyle.column}>
          <View style={cardDashboardStyle.infoRow}>
            <Ionicons name="heart-outline" size={18} color="white" />
            <Text style={cardDashboardStyle.textLabel}>
              Condição Crônica:{" "}
              <Text style={cardDashboardStyle.textValue}>Diabetes</Text>
            </Text>
          </View>

          <View style={cardDashboardStyle.infoRow}>
            <MaterialIcons name="bloodtype" size={20} color="white" />
            <Text style={cardDashboardStyle.textLabel}>
              Tipo Sanguíneo:{" "} <Text style={cardDashboardStyle.textValue}>O+</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
