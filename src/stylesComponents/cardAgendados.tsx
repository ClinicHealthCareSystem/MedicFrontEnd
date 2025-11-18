import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalStyles, { colors, shadows } from "../styles/globalStyles"


export const cardAgendadoStyles = StyleSheet.create({
  card: {
    ...globalStyles.cardLarge,
    padding: 15,
    ...shadows.strong,
  },
  header: {
    ...globalStyles.headerBase,
    marginBottom: 15,
    paddingBottom: 8,
  },
  headerTop: globalStyles.rowBetween,
  title: {
    ...globalStyles.headerText,
    marginBottom: 4,
  },
  subtitle: {
    ...globalStyles.textWhite,
    fontSize: 13,
  },
  filterIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  item: {
    ...globalStyles.itemBase,
    padding: 14,
  },
  info: {
    flex: 1,
    flexDirection: "column",
  },
  nome: {
    ...globalStyles.textPrimary,
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 4,
  },
  especialidade: {
    color: colors.black,
    fontSize: 12,
    marginBottom: 4,
  },
  horaContainer: globalStyles.row,
  hora: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "600",
  },
  statusContainer: globalStyles.statusBadge,
  agendado: globalStyles.statusBadgeAgendado,
  confirmado: globalStyles.statusBadgeConfirmado,
  statusText: {
    fontWeight: "bold",
    fontSize: 12,
  },
  statusTextAgendado: globalStyles.statusTextAgendado,
  statusTextConfirmado: globalStyles.statusTextConfirmado,
  emptyContainer: globalStyles.emptyContainer,
  emptyText: globalStyles.emptyText,
});