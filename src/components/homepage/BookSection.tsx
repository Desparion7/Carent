import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { BiCalendar } from 'react-icons/bi';
import dateFormat from 'dateformat';
import styles from './BookSection.module.scss';
import Button from '../ui/Button';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

const BookSection = () => {
  const [startDate, setStartDate] = useState<
    ValuePiece | [ValuePiece, ValuePiece]
  >(new Date());
  const [returnDate, setReturnDate] = useState<
    ValuePiece | [ValuePiece, ValuePiece]
  >(new Date());

  const [isstartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const [startDateString, setStartDateString] = useState('');
  const [returntDateString, setReturntDateString] = useState('');

  useEffect(() => {
    if (startDate instanceof Date) {
      const formattedDate = dateFormat(startDate, 'fullDate');
      setStartDateString(formattedDate);
    }
  }, [startDate]);

  useEffect(() => {
    if (returnDate instanceof Date) {
      const formattedDate = dateFormat(returnDate, 'fullDate');
      setReturntDateString(formattedDate);
    }
  }, [returnDate]);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isstartCalendarOpen);
  };
  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
  };

  return (
    <div className={`${styles.bookSection} ${styles.wrapper}`}>
      <div className={styles.bookSection__container}>
        <div>
          <div
            className={styles.bookSection__container__date}
            onClick={toggleStartDateCalendar}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                toggleStartDateCalendar();
              }
            }}
            role="button"
            tabIndex={0}
          >
            <BiCalendar />
            <p>Pick Up Date:</p>
            <p>{startDateString}</p>
          </div>
          {isstartCalendarOpen && (
            <Calendar
              className={styles.bookSection__container__calendar}
              value={startDate}
              onChange={setStartDate}
            />
          )}
        </div>
        <div>
          <div
            className={styles.bookSection__container__date}
            onClick={toggleReturnDateCalendar}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                toggleReturnDateCalendar();
              }
            }}
            role="button"
            tabIndex={0}
          >
            <BiCalendar />
            <p>Return Date:</p>
            <p>{returntDateString}</p>
          </div>
          {isReturnCalendarOpen && (
            <Calendar
              className={styles.bookSection__container__calendar}
              value={returnDate}
              onChange={setReturnDate}
              minDate={startDate as Date}
            />
          )}
        </div>
      </div>
      <Button text="Book Your Ride" />
    </div>
  );
};

export default BookSection;
