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
import styles from "../styles/cid";
import HeaderHome from "../componentes/headerHome";
import { CID10_API } from "../hooks/useCid10Api";
import { useCid10 } from "../hooks/useCId10";
import { Cid10Item } from "../utils/cid10Types";

export default function Cid10() {
  const {busca, setBusca, resultados, carregando} = useCid10();

  const renderItem = ({ item }: {item: Cid10Item}) => (
    <View
      style={styles.cidItem}
      
    >
      <View style={styles.cidItemHeader}>
        <Text style={styles.cidCodigo}>{item.codigo}</Text>
      </View>
      <Text style={styles.cidDescricao}>{item.descricao}</Text>
      <Text style={styles.cidCapitulo}>{item.capitulo}</Text>
    </View>
  );

  return (
    <View style={styles.background}>
      <HeaderHome titulo="CID-10" mostrarBusca={false} mostrarVoltar={true} />

      <View style={styles.containerCid}>
        <View style={styles.buscaContainer}>
          <Ionicons name="search" size={20} color="#0D47AB" style={styles.buscaIcon} />
          <TextInput
            style={styles.buscaInput}
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

        
        <View style={styles.infoContainer}>
          <Text style={styles.infoTexto}>
            {resultados.length}{" "}
            {resultados.length === 1 ? "resultado" : "resultados"}
          </Text>
          
        </View>

        
        {carregando ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
          </View>
        ) : resultados.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="search-outline" size={48} color="#0D47AB" />
            <Text style={styles.emptyTexto}>Nenhum resultado encontrado</Text>
            <Text style={styles.emptySubtexto}>
              Tente buscar por outro termo
            </Text>
          </View>
        ) : (
          <FlatList
            data={resultados}
            renderItem={renderItem}
            keyExtractor={(item) => item.codigo}
            contentContainerStyle={styles.lista}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
}
