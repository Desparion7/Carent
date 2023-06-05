import styles from './Button.module.scss';

interface ButtonType {
  text: string;
}

const Button = ({ text }: ButtonType) => {
  return (
    <button className={styles.button} type="button">
      {text}
    </button>
  );
};

export default Button;
