import { FaCar, FaMapMarkedAlt } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import styles from './StepsSection.module.scss';

const StepsSection = () => {
  return (
    <div className={styles.stepsSection}>
      <h2>Our Working Steps</h2>
      <div className={styles.stepsSection__container}>
        <div>
          <FaMapMarkedAlt />
          <p className={styles.stepsSection__container__step}>
            Choose Location
          </p>
          <p>Find the nearest YourCar point and book your car.</p>
        </div>
        <div>
          <BiCalendar />
          <p className={styles.stepsSection__container__step}>Pick-Up-Date</p>
          <p>Pick the best date to rent a car for you.</p>
        </div>
        <div>
          <FaCar />
          <p className={styles.stepsSection__container__step}>Book Your Car</p>
          <p>Book your nice car with ease in one single click.</p>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
