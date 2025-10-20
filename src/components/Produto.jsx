import React from "react";
import styles from "./Produto.module.css";
import { useParams } from "react-router-dom";
import Head from "./Head";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://fakestoreapi.com/products/${id}`);
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head
        title={`TechPop | ${produto.title}`}
        description={`TechPop | Esse é um produto: ${produto.title}}`}
      />
      <img src={produto.image} alt={produto.title} />
      <div>
        <h1>{produto.title}</h1>
        <span className={styles.price}>R$ {produto.price}</span>
        <p className={styles.description}>{produto.description}</p>
      </div>
    </section>
  );
};

export default Produto;
