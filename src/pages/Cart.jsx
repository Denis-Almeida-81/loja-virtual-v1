import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
export default function Cart() {
  const { cart, removeFromCart, changeQuantity, total } = useCart();
  if (!cart.length)
    return (
      <main className="section container empty">
        <h1>Seu carrinho está vazio</h1>
        <p>Adicione algum produto para continuar.</p>
        <Link to="/produtos" className="primary-btn">
          Ver produtos
        </Link>
      </main>
    );
  return (
    <main className="section container">
      <div className="page-heading">
        <p className="eyebrow">SEU PEDIDO</p>
        <h1>Carrinho</h1>
      </div>
      <div className="cart-layout">
        <div>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.imagem} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <p>R$ {item.preco.toFixed(2).replace(".", ",")}</p>
                <div className="qty">
                  <button
                    onClick={() => changeQuantity(item.id, item.quantidade - 1)}
                  >
                    −
                  </button>
                  <span>{item.quantidade}</span>
                  <button
                    onClick={() => changeQuantity(item.id, item.quantidade + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="remove"
                onClick={() => removeFromCart(item.id)}
              >
                Remover
              </button>
            </div>
          ))}
        </div>
        <aside className="summary">
          <h2>Resumo</h2>
          <div>
            <span>Subtotal</span>
            <strong>R$ {total.toFixed(2).replace(".", ",")}</strong>
          </div>
          <div>
            <span>Frete</span>
            <span>A calcular</span>
          </div>
          <hr />
          <div className="summary-total">
            <span>Total</span>
            <strong>R$ {total.toFixed(2).replace(".", ",")}</strong>
          </div>
          <Link to="/cadastro" className="primary-btn large">
            Continuar compra
          </Link>
        </aside>
      </div>
    </main>
  );
}
