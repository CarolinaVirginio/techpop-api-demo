import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="TechPop | Contato" description="Entre em contato" />
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
