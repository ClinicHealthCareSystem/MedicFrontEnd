import { View, Text, FlatList } from "react-native";
import styles from "../stylesComponents/cardAgendados";



export default function CardAgendados() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Agenda de Hoje</Text>
      </View>

      <View>
          <View style={styles.item}>
            <View style={styles.info}>
              <Text style={styles.nome}>nome</Text>
              <Text style={styles.hora}>hora</Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}> </Text>
            </View>
          </View>
    </View>
    </View>
  );
}
