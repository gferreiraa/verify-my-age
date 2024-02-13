'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import EyeOpenIcon from '../../../icons/password_eye.svg';
import EyeCloseIcon from '../../../icons/password_eye_close.svg';
import { InputProps } from './Input.types';
import styles from './styles.module.css';

export default function Input({
  label,
  placeholder,
  type,
  value,
  onChange,
  checked,
  ...props
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isValid, setIsValid] = useState(true);

  /**
   * Validates the email format.
   *
   * @param {string} email - the email to be validated
   * @return {boolean} true if the email is in a valid format, false otherwise
   */
  const validateEmail = (email: string) => {
    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'email') {
      const emailIsValid = validateEmail(e.target.value);
      setIsValid(emailIsValid);
    }
    onChange && onChange(e);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  if (type === 'checkbox') {
    return (
      <div>
        <label className={styles._checkbox_container}>
          <input
            {...props}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            className={styles._checkbox}
          />
          <span className={styles._checkbox_label}>{label}</span>
        </label>
      </div>
    );
  }

  return (
    <div className={styles.input_label_container}>
      <label
        className={`${styles.input_label} ${!isValid && type === 'email' ? styles.error : ''}`}
      >
        {label}
      </label>
      <div className={styles.input_wrapper}>
        <input
          {...props}
          type={type === 'password' && !isPasswordVisible ? 'password' : 'text'}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          className={`${styles.input_field} ${!isValid && type === 'email' ? styles.error : ''}`}
        />
        {type === 'password' && (
          <button
            onClick={togglePasswordVisibility}
            className={styles.password_toggle}
            type="button"
          >
            <Image
              src={isPasswordVisible ? EyeOpenIcon : EyeCloseIcon}
              alt={isPasswordVisible ? 'Hide password' : 'Show password'}
            />
          </button>
        )}
      </div>
    </div>
  );
}
