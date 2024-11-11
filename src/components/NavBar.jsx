
// eslint-disable-next-line no-unused-vars
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from '../css/NavBar.module.css';
import logo from '../assets/Stones&Rock_Logo.png';

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <ul className={styles.navbarList}>
          <li className={styles.icon}>
            <a href="https://www.eltiempo.com" style={{ color: 'inherit', textDecoration: 'none' }}>
              <HomeIcon style={{ color: 'inherit' }} />
            </a>
          </li>
          <li className={styles.menuItem}>HOMBRE</li>
          <li className={styles.menuItem}>MUJER</li>
          <li className={styles.menuItem}>CALCETINES</li>
          <li className={styles.sale}>VENTAS</li>
        </ul>
      </div>
      <div className={styles.center}>
        <ul className={styles.navbarList}>
          <li className={styles.logo}>
            <img src={logo} alt="Logo" className={styles.logoImage} />
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <ul className={styles.navbarList}>
          <li className={styles.menuItem}>SOSTENIBILIDAD</li>
          <li className={styles.menuItem}>PROMOCIONES</li>
          <li className={styles.menuItem}>TIENDAS</li>
          <li className={styles.icon}>
            <SearchIcon />
          </li>
          <li className={styles.icon}>
            <AccountCircleIcon />
          </li>
          <li className={styles.icon}>
            <HelpIcon />
          </li>
          <li className={styles.icon}>
            <ShoppingCartIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
};
