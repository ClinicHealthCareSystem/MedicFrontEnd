import { useEffect, useState } from "react";

interface UserProfile {
  name: string;
  email: string;
  CRM: string;
  created_at: string;
  specialty: string;
}

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("http://localhost:3000/medic/profile", {});

        if (!response.ok) {
          throw new Error("Error when searching profile");
        }

        const data = await response.json();
        setProfile(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  return { profile, loading, error };
}
