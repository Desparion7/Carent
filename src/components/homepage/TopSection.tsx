import styles from './TopSection.module.scss';
import Button from '../ui/Button';

const TopSection = () => {
  return (
    <div className={styles.topSection}>
      <video className={styles.video} src="car.mp4" autoPlay muted />
      <div className={`${styles.topSection__text} ${styles.showText}`}>
        <h1>Rent Your Dream Car&apos;s With Us</h1>
      </div>
      <div className={styles.topSection__carinfo}>
        <p className={styles.topSection__carinfo__title}>Lamborghini Veneno</p>
        <p className={styles.topSection__carinfo__text}>
          The car is powered by a 6.5-liter V12 engine that generates 750 hp.
        </p>
        <p className={styles.topSection__carinfo__text}>
          This allows it to reach a speed of 355 km/h.
        </p>
        <p className={styles.topSection__carinfo__text}>
          Unfortunately, the Italians do not plan to mass-produce this car -
          only 3 copies of the Veneno will be built.
        </p>
        <div className={styles.topSection__carinfo__btns}>
          <Button text="Book Ride" />
          <Button text="See More Car" />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
