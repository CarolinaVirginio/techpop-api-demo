import React from "react";
import styles from "./Produtos.module.css";
import { Link } from "react-router-dom";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then((json) => {
        const produtosTech = json.filter(
          (produto) => produto.category === "electronics"
        );
        setProdutos(produtosTech);
      });
  }, []);

  if (produtos === null) return null;
  return (
    <section className={`${styles.produtos} animeLeft`}>
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <h1 className={styles.title}>{produto.title}</h1>
          <p className={styles.price}>{produto.price} R$ </p>
          <img src={produto.image} alt={produto.title} width="100" />
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
