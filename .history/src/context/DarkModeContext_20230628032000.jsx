import { createContext } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider() {
  return <DarkModeContext.Provider></DarkModeContext.Provider>;
}
