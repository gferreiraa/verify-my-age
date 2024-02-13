import React, { useState } from 'react';
import styles from './styles.module.css';
import { useCountries } from '@/app/hooks/useCountry';

const InputMobile = () => {
  const { countries, isLoading, isError } = useCountries();
  const [phoneNumber, setPhoneNumber] = useState('');

  /**
   * Handles the change event for the phone input, formats the input value, and updates the phone number state.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - the event object from the phone input change
   * @return {void}
   */
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let numbers = e.target.value.replace(/\D+/g, '');
    numbers = numbers.slice(0, 11);
    const formattedPhoneNumber = numbers
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4,5})(\d{4})$/, '$1-$2');

    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <div className={styles.inputContainer}>
      <select className={styles.countrySelect}>
        {!isLoading &&
          !isError &&
          countries.map((country, index) => (
            <option
              style={{ backgroundImage: `url(${country.bandeira})` }}
              key={index}
              value={country.ddi}
            >
              +{country.ddi}
            </option>
          ))}
      </select>
      <input
        type="text"
        value={phoneNumber}
        onChange={handlePhoneChange}
        className={styles.phoneNumberInput}
      />
    </div>
  );
};

export default InputMobile;
