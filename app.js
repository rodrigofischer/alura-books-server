const express = require('express');
const cors = require('cors');
const app = express();

const port = 8000;
const rotaLivros = require('./rotas/livro.js')
const rotaFavoritos = require('./rotas/favoritos.js')

app.use(express.json());
app.use(cors({origin: '*'}))

app.use('/livros', rotaLivros);
app.use('/favoritos', rotaFavoritos);

//LISTENER PORTA 8000
app.listen(port, () => {
    console.log(`Escutando na porta ${port}`);
});