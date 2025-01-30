const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json()); // Usando a funcionalidade do Express diretamente
app.use(cors());

// Conexão com o MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Substitua pelo seu usuário do MySQL
    password: '019856', // Substitua pela sua senha do MySQL
    database: 'controle_financeiro'
});

db.connect((err) => {
    if (err) {
        console.error('Erro de conexão:', err);
        throw err;
    }
    console.log('Conectado ao MySQL!');
});

// Rota para inserir transação
app.post('/inserir', (req, res) => {
    const { tipo, valor, descricao, data, mes } = req.body;
    const query = 'INSERT INTO transacoes (tipo, valor, descricao, data, mes) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [tipo, valor, descricao, data, mes], (err, result) => {
        if (err) {
            console.error('Erro ao inserir transação:', err);
            return res.status(500).send('Erro ao inserir transação');
        }
        res.send('Transação inserida com sucesso!');
    });
});

// Rota para obter histórico
app.get('/historico/:mes', (req, res) => {
    const mes = req.params.mes;
    const query = 'SELECT * FROM transacoes WHERE mes = ?';
    db.query(query, [mes], (err, result) => {
        if (err) {
            console.error('Erro ao buscar histórico:', err);
            return res.status(500).send('Erro ao buscar histórico');
        }
        res.send(result);
    });
});

// Rota para excluir histórico
app.delete('/excluir/:id', (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM transacoes WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Erro ao excluir transação:', err);
            return res.status(500).send('Erro ao excluir transação');
        }
        res.send('Transação excluída com sucesso!');
    });
});

// Rota para calcular saldo
app.get('/saldo/:mes', (req, res) => {
    const mes = req.params.mes;
    const query = 'SELECT SUM(CASE WHEN tipo = "ganho" THEN valor ELSE -valor END) AS saldo FROM transacoes WHERE mes = ?';
    db.query(query, [mes], (err, result) => {
        if (err) {
            console.error('Erro ao calcular saldo:', err);
            return res.status(500).send('Erro ao calcular saldo');
        }
        res.send(result[0]);
    });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
