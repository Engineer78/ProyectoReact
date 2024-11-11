
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '../css/ProductNav.module.css';

export const ProductNav = () => {
  return (
    <nav className={styles.productNav}>
      <ul className={styles.productNavList}>
        <li className={styles.menuItem}>Camisetas para Hombre</li>
        <li className={styles.menuItem}>Camisetas para Mujer</li>
        <li className={styles.menuItem}>Lo Nuevo</li>
      </ul>
    </nav>
  );
};
