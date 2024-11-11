// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../css/ImageCarrusel.module.css';

//Importar imagenes directamente
import img1 from '../assets/CH1.png';
import img2 from '../assets/CC1.png';
import img3 from '../assets/CM1.png';
import img4 from '../assets/CH2.png';
import img5 from '../assets/CC2.png';
import img6 from '../assets/CM2.png';
import img7 from '../assets/CH3.png';
import img8 from '../assets/CC3.png';
import img9 from '../assets/CM3.png';
import img10 from '../assets/CH4.png';
import img11 from '../assets/CC4.png';
import img12 from '../assets/CM4.png';
import img13 from '../assets/CH5.png';
import img14 from '../assets/CC5.png';
import img15 from '../assets/CM5.png';


export const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // Mostrar flechas de navegación
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Mostrar 2 diapositivas para pantallas medianas 
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // Mostrar 1 diapositiva para pantallas pequeñas 
                    slidesToScroll: 1,
                }
            }
        ]
    };

    // Añade más rutas de imágenes aquí
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
        img13, img14, img15];

    return (
        <div className={styles.carousel}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className={styles.image} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};


