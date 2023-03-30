const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerItem')

/* router.get('/itens', controller.get);
router.get('/additens', controller.additens);

router.post('/additens', controller.additenspost);

router.get('/deletar/:id', controller.deletar);
router.get('/alterar/:id', controller.alterar);

router.post('/alterar/:id', controller.alterarpost);
 */
router.get('/item', controller.get)
router.get('/item/:id', controller.getById)
router.post('/item', controller.post)
router.put('/item', controller.alterar)
router.delete('/item/:id', controller.deletar)

module.exports = router;