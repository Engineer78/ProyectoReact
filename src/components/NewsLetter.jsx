// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styles from '../css/NewsLetter.module.css';

export const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
  };

  return (
    <div className={styles.newsletterSignup}>
      <h1>¿Quieres tener la primera opción?</h1>
      <p>
        Únase a nuestra lista de correo electrónico y sea el primero en conocer nuevos productos
        de edición limitada, innovaciones de materiales y muchas otras actualizaciones divertidas.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Introduzca su dirección de correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">INSCRIBIRSE</button>
      </form>
      <p className={styles.note}>
        <br />
        Nota: Puede darse de baja en cualquier momento. Consulte nuestra<a href="/privacy-policy"> Politica de Privacidad</a> y <a href="/terms">Terminos.</a>.
      </p>
    </div>
  );
}





