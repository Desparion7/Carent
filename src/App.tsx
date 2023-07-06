import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import CarsPage from './pages/CarsPage';
import CarPage from './pages/CarPage';
import LoadingSpinner from './components/ui/LoadingSpinner';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';

const LazyHomePage = lazy(() => import('./pages/HomePage'));

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
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LazyHomePage />
          </Suspense>
        ),
      },
      {
        path: '/cars',
        element: <CarsPage />,
      },
      {
        path: '/aboutus',
        element: <AboutUsPage />,
      },
      {
        path: '/contact',
        element: <ContactUsPage />,
      },
      {
        path: '/:name',
        element: <CarPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
