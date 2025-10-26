
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import HeaderHome from '../componentes/headerHome';

const { width } = Dimensions.get('window');


LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-br';

interface Appointment {
  id: string;
  startTime: string;
  endTime: string;
  patientName: string;
  status: 'Pendente' | 'Confirmado' | 'Cancelado';
  type: 'Consulta' | 'Exame' | 'Retorno';
  description?: string;
}

export default function Agenda(){ 
  const [selectedDate, setSelectedDate] = useState('2024-10-19');
  const [viewMode, setViewMode] = useState<'day' | 'week'>('week');
  const [showCalendar, setShowCalendar] = useState(false);

  
  const appointments: { [key: string]: Appointment[] } = {
    '2024-10-19': [
      {
        id: '1',
        startTime: '09:00',
        endTime: '10:00',
        patientName: 'João Silva',
        status: 'Pendente',
        type: 'Consulta',
        description: 'Consulta de rotina',
      },
      {
        id: '2',
        startTime: '10:00',
        endTime: '11:00',
        patientName: 'Maria Santos',
        status: 'Confirmado',
        type: 'Retorno',
        description: 'Retorno pós-cirúrgico',
      },
      {
        id: '3',
        startTime: '14:00',
        endTime: '15:30',
        patientName: 'Carlos Oliveira',
        status: 'Pendente',
        type: 'Consulta',
      },
    ],
    '2024-10-20': [
      {
        id: '4',
        startTime: '09:00',
        endTime: '10:00',
        patientName: 'Ana Paula',
        status: 'Confirmado',
        type: 'Exame',
      },
      {
        id: '5',
        startTime: '11:00',
        endTime: '12:00',
        patientName: 'Pedro Costa',
        status: 'Confirmado',
        type: 'Consulta',
      },
    ],
    '2024-10-21': [
      {
        id: '6',
        startTime: '10:00',
        endTime: '11:00',
        patientName: 'Fernanda Lima',
        status: 'Pendente',
        type: 'Retorno',
      },
    ],
  };

  const getWeekDates = (date: string) => {
    const current = new Date(date);
    const week = [];
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(current);
      day.setDate(current.getDate() - current.getDay() + i);
      week.push(day.toISOString().split('T')[0]);
    }
    
    return week;
  };

  const weekDates = getWeekDates(selectedDate);
  const displayDates = viewMode === 'week' ? weekDates : [selectedDate];

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Pendente': return '#FFA500';
      case 'Confirmado': return '#4CAF50';
      case 'Cancelado': return '#F44336';
      default: return '#999';
    }
  };

  const getTypeColor = (type: string): string => {
    switch (type) {
      case 'Consulta': return '#2196F3';
      case 'Exame': return '#4CAF50';
      case 'Retorno': return '#FFA500';
      default: return '#999';
    }
  };

  const timeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const calculateHeight = (startTime: string, endTime: string): number => {
    const start = timeToMinutes(startTime);
    const end = timeToMinutes(endTime);
    const duration = end - start;
    return (duration / 60) * 60; 
  };

  const calculateTop = (time: string): number => {
    const minutes = timeToMinutes(time);
    const startOfDay = 8 * 60; 
    return ((minutes - startOfDay) / 60) * 60;
  };

  const hours = Array.from({ length: 12 }, (_, i) => i + 8);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const weekDay = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'][date.getDay()];
    return { day, weekDay };
  };

  const markedDates = {
    [selectedDate]: {
      selected: true,
      selectedColor: '#3284f1',
    },
  };

  return (
    <View style={styles.container}>
    <HeaderHome  titulo="Calendário" 
        mostrarBusca={false}
        mostrarVoltar={true}/>

      
      <View style={styles.controlBar}>
        <TouchableOpacity
          style={styles.calendarButton}
          onPress={() => setShowCalendar(!showCalendar)}
        >
          <Text style={styles.calendarButtonText}>
            {new Date(selectedDate).toLocaleDateString('pt-BR', { 
              day: '2-digit', 
              month: 'long',
              year: 'numeric'
            })}
          </Text>
          <Text style={styles.calendarIcon}>{showCalendar ? '▲' : '▼'}</Text>
        </TouchableOpacity>

        <View style={styles.viewModeButtons}>
          <TouchableOpacity
            style={[styles.viewButton, viewMode === 'day' && styles.viewButtonActive]}
            onPress={() => setViewMode('day')}
          >
            <Text style={[styles.viewButtonText, viewMode === 'day' && styles.viewButtonTextActive]}>
              Dia
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewButton, viewMode === 'week' && styles.viewButtonActive]}
            onPress={() => setViewMode('week')}
          >
            <Text style={[styles.viewButtonText, viewMode === 'week' && styles.viewButtonTextActive]}>
              Semana
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      
      {showCalendar && (
        <View style={styles.calendarContainer}>
          <Calendar
            current={selectedDate}
            onDayPress={(day) => {
              setSelectedDate(day.dateString);
              setShowCalendar(false);
            }}
            markedDates={markedDates}
            theme={{
              backgroundColor: '#ADD8E6',
              calendarBackground: '#ADD8E6',
              selectedDayBackgroundColor: '#3284f1',
              selectedDayTextColor: 'white',
              todayTextColor: 'white',
              dayTextColor: 'white',
              textDisabledColor: 'black',
              arrowColor: "#0D47AB",
              monthTextColor: "#0D47AB",
              
            }}
          />
        </View>
      )}

      
      <ScrollView style={styles.scheduleContainer}>
        
        <View style={styles.daysHeader}>
          <View style={styles.timeColumnHeader} />
          {displayDates.map((date) => {
            const { day, weekDay } = formatDate(date);
            const isSelected = date === selectedDate;
            return (
              <TouchableOpacity
                key={date}
                style={[styles.dayHeader, viewMode === 'day' && styles.dayHeaderSingle]}
                onPress={() => setSelectedDate(date)}
              >
                <Text style={[styles.weekDayText, isSelected && styles.selectedDayText]}>
                  {weekDay}
                </Text>
                <View style={[styles.dayCircle, isSelected && styles.selectedDayCircle]}>
                  <Text style={[styles.dayNumber, isSelected && styles.selectedDayNumber]}>
                    {day}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.scheduleGrid}>
            
            <View style={styles.timeColumn}>
              {hours.map((hour) => (
                <View key={hour} style={styles.timeSlot}>
                  <Text style={styles.timeText}>{`${hour}:00`}</Text>
                </View>
              ))}
            </View>

            
            {displayDates.map((date) => {
              const dayAppointments = appointments[date] || [];
              return (
                <View key={date} style={[styles.dayColumn, viewMode === 'day' && styles.dayColumnSingle]}>
                  
                  {hours.map((hour) => (
                    <View key={hour} style={styles.hourLine} />
                  ))}

                  
                  {dayAppointments.map((apt) => {
                    const height = calculateHeight(apt.startTime, apt.endTime);
                    const top = calculateTop(apt.startTime);
                    
                    return (
                      <TouchableOpacity
                        key={apt.id}
                        style={[
                          styles.appointmentBlock,
                          {
                            height,
                            top,
                            backgroundColor: getTypeColor(apt.type),
                          },
                        ]}
                        activeOpacity={0.8}
                      >
                        <Text style={styles.appointmentBlockTime}>
                          {apt.startTime} - {apt.endTime}
                        </Text>
                        <Text style={styles.appointmentBlockPatient} numberOfLines={2}>
                          {apt.patientName}
                        </Text>
                        {apt.description && (
                          <Text style={styles.appointmentBlockDescription} numberOfLines={1}>
                            {apt.description}
                          </Text>
                        )}
                        <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(apt.status) }]} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </ScrollView>

      
      

      
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#2196F3' }]} />
          <Text style={styles.legendText}>Consulta</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#4CAF50' }]} />
          <Text style={styles.legendText}>Exame</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FFA500' }]} />
          <Text style={styles.legendText}>Retorno</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
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
  },
  dayHeaderSingle: {
    flex: 1,
    minWidth: width - 80,
    
  },
  weekDayText: {
    fontSize: 12,
    color: '#0D47AB',
    marginBottom: 4,
    
  },
  selectedDayText: {
    
    color: 'white',
    fontWeight: '600',
  },
  dayCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
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

