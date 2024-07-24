const express = require('express');
const app = express();

app.use(express.json());

let livros = []

app.get('/livros', (req, res) => {
    res.json(livros)
})

app.post('/livros', (req, res) => {
    const { titulo, autor } = req.body;
    const novoLivro = { id: livros.length + 1, titulo, autor };
    livros.push(novoLivro);
    res.status(201).json(novoLivro);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta http://localhost:3000');
});
