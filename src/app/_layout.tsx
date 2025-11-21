import { Stack } from "expo-router";
import { ThemeProvider } from "../hooks/ThemeContext";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="menu" options={{ headerShown: false }} />
        <Stack.Screen name="config" options={{ headerShown: false }} />
        <Stack.Screen name="pacientes" options={{ headerShown: false }} />
        <Stack.Screen name="agenda" options={{ headerShown: false }} />
        <Stack.Screen name="perfil" options={{ headerShown: false }} />
        <Stack.Screen name="CID10" options={{ headerShown: false }} />
        <Stack.Screen name="dashboardMedico" options={{ headerShown: false }} />
        <Stack.Screen
          name="dashboardPaciente"
          options={{ headerShown: false }}
        />
      </Stack>
    </ThemeProvider>
  );
}
