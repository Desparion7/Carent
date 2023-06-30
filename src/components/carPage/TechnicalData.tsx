import { useRef } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import styles from './TechnicalData.module.scss';

export type TechnicalProps = {
  active: boolean;
  activeTechnical: (category: string) => void;
  mileage: string | undefined;
  gas: string | undefined;
  transmission: string | undefined;
  year: string | undefined;
  drivetrain: string | undefined;
  power: string | undefined;
  engine: string | undefined;
  acceleration: string | undefined;
  max: string | undefined;
  color: string | undefined;
  seats: string | undefined;
  torque: string | undefined;
};

const TechnicalData = ({
  active,
  activeTechnical,
  mileage,
  gas,
  transmission,
  year,
  drivetrain,
  power,
  engine,
  acceleration,
  max,
  color,
  seats,
  torque,
}: TechnicalProps) => {
  const technicalDataRef = useRef<HTMLDivElement>(null);
  return (
    <div className={`${styles.technicalData} technical`}>
      <div
        className={styles.technicalData__title}
        onClick={() => {
          activeTechnical('.technical');
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            activeTechnical('.technical');
          }
        }}
        role="button"
        tabIndex={0}
      >
        <p> Technical Data</p>
        {active ? <SlArrowUp /> : <SlArrowDown />}
      </div>
      <div
        ref={technicalDataRef}
        className={styles.technicalData__parameters}
        style={
          active && technicalDataRef.current
            ? {
                height: `${technicalDataRef.current.scrollHeight + 20}px`,
              }
            : { height: '0px' }
        }
      >
        <div className={styles['technicalData__parameters--item']}>
          <img src="./turbine.PNG" alt="turbine" />
          <p>Power: {power} KM</p>
        </div>
        <div className={styles['technicalData__parameters--item']}>
          <img src="./chart.PNG" alt="chart" />
          <p>Torque: {torque}</p>
        </div>
        <div className={styles['technicalData__parameters--item']}>
          <img src="./acceleration.PNG" alt="acceleration" />
          <p>Acceleration: {acceleration}</p>
        </div>
        <div className={styles['technicalData__parameters--item']}>
          <img src="./speed.PNG" alt="speed" />
          <p>Top Speed: {max}</p>
        </div>
        <div className={styles['technicalData__parameters--item']}>
          <img src="./engine.PNG" alt="engine" />
          <p>Engine: {engine}</p>
        </div>
        <div className={styles['technicalData__parameters--item']}>
          <img src="./transmission.PNG" alt="transmission" />
          <p>Transmission: {transmission}</p>
        </div>
        <div className={styles['technicalData__parameters--item']}>
          <img src="./gas.PNG" alt="gas" />
          <p>Gas: {gas}</p>
        </div>
        <div className={styles['technicalData__parameters--item']}>
          <img src="./drivetrain.PNG" alt="drivetrain" />
          <p>Drivetrain: {drivetrain}</p>
        </div>
        <div className={styles['technicalData__parameters--item']}>
          <img src="./seats.PNG" alt="seats" />
          <p>Seats: {seats}</p>
        </div>
        <div className={styles['technicalData__parameters--item']}>
          <img src="./mileage.PNG" alt="mileage" />
          <p>Mileage: {mileage}</p>
        </div>
        <div className={styles['technicalData__parameters--item']}>
          <img src="./year.PNG" alt="year" />
          <p>Year: {year}</p>
        </div>
        <div className={styles['technicalData__parameters--item']}>
          <img src="./color.PNG" alt="color" />
          <p>Color: {color}</p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalData;
