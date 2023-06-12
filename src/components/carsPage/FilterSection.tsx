import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './FilterSection.module.scss';
import CalendarSection from './CalendarSection';
import CarCard from '../homepage/CarCard';
import cars from '../../data/cars';

interface BrandLinkType {
  carBrand: string;
  brand: string;
  handlerBrand: (newBrand: string) => void;
}

const BrandLink = ({ carBrand, brand, handlerBrand }: BrandLinkType) => {
  return (
    <div
      className={`${styles.filterSection__brands__brand} ${
        brand === carBrand && styles.active
      } `}
      onClick={() => {
        handlerBrand(carBrand);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          handlerBrand(carBrand);
        }
      }}
      tabIndex={0}
      role="link"
    >
      {carBrand}
    </div>
  );
};

const FilterSection = () => {
  const isDesktop = useMediaQuery({ minWidth: '900px' });
  const [brand, setBrand] = useState('All');

  const handlerBrand = (newBrand: string) => {
    setBrand(newBrand);
  };
  return (
    <div className={`${styles.filterSection} ${styles.wrapper}`}>
      <div className={styles.filterSection__brands}>
        <p>Car Brand</p>
        {!isDesktop && (
          <select
            onChange={(e) => {
              handlerBrand(e.target.value);
            }}
          >
            <option value="All">All</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Ford">Ferrari</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Porsche">Porsche</option>
          </select>
        )}
        {isDesktop && (
          <>
            <BrandLink
              carBrand="All"
              brand={brand}
              handlerBrand={handlerBrand}
            />
            <BrandLink
              carBrand="Audi"
              brand={brand}
              handlerBrand={handlerBrand}
            />
            <BrandLink
              carBrand="BMW"
              brand={brand}
              handlerBrand={handlerBrand}
            />
            <BrandLink
              carBrand="Ferrari"
              brand={brand}
              handlerBrand={handlerBrand}
            />
            <BrandLink
              carBrand="Ford"
              brand={brand}
              handlerBrand={handlerBrand}
            />
            <BrandLink
              carBrand="Lamborghini"
              brand={brand}
              handlerBrand={handlerBrand}
            />
            <BrandLink
              carBrand="Mercedes"
              brand={brand}
              handlerBrand={handlerBrand}
            />
            <BrandLink
              carBrand="Porsche"
              brand={brand}
              handlerBrand={handlerBrand}
            />
          </>
        )}

        {isDesktop && (
          <button className={styles.button} type="button">
            Filter
          </button>
        )}
      </div>
      <div>
        <div className={styles.filterSection__filter}>
          <CalendarSection />
          {!isDesktop && (
            <button className={styles.button} type="button">
              Filter
            </button>
          )}
        </div>
        <div className={styles.filterSection__modelsBox}>
          {cars.map((car) => (
            <CarCard
              key={car.id}
              img={car.img[0]}
              name={car.name}
              dailyPrice={car.dailyPrice}
              mileage={car.mileage}
              gas={car.gas}
              gearType={car.gearType}
              year={car.year}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
