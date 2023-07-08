import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { BiCalendar } from 'react-icons/bi';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { changePickupDate, changeReturnDate } from '../../app/slices/dateSlice';
import styles from './CalendarSection.module.scss';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

const CalendarSection = () => {
  const dispatch = useDispatch();
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
      const formattedDate = format(startDate, 'PP');
      setStartDateString(formattedDate);
      dispatch(changeReturnDate(formattedDate));
    }
  }, [startDate, dispatch]);

  useEffect(() => {
    if (returnDate instanceof Date) {
      const formattedDate = format(returnDate, 'PP');
      setReturntDateString(formattedDate);
      dispatch(changePickupDate(formattedDate));
    }
  }, [returnDate, dispatch]);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isstartCalendarOpen);
  };
  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
  };

  return (
    <div className={`${styles.calendarSection}`}>
      <div className={styles.calendarSection__container}>
        <div>
          <div
            className={styles.calendarSection__container__date}
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
              className={styles.calendarSection__container__calendar}
              value={startDate}
              onChange={setStartDate}
            />
          )}
        </div>
        <div>
          <div
            className={styles.calendarSection__container__date}
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
              className={styles.calendarSection__container__calendar}
              value={returnDate}
              onChange={setReturnDate}
              minDate={startDate as Date}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;
