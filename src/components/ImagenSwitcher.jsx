// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import image1 from '../assets/Imagen_tienda1.png';
import image2 from '../assets/Imagen_tienda2.png';
import styles from '../css/ImagenSwitcher.module.css';

export const ImagenSwitcher = () => {
  const [currentImage, setCurrentImage] = useState(image1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === image1 ? image2 : image1));
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.imageSwitcher}>
      <img src={currentImage} alt="Image Switcher" className={styles.image} />
      <div className={styles.buttonContainer}>
        <a href="https://www.moviesshop.co/hombre">
          <button className={styles.button}>TIENDA HOMBRES</button>
        </a>
        <a href="https://www.moviesshop.co/mujer">
          <button className={styles.button}>TIENDA MUJERES</button>
        </a>
      </div>
    </div>
  );
};
