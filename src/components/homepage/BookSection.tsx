import { useState } from 'react';
import Calendar from 'react-calendar';
import { BiCalendar } from 'react-icons/bi';
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

  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    // if (isReturnCalendarOpen) setReturnCalendarOpen(false);
  };

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    // if (isstartCalendarOpen) setStartCalendarOpen(false);
  };
  return (
    <div className={`${styles.bookSection} ${styles.wrapper}`}>
      <div className={styles.bookSection__container}>
        <div className={styles.bookSection__container__date}>
          <BiCalendar />
          <div
            onClick={toggleStartDateCalendar}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                toggleStartDateCalendar();
              }
            }}
            tabIndex={0}
            role="button"
          >
            Pick Up Date
          </div>
          {isStartCalendarOpen && (
            <Calendar value={startDate} onChange={setStartDate} />
          )}
        </div>
        <div className={styles.bookSection__container__date}>
          <BiCalendar />
          <div
            onClick={toggleReturnDateCalendar}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                toggleStartDateCalendar();
              }
            }}
            tabIndex={0}
            role="button"
          >
            Return Date
          </div>
          {isReturnCalendarOpen && (
            <Calendar value={returnDate} onChange={setReturnDate} />
          )}
        </div>
        <Button text="Book Ride" />
      </div>
    </div>
  );
};

export default BookSection;
