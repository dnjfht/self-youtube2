import { createContext } from "react";
import Youtube from "../api/youtube";
// import FakeYoutube from "../api/fakeYoutube";
import YoutubeClient from "../api/youtubeClient";

export const YoutubeApiContext = createContext();

export function YoutubeApiProvider({ children }) {
  const client = new YoutubeClient();
  const youtube = new Youtube(client);
  // const youtube = new FakeYoutube();

  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
