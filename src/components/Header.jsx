import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { totalItems } = useCart();
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    logout();
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

          <Link to="/produtos">
            Produtos
          </Link>

          {user ? (
            <>
              <span>Olá, {user.nome}</span>

              <button
                type="button"
                onClick={handleLogout}
              >
                Sair
              </button>
            </>
          ) : (
            <Link to="/login">
              Minha conta
            </Link>
          )}
        </nav>

        <Link
          to="/carrinho"
          className="cart-link"
        >
          🛒 <span>Carrinho</span>

          {totalItems > 0 && (
            <b>{totalItems}</b>
          )}
        </Link>
      </div>
    </header>
  );
}