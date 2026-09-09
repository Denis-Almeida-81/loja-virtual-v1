import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const response = await axios.get("http://localhost:3000/produtos");

        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    buscarProdutos();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">BEM-VINDO À ESSENZA</p>

          <h1>
            Pequenos detalhes,
            <br />
            <em>grandes momentos.</em>
          </h1>

          <p>
            Uma seleção especial de aromas e produtos pensados para transformar
            sua rotina.
          </p>

          <Link to="/produtos" className="primary-btn large">
            Conhecer produtos
          </Link>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELEÇÃO ESPECIAL</p>
            <h2>Produtos em destaque</h2>
          </div>

          <Link to="/produtos">Ver todos →</Link>
        </div>

        <div className="products-grid">
          {produtos.map((produto) => (
            <ProductCard key={produto.id} product={produto} />
          ))}
        </div>
      </section>

      <section className="marketplace-strip">
        <div className="container">
          <p className="eyebrow">TAMBÉM ESTAMOS NOS</p>

          <h2>Mercado Livre · Shopee · Amazon</h2>

          <p>Escolha onde prefere realizar sua compra.</p>
        </div>
      </section>
    </>
  );
}