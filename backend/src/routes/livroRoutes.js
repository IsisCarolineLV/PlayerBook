const express = require('express');
const router = express.Router();
const livroController = require ('../controllers/livroController');

router.get('/', livroController.listarLivros);
router.post('/', livroController.addLivro);

module.exports = router;