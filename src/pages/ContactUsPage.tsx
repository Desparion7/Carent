import styles from './ContactUsPage.module.scss';
import ContactForm from '../components/contactPage/ContactForm';

const ContactUsPage = () => {
  return (
    <div className={`${styles.contact} wrapper`}>
      <h2>Contact with us</h2>
      <div>
        <div>
          <h3>Company&apos;s Data</h3>
          <p>Carent sp. z o.o.</p>
          <p>ul. Marszałkowska</p>
          <p>00-777 Warszawa</p>
          <p>NIP 777 77 77 7777</p>
          <p>REGON 383354675</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUsPage;
