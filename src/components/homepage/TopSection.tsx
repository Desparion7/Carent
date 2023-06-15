import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import styles from './TopSection.module.scss';

const TopSection = ({ carAnimation }: { carAnimation: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  const navigate = useNavigate();
  return (
    <div className={styles.topSection}>
      <video className={styles.video} src={carAnimation} autoPlay muted />
      <div className={`${styles.topSection__text} ${styles.showText}`}>
        <h1>Rent Your Dream Car&apos;s With Us</h1>
      </div>
      <div ref={ref} className={`${styles.topSection__carinfo}`}>
        <div
          className={`${styles.topSection__carinfo__textBox} ${
            inView ? 'slide-top' : ''
          }`}
        >
          <p className={styles.topSection__carinfo__title}>
            Lamborghini Veneno
          </p>
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
    </div>
  );
};

export default TopSection;
