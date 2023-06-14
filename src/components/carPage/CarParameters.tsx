/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Slider from 'react-slick';
import styles from './CarParameters.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Car {
  name: string | undefined;
  power: string | undefined;
  engine: string | undefined;
  acceleration: string | undefined;
  drivetrain: string | undefined;
  torque: string | undefined;
  max: string | undefined;
  gearType: string | undefined;
  seats: string | undefined;
  dailyPrice: string | undefined;
  img: string[] | undefined;
}
interface ArrowPropsType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any;
}
const SampleNextArrow = ({ onClick }: ArrowPropsType) => {
  return (
    <div
      className={`${styles.arrow} ${styles.arrow__right}`}
      onClick={onClick}
    />
  );
};
const SamplePrevArrow = ({ onClick }: ArrowPropsType) => {
  return (
    <div
      className={`${styles.arrow} ${styles.arrow__left}`}
      onClick={onClick}
    />
  );
};

const CarParameters = ({
  name,
  power,
  engine,
  acceleration,
  drivetrain,
  torque,
  max,
  gearType,
  seats,
  dailyPrice,
  img,
}: Car) => {
  return (
    <div className={styles.carParameters}>
      <div className={styles.carParameters__leftBox}>
        <div className={styles.carParameters__leftBox__params}>
          <div className={styles.carParameters__leftBox__params__title}>
            {name}
          </div>
          <div className={styles.carParameters__leftBox__params__details}>
            <div>
              <p>
                Power: <span>{power} KM</span>
              </p>
              <p>
                0-100: <span> {acceleration} </span>
              </p>
              <p>
                Torque: <span>{torque}</span>
              </p>
              <p>
                Top Speed: <span>{max}</span>
              </p>
            </div>
            <div>
              <p>
                Engine: <span>{engine}</span>
              </p>
              <p>
                Drive: <span>{drivetrain}</span>
              </p>
              <p>
                Transmission: <span>{gearType}</span>
              </p>
              <p>
                Seats: <span>{seats}</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.carParameters__leftBox__photos}>
          <Slider
            dots
            infinite
            autoplay
            pauseOnHover
            slidesToShow={3}
            slidesToScroll={1}
            speed={500}
            nextArrow={<SampleNextArrow onClick={onclick} />}
            prevArrow={<SamplePrevArrow onClick={onclick} />}
          >
            {img?.slice(1).map((photo) => (
              <div key={photo}>
                <img src={photo} alt={name} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className={styles.carParameters__rightBox}>
        <p className={styles.carParameters__rightBox__price}>
          {dailyPrice}$ for 24h
        </p>
        <div className={styles.carParameters__rightBox__navigation}>
          <p>Cennik</p>
          <p>Kalendarz</p>
          <p>Opis</p>
          <p>Cennik</p>
          <p>Wyposażenie</p>
          <p>Dane techniczne</p>
        </div>
      </div>
    </div>
  );
};

export default CarParameters;
