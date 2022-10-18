const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerFrete')

router.get('/frete/:cep', controller.get);

module.exports = router;