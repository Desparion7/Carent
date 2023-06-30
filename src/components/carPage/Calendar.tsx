import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import styles from './Calendar.module.scss';

export type CalendarProps = {
  active: boolean;
  activeCalendar: (category: string) => void;
};

const Calendar = ({ active, activeCalendar }: CalendarProps) => {
  return (
    <div className={`${styles.calendary} calendar`}>
      <div
        className={styles.calendary__title}
        onClick={() => {
          activeCalendar('.calendar');
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            activeCalendar('.calendar');
          }
        }}
        role="button"
        tabIndex={0}
      >
        <p> Calendar</p>
        {active ? <SlArrowUp /> : <SlArrowDown />}
      </div>
    </div>
  );
};

export default Calendar;
