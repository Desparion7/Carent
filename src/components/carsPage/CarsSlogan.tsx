import styles from './CarsSlogan.module.scss';

const CarsSlogan = () => {
  return (
    <div className={styles.carsSlogan}>
      <div className={styles.carsSlogan__img}>
        <img src="./srt.PNG" alt="red lamps doge srt" />
        <div className={styles.carsSlogan__img__shadow}>
          <p className="scale-up-center">
            Don&apos;t let your <span>dreams</span> remain mere fantasies. With
            our sports and luxury cars, you have the chance to make them a
            reality. Seize the moment, feel the pulsating <span>power</span>{' '}
            under the hood, and <span>experience</span> true{' '}
            <span>freedom</span> on the road.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarsSlogan;
