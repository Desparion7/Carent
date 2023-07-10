/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Slider from 'react-slick';
import styles from './SlideOffert.module.scss';
import CarCard from './CarCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGetFilteredCarsQuery } from '../../app/slices/carsApiSlice';
import LoadingSpinner from '../ui/LoadingSpinner';

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
  const { data, isError, isLoading, isSuccess } = useGetFilteredCarsQuery({
    brand: 'All',
  });
  return (
    <div className={styles.slideOffert}>
      {isLoading && <LoadingSpinner />}
      {isError && (
        <div className={styles.errorText}>
          <p>Connection problem, failed to fetch car list!</p>
        </div>
      )}
      {isSuccess && (
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
          {data.map((car) => (
            <CarCard
              key={car._id}
              img={car.img[0]}
              name={car.name}
              dailyPrice={car.dailyPrice}
              mileage={car.mileage}
              gas={car.gas}
              transmission={car.transmission}
              year={car.year}
            />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default SlideOffert;
