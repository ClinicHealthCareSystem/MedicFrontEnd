import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getCardInfoDashboardStyles } from "../stylesComponents/cardInfoDashboard";
import { useTheme } from "../hooks/ThemeContext";
import { useState } from "react";
import FormMedicamento from "./formMedicine";

type Props = {
  activeTab: "opcao1" | "opcao2" | "opcao3";
  userId: string;
};

export default function CardInfoDashboard({ activeTab, userId }: Props) {
  const { colors } = useTheme();
  const cardInfoDashboardStyles = getCardInfoDashboardStyles(colors);
  const [modal, setModalVisible] = useState(false);

  return (
    <>
      {activeTab === "opcao1" && (
        <View style={cardInfoDashboardStyles.card}>
          <View style={cardInfoDashboardStyles.header}>
            <Text style={cardInfoDashboardStyles.textHeader}>
              Consulta - 14 de janeiro, 2024
            </Text>
          </View>

          <View style={cardInfoDashboardStyles.caixa}>
            <Text style={cardInfoDashboardStyles.caixaTitle}>Resultado </Text>
            <Text style={cardInfoDashboardStyles.caixaText}>
              Dor na Garganta
            </Text>
          </View>

          <View style={cardInfoDashboardStyles.caixa}>
            <Text style={cardInfoDashboardStyles.caixaTitle}>
              Diagnóstico:{" "}
            </Text>
            <Text style={cardInfoDashboardStyles.caixaText}>Resfriado</Text>
          </View>

          <View style={cardInfoDashboardStyles.caixa}>
            <Text style={cardInfoDashboardStyles.caixaTitle}>Conduta: </Text>
            <Text style={cardInfoDashboardStyles.caixaText}>
              Prescrição de medicamentos, solicitação de exames complementares.
            </Text>
          </View>
        </View>
      )}

      {activeTab === "opcao2" && (
        <View style={cardInfoDashboardStyles.card}>
          <View style={cardInfoDashboardStyles.header}>
            <Text style={cardInfoDashboardStyles.textHeader}>
              Hemograma Completo
            </Text>
            <Text style={cardInfoDashboardStyles.dataText}>
              15 de janeiro, 2024
            </Text>
          </View>

          <View style={cardInfoDashboardStyles.caixa}>
            <Text style={cardInfoDashboardStyles.sectionTitle}>Resultado</Text>
            <Text style={cardInfoDashboardStyles.sectionContent}>
              <Text>Hemoglobina:</Text> 13.5 g/dL{"\n"}
              <Text>Hematócrito:</Text> 40%{"\n"}
              <Text>Leucócitos:</Text> 7.500/mm³
            </Text>
          </View>

          <View style={cardInfoDashboardStyles.caixa}>
            <Text style={cardInfoDashboardStyles.sectionTitle}>
              Interpretação
            </Text>
            <Text style={cardInfoDashboardStyles.sectionContent}>
              Exame dentro dos parâmetros normais
            </Text>
          </View>

          <View style={cardInfoDashboardStyles.buttonContainer}>
            <TouchableOpacity style={cardInfoDashboardStyles.button}>
              <Ionicons name="eye-outline" size={18} color="white" />
              <Text style={cardInfoDashboardStyles.buttonText}>Visualizar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={cardInfoDashboardStyles.button}>
              <MaterialCommunityIcons
                name="download-outline"
                size={18}
                color="white"
              />
              <Text style={cardInfoDashboardStyles.buttonText}>Baixar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {activeTab === "opcao3" && (
        <View>
          <View style={cardInfoDashboardStyles.filterIcon}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Ionicons
                name="add-circle-outline"
                size={30}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>
          <View style={cardInfoDashboardStyles.card}>
            <View style={cardInfoDashboardStyles.cardMedicTittle}>
              <Text style={cardInfoDashboardStyles.textHeader}>Atenolol</Text>

              <View style={cardInfoDashboardStyles.caixaActive}>
                <Text style={cardInfoDashboardStyles.caixaActiveText}>
                  Ativo
                </Text>
              </View>
            </View>

            <View style={cardInfoDashboardStyles.caixa}>
              <Text style={cardInfoDashboardStyles.sectionTitle}>Dosagem:</Text>
              <Text style={cardInfoDashboardStyles.sectionContent}>50mg</Text>
            </View>

            <View style={cardInfoDashboardStyles.caixa}>
              <Text style={cardInfoDashboardStyles.sectionTitle}>
                Frequência:
              </Text>
              <Text style={cardInfoDashboardStyles.sectionContent}>
                1x ao dia
              </Text>
            </View>

            <View style={cardInfoDashboardStyles.caixa}>
              <Text style={cardInfoDashboardStyles.sectionTitle}>Duração:</Text>
              <Text style={cardInfoDashboardStyles.sectionContent}>
                30 dias
              </Text>
            </View>

            <View style={cardInfoDashboardStyles.caixaInstru}>
              <Text style={cardInfoDashboardStyles.sectionTitleInfo}>
                Instruções:
              </Text>
              <Text style={cardInfoDashboardStyles.sectionContent}>
                Tomar pela manhã em jejum
              </Text>
            </View>

            <View style={cardInfoDashboardStyles.buttonContainer}>
              <TouchableOpacity style={cardInfoDashboardStyles.button}>
                <Ionicons name="eye-outline" size={18} color="white" />
                <Text style={cardInfoDashboardStyles.buttonText}>
                  Visualizar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={cardInfoDashboardStyles.button}>
                <MaterialCommunityIcons
                  name="download-outline"
                  size={18}
                  color="white"
                />
                <Text style={cardInfoDashboardStyles.buttonText}>Baixar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModalVisible(!modal);
        }}
      >
        <ScrollView>
          <FormMedicamento
            onClose={() => setModalVisible(false)}
            userId={userId}
            onSubmit={(data) => {
              setModalVisible(false);
            }}
          />
        </ScrollView>
      </Modal>
    </>
  );
}
