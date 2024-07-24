const express = require('express');
const app = express.Router();
const pool = require('../db');

let livros = []

app.get('/', (req, res) => {
    res.json(livros)
})

app.post('/', (req, res) => {
    const { titulo, autor } = req.body;
    const novoLivro = { id: livros.length + 1, titulo, autor };
    livros.push(novoLivro);
    res.status(201).json(novoLivro);
});

app.get('/livros', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM livros');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para adicionar um novo livro
app.post('/livros', async (req, res) => {
    try {
        const { titulo, autor } = req.body;
        const result = await pool.query(
            'INSERT INTO livros (titulo, autor) VALUES ($1, $2) RETURNING *',
            [titulo, autor]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = app;