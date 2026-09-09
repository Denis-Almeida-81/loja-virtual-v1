import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function Products() {
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
    <main className="section container">
      <div className="page-heading">
        <p className="eyebrow">NOSSA LOJA</p>

        <h1>Produtos</h1>

        <p>Conheça nossa seleção de produtos.</p>
      </div>

      <div className="products-grid">
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            product={produto}
          />
        ))}
      </div>
    </main>
  );
}