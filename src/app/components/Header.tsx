import Image from 'next/image';
import styles from './styles.module.css';
import Logo from '../../icons/logo.svg';
export default function Header() {
  return (
    <div>
      <Image src={Logo} alt="Company Brand" />
      <h1 className={styles._title}>Join VerifyMyAge</h1>
      <p>Let's start by setting up your login details.</p>
    </div>
  );
}
