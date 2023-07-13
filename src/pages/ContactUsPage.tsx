import styles from './ContactUsPage.module.scss';
import ContactForm from '../components/contactPage/ContactForm';

const ContactUsPage = () => {
  return (
    <div className={`${styles.contact} wrapper`}>
      <h2>Contact with us</h2>
      <div className={styles.contact__container}>
        <div className={styles['contact__container--info']}>
          <div>
            <h3>Carent sp. z o.o.</h3>
            <p>ul. Marszałkowska 23/23</p>
            <p>00-721 Warszawa</p>
          </div>
          <div>
            <p>NIP: 756 74 23 2365</p>
            <p>REGON: 383354675</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUsPage;
