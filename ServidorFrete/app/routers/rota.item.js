const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerItem')

router.get('/item', controller.get)
router.get('/item/:id', controller.getById)
router.post('/item', controller.post)
router.put('/item', controller.alterar)
router.delete('/item/:id', controller.deletar)

module.exports = router;