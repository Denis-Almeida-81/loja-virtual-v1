import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client.ts";

const prisma = new PrismaClient();

const produtos = [
  {
    nome: "Kit Essenza Aromas",
    categoria: "Kits",
    preco: 89.9,
    imagem:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80",
    descricao:
      "Um kit especial para transformar sua rotina em um momento de cuidado e bem-estar.",
    detalhes: [
      "1 difusor de aromas",
      "2 fragrâncias exclusivas",
      "Embalagem para presente",
    ],
    marketplaces: {
      mercadoLivre: "https://www.mercadolivre.com.br/",
      shopee: "https://shopee.com.br/",
      amazon: "https://www.amazon.com.br/",
    },
  },
  {
    nome: "Vela Premium Vanilla",
    categoria: "Velas",
    preco: 59.9,
    imagem:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80",
    descricao:
      "Vela aromática com fragrância suave de baunilha e acabamento premium.",
    detalhes: [
      "Fragrância de baunilha",
      "Até 40 horas de duração",
      "Embalagem premium",
    ],
    marketplaces: {
      mercadoLivre: "https://www.mercadolivre.com.br/",
      shopee: "https://shopee.com.br/",
      amazon: "https://www.amazon.com.br/",
    },
  },
];

async function main() {
  await prisma.product.deleteMany();
async function main() {
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: produtos,
  });

  console.log("Produtos cadastrados com sucesso!");
}
  await prisma.product.createMany({
    data: produtos,
  });

  console.log("Produtos cadastrados com sucesso!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });