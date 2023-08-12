import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from "./pages/admin";
import Portfolio from "./pages/portfolio";
import GlobalStyle from "./styles/GlobalStyle";

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
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
