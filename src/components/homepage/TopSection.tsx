import styles from './TopSection.module.scss';

const TopSection = () => {
  return (
    <div className={`${styles.topSection} `}>
      <div className={styles.car3d}>
        <h1>Rent Your Dream Car&apos;s With Us</h1>
        <video className={styles.video} src="audi.mp4" autoPlay muted />
      </div>
    </div>
  );
};

export default TopSection;
