const express = require('express');
const app = express();
const port = 8000;
const rotaLivros = require('./rotas/livro.js')


app.use(express.json());
app.use('/livros', rotaLivros);

//LISTENER PORTA 8000
app.listen(port, () => {
    console.log(`Escutando na porta ${port}`);
});