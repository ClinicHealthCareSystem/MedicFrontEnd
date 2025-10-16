import {View, ScrollView} from "react-native";
import { useState } from "react";
import styles from "../styles/pacientes";
import CardDashboard from "../componentes/cardashboard";
import HeaderHome from "../componentes/headerHome";
import TabsNavegationDash from "../componentes/tabsNavegationDash";
import CardInfoDashboard from "../componentes/cardInfoDashboard";
export default function DashboardPaciente() {
     const [activeTab, setActiveTab] = useState<"opcao1" | "opcao2" | "opcao3">(
    "opcao1"
  );
    return(
        <View style={styles.background}>
            <HeaderHome  titulo = "Prontuario" mostrarBusca={false} mostrarVoltar={true}/>
            <ScrollView>
                <CardDashboard/>
                <TabsNavegationDash
                activeTab={activeTab}
                tabs={[
              {label: "Prontuario", value: "opcao1"},
              {label: "Enxames", value: "opcao2"},
              {label: "Medicamentos", value: "opcao3"},
            ]}
            onPress={(value) => setActiveTab(value as "opcao1" | "opcao2" | "opcao3")}
            />
            <CardInfoDashboard activeTab={activeTab} />
            

            </ScrollView>
            

        </View>

    )
};