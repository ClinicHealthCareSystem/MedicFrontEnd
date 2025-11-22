import { useState } from "react";

export function useSendMedicine() {
  const [error, setError] = useState("");

  const handleSendMedicine = async (medicineData: any) => {
    setError("");

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
        return { error: true, json };
      }

      return { success: true, json };
    } catch (error) {
      setError("Erro de conexão");
      return { error: true };
    }
  };

  return { error, handleSendMedicine };
}
