import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
background: {
    flex: 1,
    backgroundColor: "#ADD8E6",
  },
containerCid: {
  flex: 1,
  padding: 16,
},
buscaContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#F5F5F5',
  borderRadius: 12,
  paddingHorizontal: 12,
  paddingVertical: 10,
  marginBottom: 16,
},
buscaIcon: {
  marginRight: 8,
},
buscaInput: {
  flex: 1,
  fontSize: 16,
  color: '#333',
},
infoContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 12,
},
infoTexto: {
  fontSize: 14,
  color: '#666',
},
btnLimparSelecao: {
  paddingHorizontal: 12,
  paddingVertical: 6,
},
btnLimparTexto: {
  fontSize: 14,
  color: '#007AFF',
},
lista: {
  paddingBottom: 100,
},
cidItem: {
  backgroundColor: '#FFF',
  borderRadius: 12,
  padding: 16,
  marginBottom: 12,
  borderWidth: 1,
  borderColor: '#E0E0E0',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.05,
  shadowRadius: 4,
  elevation: 2,
},
cidItemSelecionado: {
  borderColor: '#4CAF50',
  borderWidth: 2,
  backgroundColor: '#F1F8F4',
},
cidItemHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 8,
},
cidCodigo: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#007AFF',
},
cidDescricao: {
  fontSize: 16,
  color: '#333',
  marginBottom: 6,
  lineHeight: 22,
},
cidCapitulo: {
  fontSize: 13,
  color: '#666',
  fontStyle: 'italic',
},
loadingContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
emptyContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 60,
},
emptyTexto: {
  fontSize: 18,
  color: '#999',
  marginTop: 16,
  fontWeight: '600',
},
emptySubtexto: {
  fontSize: 14,
  color: '#BBB',
  marginTop: 8,
},

})