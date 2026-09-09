import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <article className="product-card">
      <Link to={`/produto/${product.id}`}>
        <img src={product.imagem} alt={product.nome} />
      </Link>
      <div className="product-info">
        <small>{product.categoria}</small>
        <h3>{product.nome}</h3>
        <strong>R$ {product.preco.toFixed(2).replace(".", ",")}</strong>
        <div className="card-actions">
          <Link className="secondary-btn" to={`/produto/${product.id}`}>
            Ver produto
          </Link>
          <button className="primary-btn" onClick={() => addToCart(product)}>
            Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}
