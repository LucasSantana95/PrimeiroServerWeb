const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerItem')

router.get('/itens', controller.get);
router.get('/additens', controller.additens);

router.post('/additens', controller.additenspost);

router.get('/deletar/:id', controller.deletar);
router.get('/alterar/:id', controller.alterar);

router.post('/alterar/:id', controller.alterarpost);

module.exports = router;