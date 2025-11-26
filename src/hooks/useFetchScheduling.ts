import { useEffect, useState } from "react";

export function useFetchScheduling() {
  const [loading, setLoading] = useState(true);
  const [schedulings, setSchedulings] = useState([]);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      setLoading(true);

      const response = await fetch(`http://localhost:3000/medic/schedulings`);

      const json = await response.json();
      console.log(json);
      setSchedulings(json);
    } catch (e) {
      setError("Erro ao carregar agendamentos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return { schedulings, loading, error, reload: load };
}
