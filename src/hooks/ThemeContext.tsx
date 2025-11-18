import React, { createContext, useState, useContext, ReactNode } from 'react';
import { lightColors } from '../styles/globalStyles';

interface Theme {
  primary: string;
  secondary: string;
  background: string;
  white: string;
  black: string;
  lightGray: string;
  textGray: string;
  red: string;
  blue: string;
  statusAgendado: string;
  statusAgendadoText: string;
  statusConfirmado: string;
  statusConfirmadoText: string;
}

interface ThemeContextType {
  theme: 'light' | 'dark';
  colors: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const darkColors: Theme = {
  ...lightColors,
  primary: '#000000',
  secondary: '#000000',
  background: '#000000',
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const colors = theme === 'light' ? lightColors : darkColors;

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
