import { Link } from 'react-router-dom';
import { GrMail } from 'react-icons/gr';
import { AiFillPhone } from 'react-icons/ai';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.footer__top__logo}>
          <div className={styles.footer__top__logo__img}>
            <img src="/logo.PNG" alt="CompanyLogo" />
            <div>CARENT</div>
          </div>
          <p>
            Carent is a car renting and selling company located in many
            countries across the world which has high quality cars and top rated
            service
          </p>
          <p>Copyright © 2023 CARENT. All rights reserved.</p>
        </div>
        <div className={styles.footer__top__links}>
          <p className={styles.title}>Our Links</p>
          <Link to="/">Home</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Services</Link>
          <Link to="/cars">Models</Link>
          <Link to="/">Blog</Link>
        </div>
        <div className={styles.footer__top__links}>
          <p className={styles.title}>Other Links</p>
          <Link to="/">FAQ</Link>
          <Link to="/">Contact Us</Link>
          <Link to="/">Supports</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
        </div>
        <div>
          <p className={styles.title}>Call Now</p>
          <p className={styles.footer__top__contact}>
            <AiFillPhone />
            796 390 226
          </p>
        </div>
        <div>
          <p className={styles.title}>Mail</p>
          <p className={styles.footer__top__contact}>
            <GrMail />
            carent@yourcar.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
