import styles from './CarDescription.module.scss';

interface CarDescriptionType {
  description: string | undefined;
}

const CarDescription = ({ description }: CarDescriptionType) => {
  return (
    <div className={styles.carDescription}>
      <div className={styles.carDescription__text}>{description}</div>
      <div className={styles.carDescription__whitespace} />
    </div>
  );
};

export default CarDescription;
