// server.js
const express = require('express');
const calcularRota = require('./rota');
const calcularEficiencia = require('./eficiencia');

const app = express();
app.use(express.json());

// Endpoint para calcular rota
app.post('/rota', (req, res) => {
    const { origem, destino } = req.body;
    const resultado = calcularRota(origem, destino);
    res.json(resultado);
});

// Endpoint para calcular eficiência
app.post('/eficiencia', (req, res) => {
    const { rotas } = req.body; // array de rotas já calculadas
    const resultado = calcularEficiencia(rotas);
    res.json(resultado);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});