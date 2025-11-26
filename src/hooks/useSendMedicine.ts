import { useState } from "react";

export function useSendMedicine() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMedicine = async (medicineData: any) => {
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:3000/medicines/sendMedicine`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(medicineData),
        }
      );

      const json = await response.json();

      if (!response.ok) {
        setError("Erro ao receitar remédio");
        setLoading(false);
        return { success: false, error: "Erro ao receitar remédio", json };
      }

      setLoading(false);
      return { success: true, json };
    } catch (e) {
      setError("Erro de conexão");
      setLoading(false);
      return { success: false, error: "Erro de conexão" };
    }
  };

  return { error, loading, handleSendMedicine };
}
