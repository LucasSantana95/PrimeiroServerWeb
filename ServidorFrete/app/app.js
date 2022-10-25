const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const rotaEndereco = require('./routers/rota.endereco');
const rotaFrete = require('./routers/rota.frete');
const rotaItem = require('./routers/rota.item');

mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
    console.log("conectado com sucesso!");

}).catch((err) => {
    console.log("falha ao se conectar, erro: "+ err);
});
    app.use(cookieParser());
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:false}));
    app.set('view engine','ejs');
    app.engine('ejs', require('ejs').__express);
    app.use(express.static(path.join(__dirname,'public')));

    app.use(rotaEndereco);
    app.use(rotaFrete);
    app.use(rotaItem);
    
    app.listen(3000);
    
    console.log('Servidor rodando em http://localhost:3000/');