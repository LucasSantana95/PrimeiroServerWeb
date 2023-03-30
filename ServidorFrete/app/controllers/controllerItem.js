const modelItens = require('../models/item');

module.exports = {
    get: (req,res) => {
        modelItens.find().sort('autor').then((livros)=>{
            res.render('../views/item.ejs',{livros});
        })
    },
    getById: (req,res) => {
        modelItens.findById(req.params.id).sort('autor').then((livros)=>{
            res.render('../views/item.ejs',{livros});
        })
    },
    additens: (req,res) => {
        res.render('additens.ejs');
        
    },
    post: (req,res) => {
        if(req.body.nome != "" || req.body.nome != undefined || req.body.autor != "" || req.body.autor != undefined){
            var livro = new modelItens({nome: req.body.nome, autor: req.body.autor});
            livro.save();
            console.log("Livro inserido com sucesso!");
            res.redirect('/itens');
        }
    },
    alterar: (req,res) => {
        modelItens.findById(req.params.id, (err,docs) => {
            if(err){
                console.log(err);
            }
            else{
                res.render('alteraritem.ejs',{Livro : docs});
            }
        })
    },
    alterarpost: (req,res) => {
        console.log('novo nome: ' + req.body.nome + ' novo autor: '+ req.body.autor);
        modelItens.findByIdAndUpdate({ _id: req.params.id }, { nome: req.body.nome,autor: req.body.autor },(err) =>{
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/itens');
            }
            
        });
    },
    deletar: (req,res) => {
        modelItens.findByIdAndDelete(req.params.id, (err) => {
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/itens');
            }
        })
    }
}