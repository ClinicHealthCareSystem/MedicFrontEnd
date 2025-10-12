import {View, ScrollView} from "react-native";
import styles from "../styles/pacientes";
import CardDashboard from "../componentes/cardashboard";
import HeaderHome from "../componentes/headerHome";
export default function DashboardPaciente() {
    return(
        <View style={styles.background}>
            <HeaderHome  titulo = "Prontuario" mostrarBusca={false} mostrarVoltar={true}/>
            <ScrollView>
                <CardDashboard/>
            </ScrollView>
            

        </View>

    )
};