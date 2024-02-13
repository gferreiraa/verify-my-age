import { ButtonProps } from './Button.types';
import styles from './styles.module.css';

export default function Button({
  backgroundColor,
  label,
  borderColor,
  icon,
  onClick
}: ButtonProps) {
  return (
    <button
      className={styles._button}
      style={{
        backgroundColor,
        borderColor: borderColor || 'transparent',
        borderWidth: borderColor ? '1px' : '0',
        borderStyle: borderColor ? 'solid' : 'none'
      }}
      onClick={onClick}
    >
      <span className={styles._icon}>{icon}</span>
      <span className={`${icon ? styles._label_icon : styles._label_}`}>
        {label}
      </span>
    </button>
  );
}
