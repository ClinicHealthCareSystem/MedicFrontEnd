import {View, ScrollView} from "react-native";
import HeaderHome from "../componentes/headerHome";
import styles from "../styles/pacientes";
import CardCounts from "../componentes/cardCounts";
export default function DashboardMedico(){
    return(
            <View style={styles.background}>
                <HeaderHome  titulo = "Dashboard" mostrarBusca={false} mostrarVoltar={true}/>
                <ScrollView>
                    <CardCounts />

                </ScrollView>
            </View>
    )

};