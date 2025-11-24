const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, removeLivroPorId } = require("../servicos/livro");

function getLivros(req, res) {
    try {
        const livros = getTodosLivros();
        res.send(livros);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function getLivro(req, res){
    try {
        const idLivro = req.params.id;
        validaIdLivro(idLivro, res, () => {
            const livro = getLivroPorId(idLivro);
            res.status(201);
            res.send(livro);
        });
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function postLivro(req, res){
    try {
        const novoLivro = req.body;
        if(novoLivro.nome){
            insereLivro(novoLivro);
            res.status(201);
            res.send('Livro criado com sucesso!');
        }
        else{
            res.status(422);
            res.send('O campo nome é obrigatório!');
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function patchLivro(req, res){
    try {
        const livroAlterado = req.body;
        const idLivro = req.params.id;
        validaIdLivro(idLivro, res, () => {
            modificaLivro(livroAlterado, idLivro);
            res.status(201);
            res.send('Livro alterado com sucesso!');
        });
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res){
    try {
        const idLivro = req.params.id;
        validaIdLivro(idLivro, res, () => {
            removeLivroPorId(idLivro);
            res.status(201);
            res.send('Livro excluído com sucesso!');
        });
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function validaIdLivro(idLivro, res, functionPerform){
    if(idLivro && Number(idLivro)){
        functionPerform();
    }
    else{
        res.status(422);
        res.send('Id Inválido');
    }
}

module.exports = {
    getLivros, 
    getLivro, 
    postLivro, 
    patchLivro, 
    deleteLivro
};