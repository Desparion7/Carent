import { useState } from 'react';
import styles from './FilterSection.module.scss';
import CalendarSection from './CalendarSection';
import CarCard from '../homepage/CarCard';

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
  const [brand, setBrand] = useState('');

  const handlerBrand = (newBrand: string) => {
    setBrand(newBrand);
  };
  return (
    <div className={`${styles.filterSection} ${styles.wrapper}`}>
      <div className={styles.filterSection__brands}>
        <p>Car Brand</p>
        <BrandLink carBrand="All" brand={brand} handlerBrand={handlerBrand} />
        <BrandLink carBrand="Audi" brand={brand} handlerBrand={handlerBrand} />
        <BrandLink carBrand="BMW" brand={brand} handlerBrand={handlerBrand} />
        <BrandLink
          carBrand="Ferrari"
          brand={brand}
          handlerBrand={handlerBrand}
        />
        <BrandLink carBrand="Ford" brand={brand} handlerBrand={handlerBrand} />
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
        <button className={styles.button} type="button">
          Filter
        </button>
      </div>
      <div>
        <CalendarSection />
        <div className={styles.filterSection__modelsBox}>
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
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
