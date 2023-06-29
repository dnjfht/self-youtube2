import { createContext } from "react";

export const YoutubeApiContext = createContext();

export function YoutubeApiProvider({ children }) {
  return <YoutubeApiContext.Provider>{children}</YoutubeApiContext.Provider>;
}
