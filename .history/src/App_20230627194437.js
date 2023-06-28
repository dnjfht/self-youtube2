import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Videos from "./pages/Videos";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [{ index: true, element: <Videos /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
