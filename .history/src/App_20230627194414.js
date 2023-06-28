import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";

function App() {
  const router = createBrowserRouter([
    {path:"/",
  element:<Root/>,
children:[
  {index:true,
  element:</>
}
]}
  ])
  return <RouterProvider router={router}/>
}

export default App;
