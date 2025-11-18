import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import HeaderHome from "../componentes/headerHome";
import Legenda from "../componentes/legendaCalendario";
import { getAgendaStyles } from "../styles/agenda";
import { useTheme } from "../hooks/ThemeContext";

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
  const { colors } = useTheme();
  const agendaStyles = getAgendaStyles(colors);

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
    [selectedDate]: { selected: true, selectedColor: colors.secondary },
  };

  return (
    <View style={agendaStyles.container}>
      <HeaderHome titulo="Calendário" mostrarBusca={false} mostrarVoltar={true} />

      <View style={agendaStyles.controlBar}>
        <TouchableOpacity
          style={agendaStyles.calendarButton}
          onPress={() => setShowCalendar(!showCalendar)}
        >
          <Text style={agendaStyles.calendarButtonText}>
            {new Date(selectedDate).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </Text>
          <Text style={agendaStyles.calendarIcon}>{showCalendar ? "▲" : "▼"}</Text>
        </TouchableOpacity>

        <View style={agendaStyles.viewModeButtons}>
          <TouchableOpacity
            style={[
              agendaStyles.viewButton,
              viewMode === "day" && agendaStyles.viewButtonActive,
            ]}
            onPress={() => setViewMode("day")}
          >
            <Text
              style={[
                agendaStyles.viewButtonText,
                viewMode === "day" && agendaStyles.viewButtonTextActive,
              ]}
            >
              Dia
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              agendaStyles.viewButton,
              viewMode === "week" && agendaStyles.viewButtonActive,
            ]}
            onPress={() => setViewMode("week")}
          >
            <Text
              style={[
                agendaStyles.viewButtonText,
                viewMode === "week" && agendaStyles.viewButtonTextActive,
              ]}
            >
              Semana
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {showCalendar && (
        <View style={agendaStyles.calendarContainer}>
          <Calendar
            current={selectedDate}
            onDayPress={(day) => {
              setSelectedDate(day.dateString);
              setShowCalendar(false);
            }}
            markedDates={markedDates}
            theme={{
              backgroundColor: colors.background,
              calendarBackground: colors.background,
              selectedDayBackgroundColor: colors.secondary,
              selectedDayTextColor: colors.white,
              todayTextColor: colors.white,
              dayTextColor: colors.white,
              textDisabledColor: colors.black,
              arrowColor: colors.primary,
              monthTextColor: colors.primary,
            }}
          />
        </View>
      )}

      <ScrollView style={agendaStyles.scheduleContainer}>
        <View style={agendaStyles.daysHeader}>
          <View style={agendaStyles.timeColumnHeader} />
          {displayDates.map((date) => {
            const { day, weekDay } = formatDate(date);
            const isSelected = date === selectedDate;
            return (
              <TouchableOpacity
                key={date}
                style={[
                  agendaStyles.dayHeader,
                  viewMode === "day" && agendaStyles.dayHeaderSingle,
                ]}
                onPress={() => setSelectedDate(date)}
              >
                <Text
                  style={[
                    agendaStyles.weekDayText,
                    isSelected && agendaStyles.selectedDayText,
                  ]}
                >
                  {weekDay}
                </Text>
                <View
                  style={[
                    agendaStyles.dayCircle,
                    isSelected && agendaStyles.selectedDayCircle,
                  ]}
                >
                  <Text
                    style={[
                      agendaStyles.dayNumber,
                      isSelected && agendaStyles.selectedDayNumber,
                    ]}
                  >
                    {day}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={agendaStyles.scheduleGrid}>
            <View style={agendaStyles.timeColumn}>
              {hours.map((hour) => (
                <View key={hour} style={agendaStyles.timeSlot}>
                  <Text style={agendaStyles.timeText}>{`${hour}:00`}</Text>
                </View>
              ))}
            </View>

            {displayDates.map((date) => {
              const dayAppointments = appointments[date] || [];
              return (
                <View
                  key={date}
                  style={[
                    agendaStyles.dayColumn,
                    viewMode === "day" && agendaStyles.dayColumnSingle,
                  ]}
                >
                  {hours.map((hour) => (
                    <View key={hour} style={agendaStyles.hourLine} />
                  ))}

                  {dayAppointments.map((apt) => {
                    const height = calculateHeight(apt.startTime, apt.endTime);
                    const top = calculateTop(apt.startTime);

                    return (
                      <TouchableOpacity
                        key={apt.id}
                        style={[
                          agendaStyles.appointmentBlock,
                          {
                            height,
                            top,
                            backgroundColor: getTypeColor(apt.type),
                          },
                        ]}
                        activeOpacity={0.8}
                      >
                        <Text style={agendaStyles.appointmentBlockTime}>
                          {apt.startTime} - {apt.endTime}
                        </Text>
                        <Text
                          style={agendaStyles.appointmentBlockPatient}
                          numberOfLines={2}
                        >
                          {apt.patientName}
                        </Text>
                        {apt.description && (
                          <Text
                            style={agendaStyles.appointmentBlockDescription}
                            numberOfLines={1}
                          >
                            {apt.description}
                          </Text>
                        )}
                        <View
                          style={[
                            agendaStyles.statusIndicator,
                            { backgroundColor: getStatusColor(apt.status) },
                          ]}
                        />
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
}
