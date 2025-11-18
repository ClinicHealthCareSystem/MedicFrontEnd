import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import getGlobalStyles from "./globalStyles";

const { width } = Dimensions.get('window');

export const getAgendaStyles = (colors) => {
  const globalStyles = getGlobalStyles(colors);
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    controlBar: {
      ...globalStyles.controlBar,
      borderBottomWidth: 1,
      borderBottomColor: colors.white,
    },
    calendarButton: globalStyles.row,
    calendarButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.primary,
      marginRight: 5,
    },
    calendarIcon: {
      fontSize: 12,
      color: colors.primary,
    },
    viewModeButtons: globalStyles.viewModeContainer,
    viewButton: globalStyles.viewModeButton,
    viewButtonActive: globalStyles.viewModeButtonActive,
    viewButtonText: globalStyles.viewModeButtonText,
    viewButtonTextActive: globalStyles.viewModeButtonTextActive,
    calendarContainer: {
      backgroundColor: colors.white,
      borderBottomWidth: 1,
      borderBottomColor: colors.white,
    },
    scheduleContainer: {
      flex: 1,
    },
    daysHeader: {
      flexDirection: 'row',
      backgroundColor: colors.background,
      borderBottomWidth: 1,
      borderBottomColor: colors.white,
      paddingVertical: 10,
    },
    timeColumnHeader: {
      width: 60,
    },
    dayHeader: {
      flex: 1,
      alignItems: 'center',
      minWidth: 50,
      right: 10,
    },
    dayHeaderSingle: {
      flex: 1,
      minWidth: width - 80,
    },
    weekDayText: {
      fontSize: 12,
      color: colors.primary,
      marginBottom: 4,
      right: 10,
    },
    selectedDayText: {
      color: colors.white,
      fontWeight: '600',
      right: 10,
    },
    dayCircle: {
      width: 36,
      height: 36,
      borderRadius: 18,
      justifyContent: 'center',
      alignItems: 'center',
      right: 10,
    },
    selectedDayCircle: {
      backgroundColor: colors.secondary,
    },
    dayNumber: {
      fontSize: 16,
      color: colors.primary,
    },
    selectedDayNumber: {
      color: colors.white,
      fontWeight: 'bold',
    },
    scheduleGrid: {
      flexDirection: 'row',
      paddingBottom: 20,
    },
    timeColumn: {
      width: 60,
      paddingTop: 5,
    },
    timeSlot: {
      height: 60,
      justifyContent: 'flex-start',
      paddingRight: 8,
    },
    timeText: {
      fontSize: 12,
      color: colors.primary,
      textAlign: 'right',
    },
    dayColumn: {
      flex: 1,
      minWidth: 100,
      borderLeftWidth: 1,
      borderLeftColor: colors.white,
      position: 'relative',
    },
    dayColumnSingle: {
      minWidth: width - 80,
    },
    hourLine: {
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: colors.white,
    },
    appointmentBlock: {
      position: 'absolute',
      left: 2,
      right: 2,
      borderRadius: 6,
      padding: 8,
      overflow: 'hidden',
      minHeight: 50,
    },
    appointmentBlockTime: {
      fontSize: 11,
      color: colors.white,
      fontWeight: '600',
      marginBottom: 2,
    },
    appointmentBlockPatient: {
      fontSize: 13,
      color: colors.white,
      fontWeight: 'bold',
      marginBottom: 2,
    },
    appointmentBlockDescription: {
      fontSize: 11,
      color: colors.white,
      opacity: 0.9,
    },
    statusIndicator: {
      position: 'absolute',
      top: 4,
      right: 4,
      width: 8,
      height: 8,
      borderRadius: 4,
    },
    legend: globalStyles.legend,
    legendItem: globalStyles.legendItem,
    legendDot: globalStyles.legendDot,
    legendText: globalStyles.legendText,
  });
};