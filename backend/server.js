import "dotenv/config";
import express from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma/client.ts";

const app = express();

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.post("/usuarios", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    const usuario = await prisma.user.create({
      data: {
        nome,
        email,
        senha,
      },
    });

    res.status(201).json(usuario);
  } catch (error) {
    console.error("ERRO AO CRIAR USUÁRIO:", error);
    res.status(500).json({ error: "Erro ao criar usuário" });
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