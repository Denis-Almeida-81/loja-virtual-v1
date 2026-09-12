import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

export default function Auth() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === "/login";
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });

  async function submit(e) {
    e.preventDefault();

    try {
      const endpoint = isLogin ? "/login" : "/usuarios";

      const response = await api.post(endpoint, form);

      localStorage.setItem("essenza-user", JSON.stringify(response.data));

      navigate("/checkout");
    } catch (error) {
      console.error("Erro de autenticação:", error);

      if (error.response?.status === 401) {
        alert("E-mail ou senha inválidos.");
      } else if (error.response?.status === 409) {
        alert("Este e-mail já está cadastrado.");
      } else {
        alert("Não foi possível realizar a operação.");
      }
    }
  }

  return (
    <main className="section container auth">
      <div className="form-card">
        <p className="eyebrow">
          {isLogin ? "BEM-VINDO DE VOLTA" : "CRIAR CONTA"}
        </p>
        <h1>{isLogin ? "Entrar" : "Cadastre-se"}</h1>
        <p>
          {isLogin
            ? "Acesse sua conta para continuar."
            : "Crie sua conta para finalizar sua compra."}
        </p>
        <form onSubmit={submit}>
          {!isLogin && (
            <label>
              Nome
              <input
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
              />
            </label>
          )}
          <label>
            E-mail
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>
          <label>
            Senha
            <input
              type="password"
              required
              value={form.senha}
              onChange={(e) => setForm({ ...form, senha: e.target.value })}
            />
          </label>
          <button className="primary-btn large">
            {isLogin ? "Entrar" : "Criar conta"}
          </button>
        </form>
        <p className="switch">
          {isLogin ? "Ainda não tem conta?" : "Já possui uma conta?"}{" "}
          <Link to={isLogin ? "/cadastro" : "/login"}>
            {isLogin ? "Cadastre-se" : "Entrar"}
          </Link>
        </p>
      </div>
    </main>
  );
}
