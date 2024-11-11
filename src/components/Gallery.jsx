// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '../css/Gallery.module.css';
import image1 from '../assets/Galeria1.png';
import video1 from '../assets/VideoClic1.mp4';
import image3 from '../assets/Galeria2.png';

const items = [
  {
    src: image1,
    alt: 'Just Eat It',
    title: 'Just Eat It',
    description: 'Camiseta algodón 100% de calidad premium.',
    type: 'image',
  },
  {
    src: video1,
    alt: 'Video T-Shirt',
    title: 'T-Shirt Unisex',
    description: 'Camiseta algodón 100%.',
    type: 'video',
  },
  {
    src: image3,
    alt: 'Yin Yang Cat',
    title: 'Yin Yang Cat',
    description: 'Camiseta algodón 100% de calidad premium.',
    type: 'image',
  },
];

export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      {' '}
      {items.map((item, index) => (
        <div key={index} className={styles.itemContainer}>
          {' '}
          {item.type === 'image' ? (
            <img src={item.src} alt={item.alt} className={styles.image} />
          ) : (
            <video
              src={item.src}
              autoPlay
              loop
              muted
              className={styles.video}
            ></video>
          )}{' '}
          <div className={styles.buttonContainer}>
            {' '}
            <a href="https://stirpe.co/hombre">
              <button className={styles.button}>TIENDA HOMBRES</button>{' '}
            </a>
            <a href="https://stirpe.co/mujer">
              <button className={styles.button}>TIENDA MUJERES</button>{' '}
            </a>
          </div>{' '}
        </div>
      ))}{' '}
    </div>
  );
};
