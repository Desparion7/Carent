import { useParams } from 'react-router-dom';
import cars from '../data/cars';
import styles from './CarPage.module.scss';
import CarParameters from '../components/carPage/CarParameters';

const CarPage = () => {
  const param = useParams();
  const carName = param.name as string;
  const newCarName = carName.replace(/-/g, ' ');

  const carInfo = cars.find((car) => car.name === newCarName);

  return (
    <div className={styles.carPage}>
      <div>
        <img src={carInfo?.img[1]} alt={carInfo?.name} />
      </div>
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
        dailyPrice={carInfo?.dailyPrice}
        img={carInfo?.img}
      />
    </div>
  );
};

export default CarPage;
