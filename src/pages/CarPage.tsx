import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import cars from '../data/cars';
import styles from './CarPage.module.scss';
import CarParameters from '../components/carPage/CarParameters';
import CarDescription from '../components/carPage/CarDescription';
import CarInfoNavigation from '../components/carPage/CarInfoNavigation';

const CarPage = () => {
  const param = useParams();
  const carName = param.name as string;
  const newCarName = carName.replace(/-/g, ' ');

  const carInfo = cars.find((car) => car.name === newCarName);

  useEffect(() => {
    const animation = new Image();
    animation.src = carInfo?.img[1] as string;
    animation.onload = () => {};
  }, [carInfo]);

  return (
    <div className={styles.carPage}>
      <div>
        <img src={carInfo?.img[1]} alt={carInfo?.name} />
      </div>
      <div className={styles.carPage__container}>
        <div className={styles.carPage__container__info}>
          <CarParameters
            name={carInfo?.name}
            power={carInfo?.power}
            acceleration={carInfo?.acceleration}
            drivetrain={carInfo?.drivetrain}
            engine={carInfo?.engine}
            gearType={carInfo?.gearType}
            max={carInfo?.max}
            torque={carInfo?.torque}
            seats={carInfo?.seats}
            img={carInfo?.img}
            dailyPrice={carInfo?.dailyPrice}
          />
          <CarDescription description={carInfo?.description} />
          <CarDescription description={carInfo?.description} />
          <CarDescription description={carInfo?.description} />
          <CarDescription description={carInfo?.description} />
          <CarDescription description={carInfo?.description} />
          <CarDescription description={carInfo?.description} />
        </div>
        <CarInfoNavigation dailyPrice={carInfo?.dailyPrice} />
      </div>
    </div>
  );
};

export default CarPage;
