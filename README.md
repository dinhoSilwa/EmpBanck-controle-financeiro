
<div id='top'>

# Empbank - Controle Financeiro

</div>

Este projeto é uma aplicação de controle financeiro onde o usuário pode cadastrar suas entradas e saídas financeiras mensais. Foi desenvolvido como desafio técnico para o processo seletivo da [**Empbank**](https://empbank.com.br/) para o cargo de **Desenvolvedor Fullstack Júnior**.

> Nota: O banco de dados MongoDB e a API estão hospedados via Railway, que possui limitação de horas mensais de funcionamento. Essa limitação permitiu o tempo necessário para avaliação do projeto. Após o término do limite, o banco de dados foi excluído, e o deploy da aplicação foi interrompido. Fique à vontade para estudar o código.

<!-- prettier-ignore -->
| 🪧 Vitrine. Dev |     |
| -------------- | --- |
| ✨ Nome        | **Empbank: controle financeiro** |
| 🏷️ Tecnologias | React, TypeScript, [Tailwind CSS](https://tailwindcss.com/), Mongoose, MongoDB, Node.js, Express, Railway |
| 🎨 Design      | [Figma](https://www.figma.com/file/I5ctuYJN7TMTEQx5oL1wt3/Prova-Empbank) |

![](https://raw.githubusercontent.com/sucodelarangela/empbank/main/web/public/og-image.jpg#vitrinedev)

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white">
  <img src="https://img.shields.io/badge/MongoDB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white">
</div>

## ✅ Requisitos técnicos

- **Front-end:** React, TypeScript e Tailwind CSS.
- **Back-end:** Node, TypeScript, Express e Mongoose (para MongoDB).
- **Banco de dados:** MongoDB.

## 🖧 Funcionalidades

### Tela de Login

- [x] Login por email e senha

### Tela de Cadastro

- [x] Cadastro de usuário com nome completo, email e senha.

### Tela Wallet

- [x] Dashboard com entrada, saída e valor total;
- [x] Listagem de todas as transações segmentadas por data, com paginação;
- [x] Barra de busca por título e nome da categoria;
- [x] Botão para adicionar nova transação;
- [x] Modal para nova transação;
- [x] Tabela de transações com título, valor, categoria e entrada ou saída.

### Opcionais

- [x] Aplicação responsiva.

## ⚙️ Como funciona

- O usuário faz seu cadastro na aplicação na tela de Cadastro (podendo usar um e-mail fictício);
- Se o cadastro der certo, o usuário é redirecionado para a tela de Login para acesso;
- Caso não queira efetuar cadastro, é possível acessar a aplicação com o email `teste@teste.com` e senha `123456`;
- Na tela Wallet, o usuário pode cadastrar uma Nova Transação no botão do canto superior direito;
- As transações cadastradas são mostradas na mesma tela em forma de tabela;
- Para pesquisar transações, basta digitar na barra de busca;
- Para sair da aplicação, clique na mensagem de boas vindas na parte superior da tela.

<a href='#top'>🔼 Voltar ao topo</a>

---

## 🔎 Overview

The project in this repository is a financial control app where users can log their monthly cash inflows and outflows. Developed as a technical challenge for the [**Empbank**](https://empbank.com.br/) **Junior Fullstack Developer** position.

> Note: The MongoDB database and API are hosted via Railway, which has a monthly usage limit. This time limit allowed for sufficient time for technical review. When the time limit finished, the database was deleted, and the app deployment was stopped. Feel free to explore the code.

## ✅ Technical requirements

- **Front-end:** React, TypeScript, and Tailwind CSS.
- **Back-end:** Node, TypeScript, Express, and Mongoose (for MongoDB).
- **Database:** MongoDB.

## 🖧 Features

### Login screen

- [x] Login with email and password

### Register screen

- [x] User registration with name, email, and password

### Wallet screen

- [x] Dashboard with inflows, outflows, and total balance;
- [x] Paginated list of transactions sorted by date;
- [x] Search bar for title and category;
- [x] Button to add a new transaction;
- [x] Modal for adding a new transaction;
- [x] Table with transaction details: title, amount, category, and type (inflow/outflow).

### Optional

- [x] Responsive app.

## ⚙️ How to use it

- Users can register on the app's Register page (using a fake email is possible);
- If registration succeeds, the user is redirected to the Login screen;
- Users can alternatively log in with `teste@teste.com` and password `123456`;
- On the Wallet screen, users can add new transactions using the button at the top right;
- New transactions are displayed on the same screen in a table format;
- Transactions can be searched using the search bar;
- To log out, click the welcome message at the top center.

<a href='#top'>🔼 Back to top</a>
