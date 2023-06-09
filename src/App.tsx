import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import CarsPage from './pages/CarsPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        path: '*',
        // element: <ErrorBoundary />,
      },
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/cars',
        element: <CarsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
