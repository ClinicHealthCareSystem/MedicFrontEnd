export interface Appointment {
  id: string;
  startTime: string;
  endTime: string;
  patientName: string;
  status: "Pendente" | "Confirmado" | "Cancelado";
  type: "Consulta" | "Exame" | "Retorno";
  description?: string;
}
