import { useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { isSameDay, format } from 'date-fns';
import Calendar from 'react-calendar';
import styles from './CalendarPicker.module.scss';

export type CalendarProps = {
  active: boolean;
  activeCalendar: (category: string) => void;
};

const CalendarPicker = ({ active, activeCalendar }: CalendarProps) => {
  const selectedDates: Date[] = [new Date(2023, 6, 15), new Date(2023, 6, 20)]; // Przykładowe wybrane daty
  const [value, onChange] = useState<Date[]>([new Date(), new Date()]);
  const [pickupDate, setPickupDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>('');
  const [dateIsSelected, setDateIsSelected] = useState(false);

  // Add class for seleted date from data base
  const tileClassName = ({ date }: { date: Date }) => {
    if (selectedDates.some((selectedDate) => isSameDay(selectedDate, date))) {
      return styles.selected;
    }
    return '';
  };

  // Add dates bettwen two choosed date
  const addDates = (updatedValue: Date[]) => {
    const dates = [];
    const startDate = new Date(updatedValue[0]);
    while (startDate <= updatedValue[1]) {
      dates.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }
    return dates;
  };
  // Checking if selected dates are not booked
  const checkingDates = (dates: Date[]) => {
    const transformDates = selectedDates.map((date) => date.getTime());
    const newUserDates = dates.map((date) => date.getTime());
    const inRange = transformDates.some((element) =>
      newUserDates.includes(element)
    );
    if (inRange) {
      setDateIsSelected(true);
    } else {
      setDateIsSelected(false);
    }
  };

  const handleDateChange = (date: Date) => {
    if (value.length < 2) {
      const updatedValue = [...value, date].sort(
        (a, b) => a.getTime() - b.getTime()
      );
      const newPickUpDate = format(updatedValue[0], 'dd-MM-yyyy');
      setPickupDate(newPickUpDate);
      onChange(updatedValue);
      if (updatedValue.length === 2) {
        const newReturnDate = format(updatedValue[1], 'dd-MM-yyyy');
        setReturnDate(newReturnDate);
        const dates = addDates(updatedValue);
        checkingDates(dates);
      }
    } else {
      onChange([date]);
    }
  };
  // console.log(dateString);
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
      <div className={styles.calendary__booking}>
        <div>
          <Calendar
            tileClassName={tileClassName}
            onClickDay={handleDateChange}
            value={[value[0], value[1]]}
            minDate={new Date()}
          />
        </div>
        <div className={styles['calendary__booking--dates']}>
          <p>
            Pickup Date: <span>{pickupDate}</span>{' '}
          </p>
          <p>
            Return Date: <span>{returnDate}</span>
          </p>
          {dateIsSelected && (
            <p className={styles['calendary__booking--dates-error']}>
              The car is not available in the selected range
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPicker;
