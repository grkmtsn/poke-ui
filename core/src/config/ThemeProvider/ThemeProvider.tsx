import * as React from "react";
import { ThemeType } from "../../types";
import { createTheme } from "../../theme/stitches.config";

type AvailableThemes = {
  [x: string]: string;
};

type ThemeProviderProps = {
  defaultTheme?: ThemeType;
  children: React.ReactNode;
};

type ThemeContextValueType = {
  theme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
};

const grassTheme = createTheme({ type: "grass", className: "grass" });
const fireTheme = createTheme({ type: "fire", className: "fire" });

const availableThemes: AvailableThemes = {
  grass: grassTheme.className, // default theme
  fire: fireTheme.className,
};

const defaultContext: ThemeContextValueType = {
  theme: "grass",
  changeTheme: () => {},
};

const { createContext, useState, useEffect } = React;
export const ThemeContext =
  createContext<ThemeContextValueType>(defaultContext);

const saveTheme = (theme: ThemeType) => {
  try {
    if (typeof theme === "string") window.localStorage.setItem("theme", theme);
  } catch (e) {
    console.warn(e);
  }
};

const getSavedThemePreference = (defaultTheme: ThemeType): ThemeType => {
  try {
    const savedTheme = window.localStorage.getItem("theme") as ThemeType;
    if (typeof savedTheme === "string") return savedTheme;
  } catch (e) {
    console.warn(e);
    saveTheme(defaultTheme);
    return defaultTheme;
  }
  saveTheme(defaultTheme);
  return defaultTheme;
};

const useTheme = (
  defaultTheme: ThemeType = "grass"
): [ThemeType, (theme: ThemeType) => void] => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(defaultTheme);
  const html = document.documentElement;

  const applyTheme = (newTheme: ThemeType) => {
    html.classList.remove(availableThemes[currentTheme]);
    html.classList.add(availableThemes[newTheme]);
    setCurrentTheme(newTheme);
  };

  let savedTheme = getSavedThemePreference(defaultTheme);

  html.classList.add(availableThemes[savedTheme]);

  useEffect(() => {
    setCurrentTheme(savedTheme);
  }, [savedTheme]);

  const changeTheme = (theme: ThemeType): void => {
    applyTheme(theme);
    saveTheme(theme);
  };

  return [currentTheme, changeTheme];
};

const ThemeProvider = ({ defaultTheme, children }: ThemeProviderProps) => {
  const [currentTheme, changeTheme] = useTheme(defaultTheme);
  const memoizedValue = React.useMemo(
    () => ({
      theme: currentTheme,
      changeTheme: changeTheme,
    }),
    [currentTheme, changeTheme]
  );

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextValueType => {
  return React.useContext(ThemeContext);
};

export default ThemeProvider;
