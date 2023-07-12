import styles from './LoadingButton.module.scss';

const LoadingButton = () => {
  return (
    <div className={styles.spinner_box}>
      <div className={styles.lds_ring}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default LoadingButton;
