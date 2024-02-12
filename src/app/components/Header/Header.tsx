import Image from 'next/image';
import ArrowIcon from '../../../icons/arrow_back.svg';
import Logo from '../../../icons/logo.svg';
import styles from './styles.module.css';

export default function Header() {
  return (
    <div>
      <div className={styles._wrapper}>
        <Image
          width={135}
          height={25}
          src={Logo}
          alt="Company Brand"
          className={styles._logo}
        />
        <div>
          <div>--- ProgressBar here ---</div>
        </div>
      </div>
      <div className={styles._wrapper_content}>
        <Image
          src={ArrowIcon}
          alt="Arrow Icon"
          className={styles._arrow_icon}
        />
        <div className={styles._content}>
          <h1 className={styles._title}>Join VerifyMyAge</h1>
          <p className={styles._subtitle}>
            Let's start by setting up
            <span className={styles._break_word}> your login details.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
