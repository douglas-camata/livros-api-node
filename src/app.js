const express = require('express');
const app = express();
const pool = require('./db');

const livrosRoutes = require('./routes/livros')

app.use(express.json());

// Configura o diretório de views e o motor de templates EJS
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use('/api', livrosRoutes)

// Rota para exibir os livros cadastrados
// app.get('/', async (req, res) => {
//     try {
//         const { rows } = await pool.query('SELECT * FROM livros');
//         res.render('index', { livros: rows });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
