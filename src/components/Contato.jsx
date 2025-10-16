import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <img src={foto} alt="Telefone" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>techpop@gmail.com</li>
          <li>99999-9999</li>
          <li>Avenida Inovação, 2525</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
