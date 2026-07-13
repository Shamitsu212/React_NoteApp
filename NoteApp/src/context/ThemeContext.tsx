import {createContext, useState, useEffect, type ReactNode, type SetStateAction,} from "react";

import type React from "react";

interface ContextProps {

  theme: string;
  setTheme: React.Dispatch<SetStateAction<string>>;

}

export const ThemeContext = createContext<ContextProps | null>(null);

interface ProviderProps {

  children: ReactNode;

}

export function ThemeProvider({ children }: ProviderProps) {

  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme",theme);
  }, [theme]);

  return (

    <ThemeContext.Provider value={{ theme, setTheme }}>

      {children}

    </ThemeContext.Provider>

  );
}