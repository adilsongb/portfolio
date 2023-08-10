import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from "./pages/admin";
import Portfolio from "./pages/portfolio";
import GlobalStyle from "./styles/GlobalStyle";
import { useSettings } from "./hooks/useSettings";

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
  const { loadInitial, getColors } = useSettings();

  if (loadInitial) {
    return (
      <main />
    );
  }

  const colors = getColors(true); // true is DarkMode

  return (
    <>
      <GlobalStyle $bgColor={colors.secondary} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
