import { useNavigate } from 'react-router-dom';
import { RiPinDistanceLine } from 'react-icons/ri';
import { BsFillGearFill } from 'react-icons/bs';
import { MdWaterDrop } from 'react-icons/md';
import styles from './CarCard.module.scss';

interface CarCardType {
  img: string;
  name: string;
  dailyPrice: string;
  mileage: string;
  gas: string;
  gearType: string;
  year: string;
}

const CarCard = ({
  img,
  name,
  dailyPrice,
  mileage,
  gas,
  gearType,
  year,
}: CarCardType) => {
  const navigate = useNavigate();
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
      <button
        className={`${styles.button} ${styles.buttonWidth}`}
        type="button"
        onClick={() => {
          const carLink = name.replace(/ /g, '-');
          navigate(`/${carLink}`);
        }}
      >
        Rent Now
      </button>
    </div>
  );
};

export default CarCard;
