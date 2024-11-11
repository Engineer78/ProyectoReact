// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '../css/IntroductionBanner.module.css';
import backgroundImage from '../assets/IntroductionBanner.png';

export const IntroductionBanner = () => {
  return (
    <div
      className={styles.introductionBanner}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
};
