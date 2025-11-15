import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import {tabsNavegationDashStyles} from "../stylesComponents/tabsNavegationDash";

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
    <View style={tabsNavegationDashStyles.tabsCaixa}>
      {tabs.map((tab) => (
        <TouchableOpacity key={tab.value} style={tabsNavegationDashStyles.tabButtonPerfil}
          onPress={() => onPress(tab.value)}>
          <Text style={[tabsNavegationDashStyles.tabTextPerfil,]}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
