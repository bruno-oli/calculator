import { createContext, ReactNode, useState } from "react";

interface NumbersContextProps {
  numbers: string;
  setNumbers: (numbers: string) => void;
}

const INITIAL_VALUE = {
  numbers: "0",
  setNumbers: () => {},
};

export const NumbersContext = createContext<NumbersContextProps>(INITIAL_VALUE);

function NumbersProvider({ children }: { children: ReactNode }) {
  const [numbers, setNumbers] = useState(INITIAL_VALUE.numbers);
  return (
    <NumbersContext.Provider value={{ numbers, setNumbers }}>
      {children}
    </NumbersContext.Provider>
  );
}

export default NumbersProvider;
