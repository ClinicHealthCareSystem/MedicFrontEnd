import { Text, View, ScrollView } from "react-native";
import HeaderHome from "../componentes/headerHome";
import TabsNavegation from "../componentes/tabsNavegation";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/perfil";
import CardPerfil from "../componentes/cardPerfil";
import CardPerfilInfo from "../componentes/cardPerfilInfo";
import { useState } from "react";


export  default function Perfil(){
    return(
        <View style={styles.background}>

            <HeaderHome titulo="Perfil" mostrarVoltar={true} mostrarBusca={false}/>

            <ScrollView>

            <CardPerfil/>
            <View style={styles.margem}>
            </View>
            <CardPerfilInfo />
            
            </ScrollView>

        </View>

    );
}