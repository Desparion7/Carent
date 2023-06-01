import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import styles from './MobileNav.module.scss';

interface PropsMobileNav {
  setIsMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ setIsMobileMenu }: PropsMobileNav) => {
  const [menuAnimation, setMenuAnimation] = useState(styles.show_menu);

  const handlerHideMenu = useCallback(() => {
    setTimeout(() => {
      setIsMobileMenu(false);
    }, 150);
    setMenuAnimation(styles.hide_menu);
  }, [setIsMobileMenu]);

  return (
    <div className={styles.mobileMenu}>
      <div className={`${styles.mobileMenu__main}  ${menuAnimation}`}>
        <nav className={styles.mobileMenu__main__links}>
          <MdClose onClick={handlerHideMenu} />
          <Link to="/">Home</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
      <div
        className={styles.mobileMenu__backdrop}
        onClick={handlerHideMenu}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handlerHideMenu();
          }
        }}
        role="link"
        tabIndex={0}
        aria-label="backdrop"
      />
    </div>
  );
};

export default MobileNav;
