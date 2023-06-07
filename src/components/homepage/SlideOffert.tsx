/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Slider from 'react-slick';
import styles from './SlideOffert.module.scss';
import CarCard from './CarCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const SlideOffert = () => {
  return (
    <div className={styles.slideOffert}>
      <Slider
        dots
        infinite
        autoplay
        pauseOnHover
        slidesToShow={3}
        slidesToScroll={1}
        speed={500}
        initialSlide={0}
        nextArrow={<SampleNextArrow onClick={onclick} />}
        prevArrow={<SamplePrevArrow onClick={onclick} />}
        responsive={[
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        <CarCard
          img="./Porsche 718 Cayman GT4.PNG"
          name="Porsche 718 Cayman GT4"
          dailyPrice="700"
          mileage="3k"
          gas="Petrol"
          gearType="automatic"
          year="2020"
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
        <CarCard
          img="./Audi RS7.PNG"
          name="Audi RS7"
          dailyPrice="400"
          mileage="1k"
          gas="Petrol"
          gearType="automatic"
          year="2020"
        />
        <CarCard
          img="./Audi R8 Performance.PNG"
          name="Audi R8 Performance"
          dailyPrice="900"
          mileage="10k"
          gas="Petrol"
          gearType="automatic"
          year="2020"
        />
        <CarCard
          img="./Ferrari 488 GTB.PNG"
          name="Ferrari 488 GTB"
          dailyPrice="1000"
          mileage="1k"
          gas="Petrol"
          gearType="automatic"
          year="2019"
        />
        <CarCard
          img="./Mustang Shelby GT500.PNG"
          name="Mustang Shelby GT500"
          dailyPrice="900"
          mileage="8k"
          gas="Petrol"
          gearType="automatic"
          year="2022"
        />
      </Slider>
    </div>
  );
};

export default SlideOffert;
