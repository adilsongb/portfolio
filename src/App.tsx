import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Admin from './pages/admin';
import Portfolio from './pages/portfolio';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import GlobalStyle from '@styles/GlobalStyle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Portfolio />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/politica-privacidade-moneyfy',
    element: <PoliticaPrivacidade />,
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
