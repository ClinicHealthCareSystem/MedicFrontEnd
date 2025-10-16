import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import styles from "../stylesComponents/tabsNavegationDash";

type Tab ={
label: string;
value: string;
};


type Props = {
  tabs: Tab[];
  activeTab: string;
  onPress: (value: string) => void;
};

export default function TabsNavegationDash({ tabs,  onPress }: Props) {
  return (
    <View style={styles.tabsCaixa}>
      {tabs.map((tab) => (
        <TouchableOpacity key={tab.value} style={styles.tabButtonPerfil}
          onPress={() => onPress(tab.value)}>
          <Text style={[styles.tabTextPerfil,]}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
