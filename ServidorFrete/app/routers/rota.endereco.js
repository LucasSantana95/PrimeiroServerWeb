const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerEndereco')

router.get('/endereco/:cep', controller.get);

module.exports = router;