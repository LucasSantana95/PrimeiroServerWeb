const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const rotaEndereco = require('./routers/rota.endereco');
const rotaFrete = require('./routers/rota.frete');
const rotaItem = require('./routers/rota.item');

const mockedUser = {
    id : '123',
    email : 'teste@teste.com',
    senha: '$2b$12$1xV4G3QM7rtP.K17ptl7ou1QqVv3drAlZyKgDrnMKpPmoKqDXYZHS'
}


mongoose.connect(process.env.DB_URL).then(() => {
    console.log("conectado com sucesso!");
}).catch((err) => {
    console.log("falha ao se conectar, erro: " + err);
});

app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.use(express.static(path.join(__dirname, 'public')));

app.use(rotaEndereco);
app.use(rotaFrete);
app.use(rotaItem);


const checkToken = (req,res,next) =>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token){
        return res.status(422).json({ msg : "Token inválido"})
    }
    const secret = process.env.SECRET
    try {
        jwt.verify(token,secret)
    }catch{
        return res.status(422).json({ msg : "Token inválido"})
    }
    console.log("token ", token);
    next()
}

app.get('/autenticacao/cadastro', async (req,res)=>{
    const {nome, email, senha, confirmaSenha} = req.body
    if(!nome){
        return res.status(422).json({ msg : 'O Nome precisa é obrigatório'})
    }
    if(!email){
        return res.status(422).json({ msg : 'O Email precisa é obrigatório'})
    }
    if(!senha){
        return res.status(422).json({ msg : 'A Senha precisa é obrigatória'})
    }
    if(senha != confirmaSenha){
        return res.status(422).json({ msg : 'As senhas são diferentes'})
    }
    if(email == mockedUser.email){
        return res.status(422).json({ msg : 'Este Usuário já existe'})
    }
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(senha,salt)
    console.log("passwordHash ", passwordHash);
    console.log('usuario cadastrado com sucesso')
    return res.status(200).json({msg : "Usuario cadastrado com sucesso!"})
})
app.get('/autenticacao/entrar',checkToken, async (req,res)=>{
    const {email, senha} = req.body

    if(!email){
        return res.status(422).json({ msg : 'O Email precisa é obrigatório'})
    }
    if(!senha){
        return res.status(422).json({ msg : 'A Senha precisa é obrigatória'})
    }
    if(email != mockedUser.email){
        return res.status(404).json({ msg : 'Usuário não encontrado'})
    }
    const checkSenha = await bcrypt.compare(senha, mockedUser.senha)
    if(!checkSenha){
        return res.status(422).json({ msg : 'Senha Incorreta'})
    }
    const secret = process.env.secret
    const token = jwt.sign({
        id : mockedUser.id
    },secret)

    return res.status(200).json({
        msg : "Login realizado com sucesso!",
        token
    })
})


app.listen(process.env.PORT);

console.log('Servidor rodando em http://localhost:3001/');