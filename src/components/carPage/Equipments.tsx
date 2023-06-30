import { useRef } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import styles from './Equipments.module.scss';

export type EquipmentsProps = {
  active: boolean;
  activeEquipments: (category: string) => void;
  equipment: string[] | undefined;
};
const Equipments = ({
  active,
  activeEquipments,
  equipment,
}: EquipmentsProps) => {
  const equipmentsRef = useRef<HTMLUListElement>(null);
  return (
    <div className={`${styles.equipments} equipments`}>
      <div
        className={styles.equipments__title}
        onClick={() => {
          activeEquipments('.equipments');
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            activeEquipments('.equipments');
          }
        }}
        role="button"
        tabIndex={0}
      >
        <p> Equipments</p>
        {active ? <SlArrowUp /> : <SlArrowDown />}
      </div>
      <ul
        className={styles.equipments__eq}
        ref={equipmentsRef}
        style={
          active && equipmentsRef.current
            ? {
                height: `${equipmentsRef.current.scrollHeight}px`,
              }
            : { height: '0px' }
        }
      >
        {equipment?.map((eq) => (
          <li key={eq}>{eq}</li>
        ))}
      </ul>
    </div>
  );
};

export default Equipments;
