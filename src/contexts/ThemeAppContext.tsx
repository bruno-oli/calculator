import React, { createContext } from "react";

export type ThemeType = "first" | "second" | "third";

interface ThemeAppContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const INITIAL_VALUES: ThemeAppContextProps = {
  theme: "first",
  setTheme: () => {},
};

export const ThemeAppContext =
  createContext<ThemeAppContextProps>(INITIAL_VALUES);

function ThemeAppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<ThemeType>(INITIAL_VALUES.theme);

  return (
    <ThemeAppContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeAppContext.Provider>
  );
}

export default ThemeAppProvider;
