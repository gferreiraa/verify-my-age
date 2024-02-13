import React from 'react';
import Image from 'next/image';
import Done from '../../../icons/done.svg';
import styles from './styles.module.css';
import Logo from '../../../icons/logo.svg';
import LogoNegative from '../../../icons/logo_grey.svg';
import Lockednegative from '../../../icons/Locked_grey.svg';

export default function CardVerified() {
  return (
    <>
      <div>
        <Image
          width={135}
          height={25}
          src={Logo}
          alt="Company Brand"
          className={styles._logo}
        />
        <h1 className={styles._title}>Congrats</h1>
        <p className={styles._subtitle}>
          You'll be automatically verified for all future orders.Your orders{' '}
          <br />
          will be dispatched without delay.
        </p>
      </div>
      <div className={styles._card_mobile}>
        <div className={styles._wrapper}>
          <Image
            width={75}
            height={75}
            src={Done}
            alt="Done Icon"
            className={styles._icon}
          />
          <p className={styles._title_card}>
            You've been successfully verified!
          </p>
        </div>

        <p className={styles._subtitle_mobile}>
          You’ll be automatically verified for all future orders. Your order
          will be dispatched without delay.
        </p>
      </div>
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
    </>
  );
}
