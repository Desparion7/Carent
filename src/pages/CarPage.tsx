import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './CarPage.module.scss';
import CarParameters from '../components/carPage/CarParameters';
import CarDescription from '../components/carPage/CarDescription';
import CarInfoNavigation from '../components/carPage/CarInfoNavigation';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import PriceList from '../components/carPage/PriceList';
import Equipments from '../components/carPage/Equipments';
import CalendarPicker from '../components/carPage/CalendarPicker';
import TechnicalData from '../components/carPage/TechnicalData';
import { useGetCarQuery } from '../app/slices/carsApiSlice';

const CarPage = () => {
  const [activePriceList, setActivePriceList] = useState(false);
  const [activeCalendar, setActiveCalendar] = useState(false);
  const [activeEquipments, setActiveEquipments] = useState(false);
  const [activeTechnical, setActiveTechnical] = useState(false);

  const param = useParams();
  const carName = param.name as string;
  const newCarName = carName.replace(/-/g, ' ');
  const { data, isError, isLoading, isSuccess } = useGetCarQuery({
    name: newCarName,
  });

  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = data?.img[1] as string;
    img.onload = () => {
      setImgLoaded(true);
    };
  }, [data]);

  const handleScroll = (category: string) => {
    const element = document.querySelector(category);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
    }
  };
  const navigateToSection = (category: string) => {
    handleScroll(category);
    if (category === '.price') {
      setActivePriceList(true);
    }
    if (category === '.calendar') {
      setActiveCalendar(true);
    }
    if (category === '.technical') {
      setActiveTechnical(true);
    }
    if (category === '.equipments') {
      setActiveEquipments(true);
    }
  };

  const handleOpenPriceList = () => {
    setActivePriceList(!activePriceList);
  };
  const handleOpenCalendar = () => {
    setActiveCalendar(!activeCalendar);
  };
  const handleOpenTechnical = () => {
    setActiveTechnical(!activeTechnical);
  };
  const handleOpenEquipments = () => {
    setActiveEquipments(!activeEquipments);
  };

  let content: JSX.Element;
  if (imgLoaded && isSuccess) {
    content = (
      <div className={styles.carPage}>
        <div>
          <img
            src={data?.img[1]}
            alt={data?.name}
            className={styles.carPage__img}
          />
        </div>
        <div className={styles.carPage__container}>
          <div className={styles.carPage__container__info}>
            <CarParameters
              name={data?.name}
              power={data?.power}
              acceleration={data?.acceleration}
              drivetrain={data?.drivetrain}
              engine={data?.engine}
              transmission={data?.transmission}
              max={data?.max}
              torque={data?.torque}
              seats={data?.seats}
              img={data?.img}
              dailyPrice={data?.dailyPrice}
            />
            <CarDescription description={data?.description} />
            <PriceList
              prices={data?.priceList}
              active={activePriceList}
              activePriceList={handleOpenPriceList}
            />
            <CalendarPicker
              carId={data?._id}
              active={activeCalendar}
              activeCalendar={handleOpenCalendar}
              priceList={data?.priceList}
              calendar={data?.calendar}
            />
            <Equipments
              active={activeEquipments}
              activeEquipments={handleOpenEquipments}
              equipment={data?.equipment}
            />
            <TechnicalData
              active={activeTechnical}
              activeTechnical={handleOpenTechnical}
              power={data?.power}
              acceleration={data?.acceleration}
              drivetrain={data?.drivetrain}
              engine={data?.engine}
              transmission={data?.transmission}
              max={data?.max}
              torque={data?.torque}
              seats={data?.seats}
              year={data?.year}
              color={data?.color}
              gas={data?.gas}
              mileage={data?.mileage}
            />
          </div>
          <CarInfoNavigation
            dailyPrice={data?.dailyPrice}
            navigateToSection={navigateToSection}
          />
        </div>
      </div>
    );
  } else if (isLoading) {
    content = <LoadingSpinner />;
  } else if (isError) {
    content = (
      <div className={styles.errorText}>
        <p>Issue with fetching car data!</p>
        <p>404 Not Found.</p>
      </div>
    );
  } else {
    content = <LoadingSpinner />;
  }
  return content;
};

export default CarPage;
