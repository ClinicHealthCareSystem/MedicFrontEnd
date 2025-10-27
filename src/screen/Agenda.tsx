import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import HeaderHome from "../componentes/headerHome";
import Legenda from "../componentes/legendaCalendario";
import styles from "../styles/agenda";

import { Appointment } from "../utils/calendarTypes";
import {
  getWeekDates,
  getStatusColor,
  getTypeColor,
  calculateHeight,
  calculateTop,
  formatDate,
} from "../utils/calendarCards";

import "../utils/calendarConfig";

export default function Agenda() {
const appointments: { [key: string]: Appointment[] } = {
  "2024-10-19": [
    {
      id: "1",
      startTime: "09:00",
      endTime: "10:00",
      patientName: "João Silva",
      status: "Pendente",
      type: "Consulta",
      description: "Consulta de rotina",
    },
    {
      id: "2",
      startTime: "10:00",
      endTime: "11:00",
      patientName: "Maria Santos",
      status: "Confirmado",
      type: "Retorno",
      description: "Retorno pós-cirúrgico",
    },
  ],
  "2024-10-20": [
    {
      id: "3",
      startTime: "09:00",
      endTime: "10:00",
      patientName: "Ana Paula",
      status: "Confirmado",
      type: "Exame",
    },
  ],
};
  const [selectedDate, setSelectedDate] = useState("2024-10-19");
  const [viewMode, setViewMode] = useState<"day" | "week">("week");
  const [showCalendar, setShowCalendar] = useState(false);

  const weekDates = getWeekDates(selectedDate);
  const displayDates = viewMode === "week" ? weekDates : [selectedDate];
  const hours = Array.from({ length: 12 }, (_, i) => i + 8);

  const markedDates = {
    [selectedDate]: { selected: true, selectedColor: "#3284f1" },
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
      
      <Legenda />
    </View>
  );
};
