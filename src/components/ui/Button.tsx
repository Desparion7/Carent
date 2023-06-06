import { FunctionComponent } from 'react';
import styles from './Button.module.scss';

interface ButtonType {
  text: string;
  width?: boolean;
}

const Button: FunctionComponent<ButtonType> = ({ text, width }) => {
  Button.defaultProps = {
    width: false,
  };
  return (
    <button
      className={`${width ? styles.width : ''} ${styles.button}`}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
