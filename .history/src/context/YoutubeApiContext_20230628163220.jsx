import { createContext } from "react";
import Youtube from "../api/youtube";

export const YoutubeApiContext = createContext();

export function YoutubeApiProvider({ children }) {
  const youtube = new Youtube();
  // const youtube = new FakeYoutube();

  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
