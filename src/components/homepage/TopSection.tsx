import { useNavigate } from 'react-router-dom';
import styles from './TopSection.module.scss';

const TopSection = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.topSection}>
      <video className={styles.video} src="car.mp4" autoPlay muted />
      <div className={`${styles.topSection__text} ${styles.showText}`}>
        <h1>Rent Your Dream Car&apos;s With Us</h1>
      </div>
      <div className={styles.topSection__carinfo}>
        {/* <div className={styles.shadow}></div> */}
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
          <button className={styles.button} type="button">
            Book Ride
          </button>
          <button
            className={styles.button}
            onClick={() => {
              navigate('/cars');
            }}
            type="button"
          >
            See More Car
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
