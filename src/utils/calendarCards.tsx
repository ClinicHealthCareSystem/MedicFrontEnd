export const getWeekDates = (date: string) => {
  const current = new Date(date);
  const week = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(current);
    day.setDate(current.getDate() - current.getDay() + i);
    week.push(day.toISOString().split("T")[0]);
  }
  return week;
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case "Pendente":
      return "#FFA500";
    case "Confirmado":
      return "#4CAF50";
    case "Cancelado":
      return "#F44336";
    default:
      return "#999";
  }
};

export const getTypeColor = (type: string): string => {
  switch (type) {
    case "Consulta":
      return "#2196F3";
    case "Exame":
      return "#4CAF50";
    case "Retorno":
      return "#FFA500";
    default:
      return "#999";
  }
};

export const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

export const calculateHeight = (startTime: string, endTime: string): number => {
  const start = timeToMinutes(startTime);
  const end = timeToMinutes(endTime);
  const duration = end - start;
  return (duration / 60) * 60;
};

export const calculateTop = (time: string): number => {
  const minutes = timeToMinutes(time);
  const startOfDay = 8 * 60;
  return ((minutes - startOfDay) / 60) * 60;
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const weekDay = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"][
    date.getDay()
  ];
  return { day, weekDay };
};
