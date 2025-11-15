import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  ListRenderItem,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {cidStyles} from "../styles/cid";
import HeaderHome from "../componentes/headerHome";
import { CID10_API } from "../hooks/useCid10Api";
import { useCid10 } from "../hooks/useCId10";
import { Cid10Item } from "../utils/cid10Types";

export default function Cid10() {
  const {busca, setBusca, resultados, carregando} = useCid10();

  const renderItem = ({ item }: {item: Cid10Item}) => (
    <View
      style={cidStyles.cidItem}
      
    >
      <View style={cidStyles.cidItemHeader}>
        <Text style={cidStyles.cidCodigo}>{item.codigo}</Text>
      </View>
      <Text style={cidStyles.cidDescricao}>{item.descricao}</Text>
      <Text style={cidStyles.cidCapitulo}>{item.capitulo}</Text>
    </View>
  );

  return (
    <View style={cidStyles.background}>
      <HeaderHome titulo="CID-10" mostrarBusca={false} mostrarVoltar={true} />

      <View style={cidStyles.containerCid}>
        <View style={cidStyles.buscaContainer}>
          <Ionicons name="search" size={20} color="#0D47AB" style={cidStyles.buscaIcon} />
          <TextInput
            style={cidStyles.buscaInput}
            placeholder="Buscar por código, doença ou capítulo..."
            value={busca}
            onChangeText={setBusca}
            placeholderTextColor="#0D47AB"
          />
          {busca.length > 0 && (
            <TouchableOpacity onPress={() => setBusca("")}>
              <Ionicons name="close-circle" size={20} color="#0D47AB" />
            </TouchableOpacity>
          )}
        </View>

        
        <View style={cidStyles.infoContainer}>
          <Text style={cidStyles.infoTexto}>
            {resultados.length}{" "}
            {resultados.length === 1 ? "resultado" : "resultados"}
          </Text>
          
        </View>

        
        {carregando ? (
          <View style={cidStyles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
          </View>
        ) : resultados.length === 0 ? (
          <View style={cidStyles.emptyContainer}>
            <Ionicons name="search-outline" size={48} color="#0D47AB" />
            <Text style={cidStyles.emptyTexto}>Nenhum resultado encontrado</Text>
            <Text style={cidStyles.emptySubtexto}>
              Tente buscar por outro termo
            </Text>
          </View>
        ) : (
          <FlatList
            data={resultados}
            renderItem={renderItem}
            keyExtractor={(item) => item.codigo}
            contentContainerStyle={cidStyles.lista}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
}
