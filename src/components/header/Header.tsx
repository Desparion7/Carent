import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { GiHamburgerMenu } from 'react-icons/gi';
import MobileNav from './MobileNav';
import styles from './Header.module.scss';

const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: '900px' });
  const navigate = useNavigate();

  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <header className={`${styles.header} ${styles.wrapper}`}>
      <div
        className={`${styles.header__logo} slide-bottom`}
        onClick={() => {
          navigate('/');
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            navigate('/');
          }
        }}
        role="link"
        tabIndex={0}
        aria-label="home"
      >
        <img src="/logo.PNG" alt="CompanyLogo" />
        <p>CARENT</p>
      </div>
      {isDesktop && (
        <nav className={`${styles.header__links} slide-bottom`}>
          <Link to="/">Home</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      )}
      {!isDesktop && (
        <>
          <nav className={styles.header__mobilelinks}>
            <GiHamburgerMenu
              onClick={() => {
                setIsMobileMenu(true);
              }}
            />
          </nav>
          {isMobileMenu && <MobileNav setIsMobileMenu={setIsMobileMenu} />}
        </>
      )}
    </header>
  );
};

export default Header;
