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
      </Slider>
    </div>
  );
};

export default SlideOffert;
