# 🛍️ Essenza Store

Projeto de loja virtual desenvolvido para praticar e demonstrar conhecimentos em desenvolvimento Full Stack, utilizando React no frontend e Node.js, Express, Prisma e MongoDB no backend.

## 📌 Sobre o projeto

A Essenza Store é uma loja virtual de produtos para casa e bem-estar, desenvolvida com foco em uma experiência de navegação simples, elegante e responsiva.

O projeto possui catálogo de produtos, página individual de produto, carrinho de compras e integração entre frontend e backend.

## 🚀 Tecnologias utilizadas

### Frontend

- React
- React Router DOM
- JavaScript
- HTML5
- CSS3
- Vite

### Backend

- Node.js
- Express
- Prisma ORM
- MongoDB
- CORS
- dotenv

## ✨ Funcionalidades

- Página inicial
- Catálogo de produtos
- Página de detalhes do produto
- Adição de produtos ao carrinho
- Controle de quantidade dos produtos
- Remoção de produtos do carrinho
- Cálculo do total da compra
- Persistência do carrinho com LocalStorage
- Integração com API REST
- Consulta de produtos através do backend
- Links para marketplaces
- Navegação entre páginas com React Router

## 📁 Estrutura do projeto

```text
loja-virtual-v1/
│
├── backend/
│   ├── prisma/
│   ├── generated/
│   ├── seed.js
│   ├── server.js
│   └── prisma.config.ts
│
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js

⚙️ Como executar o projeto
1. Clone o repositório
git clone https://github.com/Denis-Almeida-81/loja-virtual-v1.git
2. Entre na pasta do projeto
cd loja-virtual-v1
3. Instale as dependências
npm install
4. Execute o frontend
npm run dev
5. Execute o backend

Abra outro terminal, entre na pasta backend:

cd backend

E execute:

node server.js

O frontend será executado pelo Vite e o backend ficará disponível em:

http://localhost:3000
🗄️ Banco de dados

O projeto utiliza MongoDB como banco de dados e Prisma como ORM.

O backend disponibiliza endpoints para consulta dos produtos:

GET /produtos
GET /produtos/:id
📚 Objetivo

Este projeto faz parte da minha evolução nos estudos de desenvolvimento web, com foco em React e desenvolvimento Front-end, além da prática de conceitos de integração com APIs e backend.

📌 Status

🚧 Projeto em desenvolvimento.

Novas funcionalidades e melhorias serão adicionadas nas próximas versões.

Desenvolvido por Denis Almeida
