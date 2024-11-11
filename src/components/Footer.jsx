// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '../css/Footer.module.css';
import instagramIcon from '../assets/Instagram-icon.png';
import tiktokIcon from '../assets/tiktok-icon.png';
import facebookIcon from '../assets/facebook-icon.png';
import youtubeIcon from '../assets/youtube-icon.png';


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.column}>
                <h3>Ayuda</h3>
                <ul>
                    <li>Chatea con nosotros!</li>
                    <li>57-1-310-xxxxxx</li>
                    <li>57-1-310-xxxxxx (Texto)</li>
                    <li>ayuda@stones&rock.com</li>
                    <li>Devoluciones/Cambios</li>
                    <li>FAQ/Contactanos</li>
                    <li>Después de pagar</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h3>TIENDA</h3>
                <ul>
                    <li>Teinda Hombres</li>
                    <li>Teinda Mujeres</li>
                    <li>Calcetines</li>
                    <li>Tarjetas de regalo</li>
                    <li>Recomenda a un conocido</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h3>COMPAÑIA</h3>
                <ul>
                    <li>Nuestras Tiendas</li>
                    <li>Quienes Somos</li>
                    <li>Nuestros Materiales</li>
                    <li>Sostenibilidad</li>
                    <li>Inversionistas</li>
                </ul>
            </div>
            <div className={styles.social}>
                <h3>SIGUENOS EN LAS REDES</h3>
                <p>Únete a nosotros en las redes sociales y mantente actualizado.</p>
                <div className={styles.icons}>
                    <a href="https://www.instagram.com"><img src={instagramIcon} alt="Instagram" /></a>
                    <a href="https://www.tiktok.com/"><img src={tiktokIcon} alt="TikTok" /></a>
                    <a href="https://www.facebook.com"><img src={facebookIcon} alt="Facebook" /></a>
                    <a href="https://www.youtube.com"><img src={youtubeIcon} alt="YouTube" /></a>
                </div>
                <p> <b> Copiright: Todos los derechos resevados @Joaquín H Jiménez Rosas - SENA - ADSO_2879723 </b></p>
            </div>
        </footer>
    );
};


