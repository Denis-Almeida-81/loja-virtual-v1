import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("essenza-user") || "null");

  function logout() {
    localStorage.removeItem("essenza-user");
    navigate("/");
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          ESSENZA<span>STORE</span>
        </Link>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/produtos">Produtos</Link>

          {user ? (
            <>
              <span>Olá, {user.nome}</span>
              <button onClick={logout}>Sair</button>
            </>
          ) : (
            <Link to="/login">Minha conta</Link>
          )}
        </nav>

        <Link to="/carrinho" className="cart-link">
          🛒 <span>Carrinho</span>
          {totalItems > 0 && <b>{totalItems}</b>}
        </Link>
      </div>
    </header>
  );
}
