import { RiPinDistanceLine } from 'react-icons/ri';
import { BsFillGearFill } from 'react-icons/bs';
import { MdWaterDrop } from 'react-icons/md';
import styles from './SlideOffert.module.scss';
import Button from '../ui/Button';

interface CarCardType {
  img: string;
  name: string;
  dailyPrice: string;
  mileage: string;
  gas: string;
  gearType: string;
  year: string;
}

export const CarCard = ({
  img,
  name,
  dailyPrice,
  mileage,
  gas,
  gearType,
  year,
}: CarCardType) => {
  return (
    <div className={styles.carCard}>
      <img src={img} alt={name} />
      <p className={styles.carCard__name}>{name}</p>
      <p className={styles.carCard__year}>{`(${year})`}</p>
      <div className={styles.carCard__price}>
        <p>${dailyPrice} / day</p>
      </div>
      <div className={styles.carCard__line} />
      <div className={styles.carCard__info}>
        <div className={styles.carCard__info__box}>
          <RiPinDistanceLine />
          <p>{mileage}</p>
        </div>
        <div className={styles.carCard__info__box}>
          <BsFillGearFill />
          <p>{gearType}</p>
        </div>
        <div className={styles.carCard__info__box}>
          <MdWaterDrop />
          <p>{gas}</p>
        </div>
      </div>
      <Button text="Rent Now" width />
    </div>
  );
};

const SlideOffert = () => {
  return (
    <div className={styles.slideOffert}>
      <CarCard
        img="./porsche.png"
        name="Porsche 911"
        dailyPrice="1500"
        mileage="10k"
        gas="Petrol"
        gearType="automatic"
        year="2017"
      />
      <CarCard
        img="./audiRS3.PNG"
        name="Audi RS3"
        dailyPrice="1000"
        mileage="1k"
        gas="Petrol"
        gearType="automatic"
        year="2023"
      />
      <CarCard
        img="./Lamborghini Veneno.PNG"
        name="Lamborghini Veneno"
        dailyPrice="40 000"
        mileage="0.5k"
        gas="Petrol"
        gearType="automatic"
        year="2023"
      />
    </div>
  );
};

export default SlideOffert;
