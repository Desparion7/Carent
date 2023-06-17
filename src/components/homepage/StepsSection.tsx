import { FaCar, FaMapMarkedAlt } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import { useInView } from 'react-intersection-observer';
import styles from './StepsSection.module.scss';

const StepsSection = () => {
  const options = {
    threshold: 0,
    triggerOnce: true,
  };

  const { ref: locationStepRef, inView: locationStepInView } =
    useInView(options);
  const { ref: dateStepRef, inView: dateStepInView } = useInView(options);
  const { ref: bookStepRef, inView: bookStepInView } = useInView(options);

  return (
    <div className={styles.stepsSection}>
      <h2>The Booking Process</h2>
      <div className={styles.stepsSection__container}>
        <div
          ref={locationStepRef}
          className={`${locationStepInView && 'flip-vertical-left'}`}
        >
          <FaMapMarkedAlt />
          <p className={styles.stepsSection__container__step}>
            Choose Location
          </p>
          <p>Find the nearest CARENT point and book your car.</p>
        </div>
        <div
          ref={dateStepRef}
          className={`${dateStepInView && 'flip-vertical-left'}`}
        >
          <BiCalendar />
          <p className={styles.stepsSection__container__step}>Pick-Up-Date</p>
          <p>Pick the best date to rent a car for you.</p>
        </div>
        <div
          ref={bookStepRef}
          className={`${bookStepInView && 'flip-vertical-left'}`}
        >
          <FaCar />
          <p className={styles.stepsSection__container__step}>Book Your Car</p>
          <p>Book your nice car with ease in one single click.</p>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
