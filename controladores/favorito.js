const { getTodosFavoritos, insereLivroFavorito, removeLivroFavoritoPorId } = require("../servicos/favorito");

function getLivrosFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos();
        res.send(livros);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function postLivroFavorito(req, res){
    try {
        const idLivro = req.params.id;
        validaIdLivroFavorito(idLivro, res, () => {
            insereLivroFavorito(idLivro);
            res.status(201);
            res.send('Livro favorito incluído com sucesso!');
        });
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function deleteLivroFavorito(req, res){
    try {
        const idLivro = req.params.id;
        validaIdLivroFavorito(idLivro, res, () => {
            removeLivroFavoritoPorId(idLivro);
            res.status(201);
            res.send('Livro favorito excluído com sucesso!');
        });
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function validaIdLivroFavorito(idLivro, res, functionPerform){
    if(idLivro && Number(idLivro)){
        functionPerform();
    }
    else{
        res.status(422);
        res.send('Id Inválido');
    }
}

module.exports = {
    getLivrosFavoritos, 
    postLivroFavorito, 
    deleteLivroFavorito
};