import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import styles from './CarInfoNavigation.module.scss';

interface CarInfoNavigationType {
  dailyPrice: string | undefined;
  navigateToSection: (category: string) => void;
}

const CarInfoNavigation = ({
  dailyPrice,
  navigateToSection,
}: CarInfoNavigationType) => {
  const isDesktop = useMediaQuery({ minWidth: '900px' });

  const { ref: carNavRef, inView: carNavInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <>
      {isDesktop && (
        <div
          ref={carNavRef}
          className={`${styles.carInfoNavigation} ${
            carNavInView && 'slide-left'
          } `}
        >
          <p className={styles.carInfoNavigation__price}>
            {dailyPrice}$ for 24h
          </p>
          <div className={styles.carInfoNavigation__navigation}>
            <p
              onClick={() => {
                navigateToSection('.price');
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  navigateToSection('.price');
                }
              }}
              role="link"
              tabIndex={0}
            >
              Cennik
            </p>
            <p>Kalendarz</p>
            <p>Opis</p>
            <p>Wyposażenie</p>
            <p>Dane techniczne</p>
          </div>
        </div>
      )}
      {}
    </>
  );
};

export default CarInfoNavigation;
