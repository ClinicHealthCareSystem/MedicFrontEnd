import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');

export default StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  controlBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#ADD8E6',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  calendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0D47AB',
    marginRight: 5,
  },
  calendarIcon: {
    fontSize: 12,
    color: '#0D47AB',
  },
  viewModeButtons: {
    flexDirection: 'row',
    backgroundColor: '#ADD8E6',
    borderRadius: 8,
    padding: 2,
  },
  viewButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
    
  },
  viewButtonActive: {
    backgroundColor: '#3284f1',
  },
  viewButtonText: {
    fontSize: 14,
    color: '#0D47AB',
    fontWeight: '500',
  },
  viewButtonTextActive: {
    color: 'white',
  },
  calendarContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  scheduleContainer: {
    flex: 1,
  },
  daysHeader: {
    flexDirection: 'row',
    backgroundColor: '#ADD8E6',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingVertical: 10,
  },
  timeColumnHeader: {
    width: 60,
  },
  dayHeader: {
    flex: 1,
    alignItems: 'center',
    minWidth: 50,
    right: 10
  },
  dayHeaderSingle: {
    flex: 1,
    minWidth: width - 80,
    
  },
  weekDayText: {
    fontSize: 12,
    color: '#0D47AB',
    marginBottom: 4,
    right: 10
    
  },
  selectedDayText: {
    
    color: 'white',
    fontWeight: '600',
    right: 10
  },
  dayCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    right: 10
  },
  selectedDayCircle: {
    backgroundColor: '#3284f1',
    
  },
  dayNumber: {
    fontSize: 16,
    color: '#0D47AB',
    
  },
  selectedDayNumber: {
    color: 'white',
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
    color: '#0D47AB',
    textAlign: 'right',
  },
  dayColumn: {
    flex: 1,
    minWidth: 100,
    borderLeftWidth: 1,
    borderLeftColor: 'white',
    position: 'relative',
  },
  dayColumnSingle: {
    minWidth: width - 80,
  },
  hourLine: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
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
    color: '#fff',
    fontWeight: '600',
    marginBottom: 2,
  },
  appointmentBlockPatient: {
    fontSize: 13,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  appointmentBlockDescription: {
    fontSize: 11,
    color: '#fff',
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
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    backgroundColor: '#ADD8E6',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  legendText: {
    fontSize: 12,
    color: '#0D47AB',
  },


});