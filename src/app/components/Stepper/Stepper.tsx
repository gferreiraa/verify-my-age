import { StepperProps } from './Stepper.types';
import styles from './styles.module.css';

export default function Stepper({ steps, currentStep }: StepperProps) {
  const percentage = (currentStep / steps) * 100;

  return (
    <div className={styles._stepper}>
      <svg className={styles._progress} viewBox="0 0 36 36">
        <path
          className={styles._circle_bg}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className={styles._circle}
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div className={styles._numbers}>
        <span className={styles._current_number}>{currentStep}</span>
        <span className={styles._step_number}>/{steps}</span>
      </div>
    </div>
  );
}
