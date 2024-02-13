'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Lockednegative from '../../../icons/Locked_grey.svg';
import Locked from '../../../icons/locked.svg';
import LogoNegative from '../../../icons/logo_grey.svg';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputMobile from '../InputMobile/InputMobile';
import styles from './styles.module.css';

export default function Form() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const router = useRouter();

  const handleSubmit = () => {
    if (fullName && email && password && termsAccepted) {
      router.push('/success');
    } else {
      alert('Please fill out all fields and accept the terms.');
    }
  };
  return (
    <div className={styles._wrapper}>
      <Input
        label={'Full Name'}
        placeholder={'Please type in...'}
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <Input
        label={'Email'}
        placeholder={'Please type in...'}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputMobile />
      <Input
        value={password}
        label={'Password'}
        placeholder={'Please type in...'}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        onChange={(e) => setTermsAccepted(e.target.checked)}
        checked={termsAccepted}
        type="checkbox"
        label={
          'Tick this box to confirm you’ve read and agreed to our Terms and Privacy Policy.'
        }
        placeholder={''}
      />

      <hr className={styles._divider} />
      <div className={styles._footer}>
        <div className={styles._wrapper_footer}>
          <Image
            alt="Locked Icon Grey"
            width={10}
            height={10}
            src={Lockednegative}
          />
          <span className={styles._footer_text}>Secured by</span>
        </div>
        <Image alt="Logo Grey" width={76} height={18} src={LogoNegative} />
      </div>
      <div className={styles._wrapper_buttons}>
        <Button
          backgroundColor="#ffcc00"
          label="Save"
          icon={<Image src={Locked} alt="Locked" />}
          onClick={handleSubmit}
        />
        <Link
          className={styles._link}
          href="https://verify.verifymyage.co.uk/ebay/signup"
          target="_blank"
        >
          <Button
            borderColor="var(--solid-black)"
            backgroundColor="var(--white)"
            label="Got a VerifyMyAge account? Sign in"
          />
        </Link>
      </div>
    </div>
  );
}
