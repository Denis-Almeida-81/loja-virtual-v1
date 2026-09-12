import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Auth() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, user } = useAuth();

  const isLogin = location.pathname === "/login";

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  // Se o usuário já estiver logado,
  // não permite acessar login/cadastro.
  useEffect(() => {
    if (user) {
      navigate("/checkout", { replace: true });
    }
  }, [user, navigate]);

  // Limpa os campos quando alternar entre login e cadastro
  useEffect(() => {
    setForm({
      nome: "",
      email: "",
      senha: "",
      confirmarSenha: "",
    });
  }, [isLogin]);

  async function submit(e) {
    e.preventDefault();

    // Validação da senha somente no cadastro
    if (!isLogin) {
      if (form.senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
      }

      if (form.senha !== form.confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
      }
    }

    try {
      const endpoint = isLogin ? "/login" : "/usuarios";

      const dados = isLogin
        ? {
            email: form.email,
            senha: form.senha,
          }
        : {
            nome: form.nome,
            email: form.email,
            senha: form.senha,
          };

      const response = await api.post(endpoint, dados);

      // Salva o usuário através do AuthContext
      login(response.data);

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
                type="text"
                required
                value={form.nome}
                onChange={(e) =>
                  setForm({
                    ...form,
                    nome: e.target.value,
                  })
                }
              />
            </label>
          )}

          <label>
            E-mail

            <input
              type="email"
              required
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />
          </label>

          <label>
            Senha

            <input
              type="password"
              required
              minLength={isLogin ? undefined : 6}
              value={form.senha}
              onChange={(e) =>
                setForm({
                  ...form,
                  senha: e.target.value,
                })
              }
            />
          </label>

          {!isLogin && (
            <label>
              Confirmar senha

              <input
                type="password"
                required
                minLength={6}
                value={form.confirmarSenha}
                onChange={(e) =>
                  setForm({
                    ...form,
                    confirmarSenha: e.target.value,
                  })
                }
              />
            </label>
          )}

          <button
            type="submit"
            className="primary-btn large"
          >
            {isLogin ? "Entrar" : "Criar conta"}
          </button>
        </form>

        <p className="switch">
          {isLogin
            ? "Ainda não tem conta?"
            : "Já possui uma conta?"}{" "}

          <Link to={isLogin ? "/cadastro" : "/login"}>
            {isLogin ? "Cadastre-se" : "Entrar"}
          </Link>
        </p>
      </div>
    </main>
  );
}