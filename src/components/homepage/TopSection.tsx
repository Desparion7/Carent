import styles from './TopSection.module.scss';
import Button from '../ui/Button';

const TopSection = () => {
  return (
    <div className={`${styles.topSection} `}>
      <video className={styles.video} src="car.mp4" autoPlay muted />
      <div className={`${styles.topSection__text} ${styles.showText}`}>
        <h1>Rent Your Dream Car&apos;s With Us</h1>
        <div className={styles.topSection__text__btns}>
          <Button text="Book Ride" />
          <Button text="Sell Your Car" />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
