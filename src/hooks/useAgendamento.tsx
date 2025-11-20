import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Agendamento {
  id: string;
  hora: string;
  data: string;
  usuario: {
    nome: string;
  };
}

export function useAgendamento() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAgendamento = async () => {
      try {
        setLoading(true);

        const token = await AsyncStorage.getItem("token");
        if (!token) throw new Error("Token não encontrado");

        const response = await fetch("http://localhost:3000/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Erro ao buscar agendamentos");

        const data = await response.json();
        setAgendamentos(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadAgendamento();
  }, []);

  return { agendamentos, loading, error };
}
