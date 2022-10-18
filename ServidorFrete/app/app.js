const express = require('express');
const app = express();

const rotaEndereco = require('./routers/rota.endereco');
const rotaFrete = require('./routers/rota.frete');

app.use(rotaEndereco);
app.use(rotaFrete);

app.listen(3000);

console.log('Servidor rodando em http://localhost:3000/');