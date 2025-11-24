const fs = require('fs')
const livroFileName = './livros.json';

function getTodosLivros(){
    return JSON.parse(fs.readFileSync(livroFileName));
}

function getLivroPorId(id){
    const todosLivros = getTodosLivros();
    const livroFiltrado = todosLivros.filter( (livro) => livro.id === id );
    return livroFiltrado[0] || {};
}

function insereLivro(novoLivro){
    const livrosAtuais = getTodosLivros();
    const novoRegistro = novoLivro;
    fs.writeFileSync(livroFileName, JSON.stringify([...livrosAtuais, novoRegistro]));
}

function modificaLivro(modificacoes, idLivro){
    let livrosAtuais = getTodosLivros();
    const indiceModificado = livrosAtuais.findIndex((elem) => elem.id === idLivro);
    const livroMerged = { ...livrosAtuais[indiceModificado], ...modificacoes};
    livrosAtuais[indiceModificado] = livroMerged;
    fs.writeFileSync(livroFileName, JSON.stringify(livrosAtuais));
}

function removeLivroPorId(idLivro){
    const todosLivros = getTodosLivros();
    const livrosFiltradoSemId = todosLivros.filter( (livro) => livro.id !== idLivro );
    fs.writeFileSync(livroFileName, JSON.stringify(livrosFiltradoSemId));
}

module.exports = {
    getTodosLivros, 
    getLivroPorId, 
    insereLivro, 
    modificaLivro, 
    removeLivroPorId
};