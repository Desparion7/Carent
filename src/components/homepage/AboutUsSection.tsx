import styles from './AboutUsSection.module.scss';

const AboutUsSection = () => {
  return (
    <div className={`${styles.aboutUs} ${styles.wrapper}`}>
      <h2>Best Experience With Our Rental Deals</h2>
      <div className={styles.aboutUs__container}>
        <div className={styles.aboutUs__container__img}>
          <img src="./porsche.png" alt="Porsche" />
        </div>
        <div className={styles.aboutUs__container__text}>
          <p>
            We are delighted to introduce ourselves as your trusted car rental
            company, providing exceptional services tailored to meet your
            transportation needs. At our company, we strive to make your journey
            as comfortable and convenient as possible, offering a wide range of
            well-maintained vehicles for rent.
          </p>
          <p>
            Our primary objective is to ensure your satisfaction and exceed your
            expectations every time you choose us for your car rental
            requirements. Whether you&apos;re planning a family vacation, a
            business trip, or simply need a vehicle for daily commuting, we have
            the perfect car to suit your preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
