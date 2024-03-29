import { useState } from 'react';
import { isSameDay, format } from 'date-fns';
import Calendar from 'react-calendar';
import styles from './CalendarPicker.module.scss';
import BookingForm from './BookingForm';

export type CalendarProps = {
  carId: string;
  calendar: Date[] | undefined;
  priceList:
    | {
        '1-2 days': number;
        '3-5 days': number;
        '6-10 days': number;
        '10-30 days': number;
      }
    | undefined;
};

const CalendarPicker = ({ carId, priceList, calendar }: CalendarProps) => {
  // Convert string date from backend to Date format
  const convertedDate: Date[] = [];
  calendar?.forEach((date) => {
    const newDate = new Date(date);
    convertedDate.push(newDate);
  });

  const selectedDates: Date[] = convertedDate;
  const [value, onChange] = useState<Date[]>([new Date(), new Date()]);
  const [dateIsSelectedError, setDateIsSelectedError] = useState(false);
  const [nodateError, setNoDateError] = useState(false);

  const [pickupDate, setPickupDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>('');
  const [totalPrice, setTotalPrice] = useState<number>(0);
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
      setDateIsSelectedError(true);
    } else {
      setDateIsSelectedError(false);
    }
  };
  // Function to set price for day
  const handlePriceForDay = (dates: Date[]) => {
    if (dates.length <= 2) {
      const price = priceList?.['1-2 days'];
      if (price) {
        setTotalPrice(price * dates.length);
      }
    } else if (dates.length > 2 && dates.length < 6) {
      const price = priceList?.['3-5 days'];
      if (price) {
        setTotalPrice(price * dates.length);
      }
    } else if (dates.length >= 6 && dates.length < 11) {
      const price = priceList?.['6-10 days'];
      if (price) {
        setTotalPrice(price * dates.length);
      }
    } else if (dates.length > 10) {
      const price = priceList?.['10-30 days'];
      if (price) {
        setTotalPrice(price * dates.length);
      }
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
        handlePriceForDay(dates);
        setNoDateError(false);
      }
    } else {
      onChange([date]);
    }
  };

  return (
    <div className={`${styles.calendary} calendar`}>
      <div className={styles.calendary__title}>
        <p> Calendar</p>
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
          <h3>Availability</h3>
          <p>
            Pickup Date: <span>{pickupDate}</span>{' '}
          </p>
          <p>
            Return Date: <span>{returnDate}</span>
          </p>
          {dateIsSelectedError ? (
            <p className={styles['calendary__booking--dates-error']}>
              Car is not available.
            </p>
          ) : (
            <p>Total Price: {totalPrice}$</p>
          )}
          {nodateError && (
            <p className={styles['calendary__booking--dates-error']}>
              Please select a date.
            </p>
          )}
          <p>If you want book one day click on it twice.</p>
          <h3>General terms</h3>
          <p>The amount of the deposit {priceList?.['1-2 days']}$.</p>
          <p>Max mileage per day 200 mileage.</p>
        </div>
        <div>
          <BookingForm
            carId={carId}
            dateIsSelectedError={dateIsSelectedError}
            pickupDate={value[0]}
            returnDate={value[1]}
            setNoDateError={setNoDateError}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarPicker;
