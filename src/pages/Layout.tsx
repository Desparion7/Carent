import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
