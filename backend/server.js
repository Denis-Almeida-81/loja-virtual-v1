import "dotenv/config";
import express from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/client.ts";
import bcrypt from "bcrypt";

const app = express();

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.post("/usuarios", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    const senhaHash = await bcrypt.hash(senha, 10);

    const usuario = await prisma.user.create({
      data: {
        nome,
        email,
        senha: senhaHash,
      },
    });

    res.status(201).json({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    });
  } catch (error) {
    console.error("ERRO AO CRIAR USUÁRIO:", error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!usuario) {
      return res.status(401).json({
        error: "E-mail ou senha inválidos",
      });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({
        error: "E-mail ou senha inválidos",
      });
    }

    res.json({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    });
  } catch (error) {
    console.error("ERRO AO FAZER LOGIN:", error);
    res.status(500).json({
      error: "Erro ao fazer login",
    });
  }
});

app.get("/produtos", async (req, res) => {
  try {
    const produtos = await prisma.product.findMany();

    res.json(produtos);
  } catch (error) {
    console.error("ERRO PRISMA:", error);
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
});

app.get("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const produto = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.json(produto);
  } catch (error) {
    console.error("ERRO PRISMA:", error);
    res.status(500).json({ error: "Erro ao buscar produto" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});