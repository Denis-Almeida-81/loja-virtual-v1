import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    async function buscarProduto() {
      try {
        const response = await axios.get(
          `http://localhost:3000/produtos/${id}`
        );

        setProduct(response.data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    }

    buscarProduto();
  }, [id]);

  if (!product) {
    return (
      <main className="section container">
        <h1>Produto não encontrado</h1>
      </main>
    );
  }

  return (
    <main className="section container">
      <Link to="/produtos" className="back">
        ← Voltar para produtos
      </Link>

      <div className="detail">
        <img src={product.imagem} alt={product.nome} />

        <div>
          <p className="eyebrow">{product.categoria}</p>

          <h1>{product.nome}</h1>

          <p className="detail-price">
            R$ {product.preco.toFixed(2).replace(".", ",")}
          </p>

          <p className="detail-desc">{product.descricao}</p>

          <ul>
            {product.detalhes.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>

          <button
            className="primary-btn large"
            onClick={() => addToCart(product)}
          >
            Adicionar ao carrinho
          </button>

          <div className="marketplaces">
            <h3>Prefere comprar em um marketplace?</h3>

            <a
              href={product.marketplaces.mercadoLivre}
              target="_blank"
              rel="noreferrer"
            >
              Mercado Livre
            </a>

            <a
              href={product.marketplaces.shopee}
              target="_blank"
              rel="noreferrer"
            >
              Shopee
            </a>

            <a
              href={product.marketplaces.amazon}
              target="_blank"
              rel="noreferrer"
            >
              Amazon
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}