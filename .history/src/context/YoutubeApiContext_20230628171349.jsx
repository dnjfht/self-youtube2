import { createContext } from "react";
import Youtube from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";

export const YoutubeApiContext = createContext();

export function YoutubeApiProvider({ children }) {
  const youtube = new FakeYoutube();
  // const youtube = new FakeYoutube();

  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
