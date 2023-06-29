import { createContext } from "react";
import Youtube from "../api/youtube";
// import FakeYoutube from "../api/fakeYoutube";
import YoutubeClient from "../api/youtubeClient";
import FakeYoutubeClient from "../api/fakeYoutubeClient";

export const YoutubeApiContext = createContext();

export function YoutubeApiProvider({ children }) {
  const client = new FakeYoutubeClient();
  const youtube = new Youtube(client);
  // const youtube = new FakeYoutube();

  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
