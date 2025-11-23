import { useState, useEffect } from "react";

type Paciente = {
  id: string;
  name: string;
  age: string;
  phone: string;
  appointments: string;
  conditions: string;
};

export function usePacientes() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchPacientes = async () => {
    setError("");
    try {
      const response = await fetch("http://localhost:3000/user/fetchUsers");

      const data = await response.json();

      if (response.ok) {
        setPacientes(data);
      } else {
        setError("Erro ao carregar pacientes");
      }
    } catch (error) {
      setError("Falha na conexão com o servidor");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPacientes();
  }, []);
  return { pacientes, error, loading, fetchPacientes };
}
