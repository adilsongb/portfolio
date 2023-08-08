import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from "./pages/admin";
import Portfolio from "./pages/portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
