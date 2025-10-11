import { useState, useEffect } from "react";

type Paciente = {
id: string;
nome:string;
detalhes: string;
telefone: string;
};

export function usePaciente() {
    
    const [pacientes, setPacientes] = useState<Paciente[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchPacientes = async () =>{
        setError("");
        try{
            const response = await fetch("localHost");

            const data = await response.json();
            console.log("Paciente: ", data);

            if(response.ok){
                setPacientes(data);
            }
            else{
                setError("Erro ao carregar pacientes");
            }

        }
        catch(error) {
            console.log("Erro na equisição:" , error);
            setError("Falhha na conexão com o servidor");

        } finally{
            setLoading(false);
        }
    
};
useEffect(()=>{
    fetchPacientes();
}, []);
return {pacientes, error, loading, fetchPacientes};
}
