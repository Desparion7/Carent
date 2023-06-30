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
                navigateToSection('.description');
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  navigateToSection('.description');
                }
              }}
              role="link"
              tabIndex={0}
            >
              Description
            </p>
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
              Price List
            </p>
            <p
              onClick={() => {
                navigateToSection('.calendar');
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  navigateToSection('.calendar');
                }
              }}
              role="link"
              tabIndex={0}
            >
              Calendar
            </p>
            <p
              onClick={() => {
                navigateToSection('.equipments');
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  navigateToSection('.equipments');
                }
              }}
              role="link"
              tabIndex={0}
            >
              Equipment
            </p>
            <p
              onClick={() => {
                navigateToSection('.technical');
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  navigateToSection('.technical');
                }
              }}
              role="link"
              tabIndex={0}
            >
              Technical Data
            </p>
          </div>
        </div>
      )}
      {}
    </>
  );
};

export default CarInfoNavigation;
