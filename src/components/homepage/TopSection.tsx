import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import styles from './TopSection.module.scss';
import LoadingSpinner from '../ui/LoadingSpinner';
import carAnimation from '../../../public/car.mp4';

const TopSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  const navigate = useNavigate();
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    const animation = document.createElement('video');
    animation.src = carAnimation;
    animation.onloadeddata = () => {
      setAnimationLoaded(true);
    };
  }, []);

  let content: JSX.Element;

  if (animationLoaded) {
    content = (
      <div className={styles.topSection}>
        <video className={styles.video} src="./car.mp4" autoPlay muted />
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
              The car is powered by a 6.5-liter V12 engine that generates 750
              hp.
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
  } else {
    content = <LoadingSpinner />;
  }

  return content;
};

export default TopSection;
