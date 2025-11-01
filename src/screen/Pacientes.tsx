import { View, ScrollView } from "react-native";
import HeaderHome from "../componentes/headerHome";
import styles from "../styles/pacientes"
import CardPaciente from "../componentes/cardpaciente";
type CardTypesPaciente = {
  nome: string;
  detalhes: string;
  telefone : string;
  
  
};
export default function Pacientes(){


    const card: CardTypesPaciente[] = [
    {
      nome: "José",
      detalhes: "40 anos",
      telefone: "(85) 9 99999999"
      
    },
];
    return(

    <View style={styles.background}>
    <HeaderHome mostrarBusca={false} titulo="Pacientes" subTitulo="Gerencie seus Pacientes" mostrarVoltar={true}/>
    <ScrollView>
    {card.map((item) => (
            <CardPaciente
              nome={item.nome}
              detalhes={item.detalhes}
              telefone={item.telefone}
              
            />
          ))}

    </ScrollView>
    </View>
);

}