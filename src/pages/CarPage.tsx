import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cars from '../data/cars';
import styles from './CarPage.module.scss';
import CarParameters from '../components/carPage/CarParameters';
import CarDescription from '../components/carPage/CarDescription';
import CarInfoNavigation from '../components/carPage/CarInfoNavigation';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import PriceList from '../components/carPage/PriceList';

const CarPage = () => {
  const [activePriceList, setActivePriceList] = useState(false);

  const param = useParams();
  const carName = param.name as string;
  const newCarName = carName.replace(/-/g, ' ');
  const carInfo = cars.find((car) => car.name === newCarName);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = carInfo?.img[1] as string;
    img.onload = () => {
      setImgLoaded(true);
    };
  }, [carInfo]);

  const handleScroll = (category: string) => {
    const element = document.querySelector(category);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  const navigateToSection = (category: string) => {
    handleScroll(category);
    if (category === '.price') {
      setActivePriceList(true);
    }
  };

  const handleOpenPriceList = () => {
    setActivePriceList(!activePriceList);
  };

  let content: JSX.Element;
  if (imgLoaded) {
    content = (
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
            <PriceList
              prices={carInfo?.priceList}
              active={activePriceList}
              activePriceList={handleOpenPriceList}
            />
          </div>
          <CarInfoNavigation
            dailyPrice={carInfo?.dailyPrice}
            navigateToSection={navigateToSection}
          />
        </div>
      </div>
    );
  } else {
    content = <LoadingSpinner />;
  }
  return content;
};

export default CarPage;
