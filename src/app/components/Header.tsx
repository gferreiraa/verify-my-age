import Image from 'next/image';
import styles from './styles.module.css';
import Logo from '../../icons/logo.svg';
import ArrowIcon from '../../icons/arrow_back.svg';

export default function Header() {
  return (
    <div>
      <div className={styles._wrapper}>
        <Image width={135} height={25} src={Logo} alt="Company Brand" />
        <div>
          <div>--- ProgressBar here ---</div>
        </div>
      </div>
      <div>
        <Image src={ArrowIcon} alt="Arrow Icon" />
        <h1 className={styles._title}>Join VerifyMyAge</h1>
        <p className={styles._subtitle}>
          Let's start by setting up your login details.
        </p>
      </div>
    </div>
  );
}
