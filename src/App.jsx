import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Portfolio from "./pages/portfolio";
import Admin from "./pages/admin";

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
