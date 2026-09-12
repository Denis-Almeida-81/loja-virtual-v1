# 🛍️ Essenza Store

Projeto de loja virtual desenvolvido para praticar e demonstrar conhecimentos em desenvolvimento **Full Stack**, com foco em **React no frontend** e **Node.js, Express, Prisma e MongoDB no backend**.

## 🌐 Acesse o projeto

**[👉 Acessar a Essenza Store](https://essenza-store.netlify.app)**


## 📌 Sobre o projeto

A **Essenza Store** é uma loja virtual de produtos para casa e bem-estar, desenvolvida com uma proposta visual elegante, navegação simples e layout responsivo.

O projeto simula uma experiência de compra completa, incluindo catálogo de produtos, detalhes dos produtos, carrinho, cadastro e login de usuários e fluxo de checkout.

## 🚀 Tecnologias utilizadas

### Frontend

- React
- JavaScript
- HTML5
- CSS3
- React Router DOM
- Vite
- Axios
- Styled Components
- LocalStorage

### Backend

- Node.js
- Express
- Prisma ORM
- MongoDB
- CORS
- dotenv
- bcrypt

### Deploy

- **Frontend:** Netlify
- **Backend:** Render
- **Banco de dados:** MongoDB Atlas

## ✨ Funcionalidades

### 🛍️ Produtos

- Página inicial
- Catálogo de produtos
- Página individual de detalhes
- Consulta dos produtos através da API
- Links para marketplaces

### 🛒 Carrinho

- Adição de produtos ao carrinho
- Controle de quantidade
- Remoção de produtos
- Cálculo do total da compra
- Persistência do carrinho com LocalStorage

### 🔐 Autenticação

- Cadastro de usuários
- Login
- Validação de senha
- Confirmação de senha no cadastro
- Proteção de rotas privadas
- Logout
- Persistência da sessão no navegador
- Senhas armazenadas com hash utilizando bcrypt

### 💳 Checkout

- Acesso ao checkout somente para usuários autenticados
- Fluxo de finalização da compra
- Página de confirmação do pedido

## 🔗 API

O backend disponibiliza endpoints REST para usuários, autenticação e produtos.

### Usuários e autenticação

```text
POST /usuarios
POST /login
```

### Produtos

```text
GET /produtos
GET /produtos/:id
```

Backend em produção:

https://loja-virtual-v1.onrender.com

## 📁 Estrutura do projeto

```text
loja-virtual-v1/

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
│   ├── services/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── public/
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## ⚙️ Como executar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/Denis-Almeida-81/loja-virtual-v1.git
```

### 2. Entre na pasta do projeto

```bash
cd loja-virtual-v1
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o frontend

```bash
npm run dev
```

### 5. Execute o backend

Abra outro terminal e entre na pasta `backend`:

```bash
cd backend
```

Depois execute:

```bash
node server.js
```

O frontend será executado pelo Vite.

O backend ficará disponível, por padrão, em:

```text
http://localhost:3000
```

## 🗄️ Banco de dados

O projeto utiliza **MongoDB Atlas** como banco de dados e **Prisma ORM** para comunicação entre o backend e o banco.

As variáveis de ambiente devem ser configuradas em um arquivo `.env`, incluindo a conexão com o MongoDB.

> O arquivo `.env` não deve ser enviado para o GitHub.

## 📚 Objetivo

Este projeto faz parte da minha evolução nos estudos de desenvolvimento web, com foco em **React e desenvolvimento Front-end**, além da prática de conceitos de:

- Componentização
- Hooks
- Context API
- React Router
- Consumo de APIs REST
- Gerenciamento de estado
- LocalStorage
- Autenticação
- Node.js e Express
- Prisma
- MongoDB
- Deploy de aplicações

## 📌 Status

🚧 **Projeto em desenvolvimento**

O projeto continuará recebendo novas funcionalidades, melhorias de interface e evoluções na arquitetura.

## 👨‍💻 Desenvolvido por

**Denis Almeida**

Em transição de carreira para desenvolvimento Front-end.
