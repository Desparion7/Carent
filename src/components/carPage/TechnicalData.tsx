import { useRef } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { TbCarTurbine } from 'react-icons/tb';
import { GrLineChart } from 'react-icons/gr';
import styles from './TechnicalData.module.scss';

export type TechnicalProps = {
  active: boolean;
  activeTechnical: (category: string) => void;
  mileage: string | undefined;
  gas: string | undefined;
  gearType: string | undefined;
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
  gearType,
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
          <TbCarTurbine />
          <p>Power: {power} KM</p>
        </div>
        <div className={styles['technicalData__parameters--item']}>
          <GrLineChart />
          <p>Torque: {torque}</p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalData;
