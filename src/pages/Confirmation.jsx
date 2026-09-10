import { Link } from "react-router-dom";
export default function Confirmation() {
  return (
    <main className="section container empty">
      <div className="success">✓</div>
      <p className="eyebrow">PEDIDO RECEBIDO</p>
      <h1>Compra finalizada!</h1>
      <p>Seu pedido demonstrativo foi registrado com sucesso.</p>
      <Link to="/" className="primary-btn">
        Voltar para a loja
      </Link>
    </main>
  );
}
