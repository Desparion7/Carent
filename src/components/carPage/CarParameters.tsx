/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer';
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
  transmission: string | undefined;
  seats: string | undefined;
  img: string[] | undefined;
  dailyPrice: string | undefined;
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
  transmission,
  seats,
  img,
  dailyPrice,
}: Car) => {
  const isDesktop = useMediaQuery({ minWidth: '900px' });
  const { ref: carInfoRef, inView: carInfoInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className={styles.carParameters}>
      <div
        ref={carInfoRef}
        className={`${styles.carParameters__params} ${
          carInfoInView && 'slide-bottom'
        }  `}
      >
        <div className={styles.carParameters__params__title}>{name}</div>
        {!isDesktop && (
          <div className={styles.carParameters__params__title}>
            {dailyPrice}$ for 24H
          </div>
        )}
        <div className={styles.carParameters__params__details}>
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
              Transmission: <span>{transmission}</span>
            </p>
            <p>
              Seats: <span>{seats}</span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.carParameters__photos} ${
          carInfoInView && 'slide-top'
        }`}
      >
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
          responsive={[
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          {img?.slice(1).map((photo) => (
            <div key={photo}>
              <img src={photo} alt={name} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarParameters;
