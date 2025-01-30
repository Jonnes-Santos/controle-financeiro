<h1 align="center">💵 Controle Financeiro 💵</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.x-green" alt="Node.js Version">
  <img src="https://img.shields.io/badge/MySQL-8.0-blue" alt="MySQL Version">
  <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License">
</p>

<p align="center">
  Um sistema simples de controle financeiro desenvolvido em <strong>Node.js</strong> (backend) e <strong>HTML/JavaScript</strong> (frontend), com banco de dados <strong>MySQL</strong>.
</p>

---

## 🚀 Funcionalidades

<div align="center">
  <table>
    <tr>
      <th>Funcionalidade</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>💸 Inserir Gastos</td>
      <td>Adiciona um novo gasto ao sistema.</td>
    </tr>
    <tr>
      <td>💰 Inserir Ganhos</td>
      <td>Adiciona um novo ganho ao sistema.</td>
    </tr>
    <tr>
      <td>📜 Mostrar Histórico</td>
      <td>Exibe todas as transações do mês selecionado.</td>
    </tr>
    <tr>
      <td>🗑️ Excluir Histórico</td>
      <td>Remove uma transação específica pelo ID.</td>
    </tr>
    <tr>
      <td>🧮 Calcular Saldo</td>
      <td>Calcula o saldo atual com base nas transações do mês selecionado.</td>
    </tr>
  </table>
</div>

---

## 🛠️ Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- <img src="https://img.icons8.com/color/48/000000/nodejs.png" width="16" height="16" alt="Node.js"> [Node.js](https://nodejs.org/) (v18 ou superior)
- <img src="https://img.icons8.com/color/48/000000/mysql.png" width="16" height="16" alt="MySQL"> [MySQL](https://www.mysql.com/) (ou um servidor MySQL remoto)
- <img src="https://img.icons8.com/color/48/000000/mysql-workbench.png" width="16" height="16" alt="MySQL Workbench"> [MySQL Workbench](https://www.mysql.com/products/workbench/) (opcional, para gerenciar o banco de dados)

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto:

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/controle-financeiro.git
cd controle-financeiro
📂 Estrutura do Projeto
Copy
controle-financeiro/
├── server.js            # Backend (Node.js + Express + MySQL)
├── index.html           # Frontend (HTML + JavaScript)
├── README.md            # Documentação do projeto
├── package.json         # Dependências do Node.js
└── node_modules/        # Dependências instaladas
