import { useParams } from 'react-router-dom';
import styles from './CarPage.module.scss';
import cars from '../../data/cars';

const CarPage = () => {
  const param = useParams();
  const carName = param.name as string;
  const newCarName = carName.replace(/-/g, ' ');

  const carInfo = cars.find((car) => car.name === newCarName);

  return (
    <div className={styles.carPage}>
      <div className={styles.carPage__img}>
        <img src={carInfo?.img[1]} alt={carInfo?.name} />
      </div>
    </div>
  );
};

export default CarPage;
