import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={styles.loaderBox}>
      <span className={styles.loader} />
      <p className={styles.loaderText}>
        Our backend is hosted on a free renderer server and may take a few
        moments to start up...
      </p>
    </div>
  );
};

export default LoadingSpinner;
