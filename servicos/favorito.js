const fs = require('fs')
const fileName = './favoritos.json';
const livrosService = require('./livro');

function getTodosFavoritos(){
    return JSON.parse(fs.readFileSync(fileName));
}

function insereLivroFavorito(idLivro){
    const livroComoFavorito = livrosService.getLivroPorId(idLivro);
    const todosFavoritos = getTodosFavoritos();
    fs.writeFileSync(fileName, JSON.stringify([...todosFavoritos, livroComoFavorito]));
}

function removeLivroFavoritoPorId(idLivro){
    const todosLivros = getTodosFavoritos();
    const livrosFiltradoSemId = todosLivros.filter( (livro) => livro.id !== idLivro );
    fs.writeFileSync(fileName, JSON.stringify(livrosFiltradoSemId));
}

module.exports = {
    getTodosFavoritos,
    insereLivroFavorito,
    removeLivroFavoritoPorId
};