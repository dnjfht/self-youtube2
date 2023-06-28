import { createContext } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  return <DarkModeContext.Provider>{children}</DarkModeContext.Provider>;
}
