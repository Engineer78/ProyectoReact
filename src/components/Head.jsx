// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styles from '../css/Head.module.css';

export const Head = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    <h6 key="1">Nuestros nuevos diseños ya están aquí: La imagen que realza tú estilo. <a href="https://www.amazon.com">Comprar para Hombre</a> | <a href="https://www.mercadolibre.com.co"> Comprar para Mujer</a></h6>,
    <h6 key="2">Nuevos colres y estampados: mejora tú estilo con nuestra marca.. <a href="https://www.dafiti.com.co">Compra Ahora</a></h6>,
    <h6 key="3"> Envío gratuito en pedidos superiores a $100.000. Devoluciones gratuitas</h6>];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 8500); // Cambia el texto cada 8.5 segundos

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    //antes se usaban <DIV></DIV>, luego <fragnment></fragnment> ahora se usan <></>
    <>
      <h5 className={styles.head}>{texts[currentIndex]}</h5>
    </>
  );
};
