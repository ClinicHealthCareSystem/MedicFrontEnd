import {View, ScrollView} from "react-native";
import HeaderHome from "../componentes/headerHome";
import styles from "../styles/pacientes";
import CardCounts from "../componentes/cardCounts";
import CardAgendados from "../componentes/cardAgendados";
import CardNotificacao from "../componentes/cardNotificacao";
export default function DashboardMedico(){
    return(
            <View style={styles.background}>
                <HeaderHome  titulo = "Dashboard" mostrarBusca={false} mostrarVoltar={true}/>
                <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}>
                    <CardCounts titulo="Pacientes Hoje" valor="0" />
                    <CardCounts titulo="Total de Pacientes" valor="3" />
                    <CardCounts titulo="Consultas no Mês" valor="47" />
                    <CardCounts titulo="Exames Pendentes" valor="2" />
                </ScrollView>
                <ScrollView>
                    <CardAgendados />
                    <CardNotificacao />
                </ScrollView>
            </View>
    )

};