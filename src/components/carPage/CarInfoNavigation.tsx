import { useMediaQuery } from 'react-responsive';
import styles from './CarInfoNavigation.module.scss';

interface CarInfoNavigationType {
  dailyPrice: string | undefined;
}

const CarInfoNavigation = ({ dailyPrice }: CarInfoNavigationType) => {
  const isDesktop = useMediaQuery({ minWidth: '900px' });

  return (
    <>
      {isDesktop && (
        <div className={styles.carInfoNavigation}>
          <p className={styles.carInfoNavigation__price}>
            {dailyPrice}$ for 24h
          </p>
          <div className={styles.carInfoNavigation__navigation}>
            <p>Cennik</p>
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
