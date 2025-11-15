import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import globalPagesStyles, { pageColors, pageShadows } from "../styles/globalStylesPages";

const { width } = Dimensions.get('window');
export const agendaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pageColors.background,
  },
  controlBar: {
    ...globalPagesStyles.controlBar,
    borderBottomWidth: 1,
    borderBottomColor: pageColors.white,
  },
  calendarButton: globalPagesStyles.row,
  calendarButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: pageColors.primary,
    marginRight: 5,
  },
  calendarIcon: {
    fontSize: 12,
    color: pageColors.primary,
  },
  viewModeButtons: globalPagesStyles.viewModeContainer,
  viewButton: globalPagesStyles.viewModeButton,
  viewButtonActive: globalPagesStyles.viewModeButtonActive,
  viewButtonText: globalPagesStyles.viewModeButtonText,
  viewButtonTextActive: globalPagesStyles.viewModeButtonTextActive,
  calendarContainer: {
    backgroundColor: pageColors.white,
    borderBottomWidth: 1,
    borderBottomColor: pageColors.white,
  },
  scheduleContainer: {
    flex: 1,
  },
  daysHeader: {
    flexDirection: 'row',
    backgroundColor: pageColors.background,
    borderBottomWidth: 1,
    borderBottomColor: pageColors.white,
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
    color: pageColors.primary,
    marginBottom: 4,
    right: 10,
  },
  selectedDayText: {
    color: pageColors.white,
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
    backgroundColor: pageColors.secondary,
  },
  dayNumber: {
    fontSize: 16,
    color: pageColors.primary,
  },
  selectedDayNumber: {
    color: pageColors.white,
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
    color: pageColors.primary,
    textAlign: 'right',
  },
  dayColumn: {
    flex: 1,
    minWidth: 100,
    borderLeftWidth: 1,
    borderLeftColor: pageColors.white,
    position: 'relative',
  },
  dayColumnSingle: {
    minWidth: width - 80,
  },
  hourLine: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: pageColors.white,
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
    color: pageColors.white,
    fontWeight: '600',
    marginBottom: 2,
  },
  appointmentBlockPatient: {
    fontSize: 13,
    color: pageColors.white,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  appointmentBlockDescription: {
    fontSize: 11,
    color: pageColors.white,
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
  legend: globalPagesStyles.legend,
  legendItem: globalPagesStyles.legendItem,
  legendDot: globalPagesStyles.legendDot,
  legendText: globalPagesStyles.legendText,
});