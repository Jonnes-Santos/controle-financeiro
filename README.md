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
Run HTML
2. Configure o Banco de Dados
Abra o MySQL Workbench ou terminal do MySQL.

Crie um banco de dados chamado controle_financeiro:

sql
Copy
CREATE DATABASE controle_financeiro;
Crie a tabela transacoes:

sql
Copy
USE controle_financeiro;

CREATE TABLE transacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo ENUM('gasto', 'ganho') NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    descricao VARCHAR(255),
    data DATE NOT NULL,
    mes VARCHAR(20) NOT NULL
);
3. Configure o Backend
Instale as dependências do projeto:

bash
Copy
npm install
Configure as credenciais do banco de dados no arquivo server.js:

javascript
Copy
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Substitua pelo seu usuário do MySQL
    password: '', // Substitua pela sua senha do MySQL
    database: 'controle_financeiro'
});
Inicie o servidor:

bash
Copy
node server.js
O servidor estará rodando em http://localhost:3000.

4. Configure o Frontend
Abra o arquivo index.html no navegador.

Certifique-se de que o backend está rodando para que as requisições funcionem.

📂 Estrutura do Projeto
Copy
controle-financeiro/
├── server.js            # Backend (Node.js + Express + MySQL)
├── index.html           # Frontend (HTML + JavaScript)
├── README.md            # Documentação do projeto
├── package.json         # Dependências do Node.js
└── node_modules/        # Dependências instaladas
🤝 Como Contribuir
Faça um fork do projeto.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Commit suas alterações (git commit -m 'Adiciona nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.
