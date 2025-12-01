const { Router } = require('express');
const { getLivrosFavoritos, postLivroFavorito, deleteLivroFavorito } = require('../controladores/favorito.js')

const router = Router();

//ROTA ROOT
router.get('/', getLivrosFavoritos);
router.post('/:id', postLivroFavorito);
router.delete('/:id', deleteLivroFavorito);

module.exports = router;