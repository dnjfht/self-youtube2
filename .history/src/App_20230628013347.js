import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Videos from "./pages/Videos";
import NotFoundPage from "./pages/NotFoundPage";
import Detail from "./pages/Detail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Videos /> },
        { path: "/videos", element: <Videos /> },
        { path: "/vidoes/:keyword", element: <Videos /> },
        { path: "/videos/watch/:videoId", element: <Detail /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
