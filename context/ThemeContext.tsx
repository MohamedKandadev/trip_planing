// ThemeContext.js
import React, {createContext, useState, useContext, ReactNode, FC} from 'react';
import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from '../constant/colors';
import {Theme} from '../types/interfaces/constant';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  isDarkTheme: boolean;
  setUseSystemTheme: (UseSystemTheme: boolean) => void;
  setColor: (colorDark: string, colorLight: string) => string;
  useSystemTheme: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
  const systemTheme = useColorScheme();
  const [useSystemTheme, setUseSystemTheme] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    if (useSystemTheme) setUseSystemTheme(false);
    setIsDarkTheme(!isDarkTheme);
  };

  const setColor = (colorDark: string, colorLight: string) =>
    isDarkTheme ? colorDark : colorLight;

  const theme: Theme = useSystemTheme
    ? systemTheme === 'dark'
      ? darkTheme
      : lightTheme
    : isDarkTheme
    ? darkTheme
    : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        setUseSystemTheme,
        useSystemTheme,
        theme,
        toggleTheme,
        isDarkTheme,
        setColor,
      }}>
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
